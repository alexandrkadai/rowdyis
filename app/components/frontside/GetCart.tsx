import { iCart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { getUserId } from '@/app/lib/userClaude';

export default async function GetCart() {
  try {
    const userID = await getUserId();

    if (!userID) {
      throw new Error('User ID is not set');
    }

    const cart: iCart | null = await redis.get(`cart-${userID}`);

    if (cart !== null && Array.isArray(cart.items)) {
      const itemsCart = cart.items;
      const total = itemsCart.reduce(
        (sum, item) => sum + (item?.quantity || 0),
        0
      );
      const totalPrice = itemsCart.reduce(
        (sum, item) => sum + (item?.quantity || 0) * (item?.price || 0),
        0
      );
      return { itemsCart, total, totalPrice };
    }
    return { itemsCart: [], total: 0, totalPrice: 0 };
  } catch (error) {
    console.error('Error retrieving cart:', error);
    return { itemsCart: [], total: 0, totalPrice: 0 };
  }
}