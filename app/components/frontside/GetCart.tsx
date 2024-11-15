import { iCart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { getUserId } from '@/app/lib/userClaude';

export default async function GetCart() {
  const userID = await getUserId();

  if (!userID) {
    throw new Error('User ID is not set');
  }

  const cart: iCart | null = await redis.get(`cart-${userID}`);
  const itemsCart = cart?.items;
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const totalPrice = cart?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0;
  return { itemsCart, total, totalPrice };
}
