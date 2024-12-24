'use server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import {
  productShema,
  orderSchema,
  orederWorldSchema,
  contactFormSchema,
} from './lib/zodSchemas';
import prisma from './lib/db';
import { redis } from './lib/redis';
import { iCart } from './lib/interfaces';
import { getUserId } from './lib/userClaude';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productShema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim())
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      status: submission.value.status,
      sizeS: submission.value.sizeS ?? 0,
      sizeM: submission.value.sizeM ?? 0,
      sizeL: submission.value.sizeL ?? 0,
      sizeXL: submission.value.sizeXl ?? 0,
      size2xl: submission.value.size2xl ?? 0,
      size3xl: submission.value.size3xl ?? 0,
      images: flattenUrls,
    },
  });

  redirect('/dashboard/products');
}

export async function editProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    redirect('/');
  }

  const submission = parseWithZod(formData, {
    schema: productShema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }
  const productId = formData.get('productId') as string;

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(',').map((url) => url.trim())
  );

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      status: submission.value.status,
      sizeS: submission.value.sizeS ?? 0,
      sizeM: submission.value.sizeM ?? 0,
      sizeL: submission.value.sizeL ?? 0,
      sizeXL: submission.value.sizeXl ?? 0,
      size2xl: submission.value.size2xl ?? 0,
      size3xl: submission.value.size3xl ?? 0,
      images: flattenUrls,
    },
  });

  redirect('/dashboard/products');
}

export async function deleteProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== 'kaldikonly@gmail.com') {
    redirect('/');
  }

  await prisma.product.delete({
    where: {
      id: formData.get('productId') as string,
    },
  });

  redirect('/dashboard/products');
}

export async function addItem(productId: string, size: string) {
  const userID = await getUserId();

  if (!userID) {
    throw new Error('User ID is not set');
  }

  const cart: iCart | null = await redis.get(`cart-${userID}`);

  const selectedProduct = await prisma.product.findUnique({
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
    },
    where: {
      id: productId,
    },
  });

  if (!selectedProduct) {
    throw new Error('Product not found');
  }

  let myCart = {} as iCart;

  if (!cart || !cart.items) {
    myCart = {
      userID: userID,
      items: [
        {
          id: selectedProduct?.id,
          name: selectedProduct?.name,
          price: selectedProduct?.price,
          image: selectedProduct?.images[0],
          sizeItem: size,
          quantity: 1,
        },
      ],
    };
  } else {
    let found = false;

    myCart.items = cart.items.map((item) => {
      if (item.id === productId && item.sizeItem === size) {
        found = true;
        item.quantity += 1;
      }
      return item;
    });

    if (!found) {
      myCart.items.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.images[0],
        sizeItem: size,
        quantity: 1,
      });
    }
  }

  await redis.set(`cart-${userID}`, myCart);

  revalidatePath('/', 'layout');
}

export async function deleteOneItem(formData: FormData) {
  const userID = await getUserId();
  const itemId = formData.get('itemId') as string;
  const sizeToD = formData.get('sizeToD') as string;
  if (!userID) {
    throw new Error('User ID is not set');
  }

  const cart: iCart | null = await redis.get(`cart-${userID}`);

  const updatedCart = {
    items: cart?.items
      .map((item) => {
        if (item.id === itemId && item.sizeItem === sizeToD) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0),
  };

  await redis.set(`cart-${userID}`, updatedCart);

  revalidatePath('/', 'layout');
}
export async function addOneItem(formData: FormData) {
  const userID = await getUserId();
  const itemId = formData.get('itemId') as string;
  const sizeToD = formData.get('sizeToD') as string;
  if (!userID) {
    throw new Error('User ID is not set');
  }

  const cart: iCart | null = await redis.get(`cart-${userID}`);

  const updatedCart = {
    items: cart?.items.map((item) => {
      if (item.id === itemId && item.sizeItem === sizeToD) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    }),
  };

  await redis.set(`cart-${userID}`, updatedCart);

  revalidatePath('/', 'layout');
}

export async function placeOrder(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: orderSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.placeOrer.create({
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      phoneNum: submission.value.phoneNum,
      emailAdd: submission.value.emailAdd,
      city: submission.value.city,
      warhouse: submission.value.warhouse,
      cartId: submission.value.cartId,
    },
  });
}

export async function placeOrderWorld(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: orederWorldSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.placeWorldOrder.create({
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      emailAdd: submission.value.emailAdd,
      phoneNum: submission.value.phoneNum,
      address: submission.value.address,
      city: submission.value.city,
      state: submission.value.state,
      zip: submission.value.zip,
      country: submission.value.country,
    },
  });
}


export async function contactFormAction(
  prevState: unknown,
  formData: FormData,
) {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }
  const verifiedData = {
    name: submission.value.name,
    phone: submission.value.phone,
    email: submission.value.email,
    message: submission.value.message,
  };

  

  try {
    const response = await fetch('http://192.168.0.100:3000/api/sendRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(verifiedData),
    });

    if (!response.ok) throw new Error('Failed to send message');

  console.log('Sending email...');
    
  } catch (error: any) {
    console.log('Failed to send message. Please try again.' + error.message);
  }

};
  

