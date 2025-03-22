import { z } from 'zod';

export const productShema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number().min(1),
  images: z.array(z.string().min(1)),
  category: z.enum(['men', 'women']),
  sizeS: z.number().optional(),
  sizeM: z.number().optional(),
  sizeL: z.number().optional(),
  sizeXl: z.number().optional(),
  size2xl: z.number().optional(),
  size3xl: z.number().optional(),
});

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const orderSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  phoneNum: z.string().regex(phoneRegex, 'Invalid phone'),
  emailAdd: z.string().regex(emailRegex, 'Invalid Email'),
  city: z.string().min(3),
  warhouse: z.string().min(3),
  cartId: z.string(),
});

export const orederWorldSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  emailAdd: z.string().regex(emailRegex, 'Invalid Email'),
  phoneNum: z.string().regex(phoneRegex, 'Invalid phone'),
  address: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(3),
  zip: z.string().min(3),
  country: z.string().min(3),
});

export const contactFormSchema = z.object({
  name: z.string().min(3),
  phone: z.string().regex(phoneRegex, 'Invalid phone'),
  email: z.string().regex(emailRegex, 'Invalid Email'),
  message: z.string().min(10),
});
