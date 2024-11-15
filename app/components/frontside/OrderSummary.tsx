import { iCart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { getUserId } from '@/app/lib/userClaude';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default async function OrderSummary() {
  const userID = await getUserId();

  if (!userID) {
    throw new Error('User ID is not set');
  }

  const cart: iCart | null = await redis.get(`cart-${userID}`);
  const itemsCart = cart?.items;
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const totalPrice = cart?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) || 0;
  return (
    <div className="relative w-full flex">
      <div className="w-[400px] flex flex-col bg-white">
        <h4 className="text-2xl font-bold">Підсумок</h4>
        <div className="mt-5">
          {itemsCart?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-between mt-5 uppercase font-bold text-[20px]">
              <span>{item.name}</span>
              <Image
                src={item.image}
                alt="Product Image"
                width={32}
                height={32}
                className="rounded-xl"
              />
              <span>{item.price}</span>
              <span>{item.sizeItem}</span>
              <span>{item.quantity}</span>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center  font-bold text-[20px] mt-5">
            <span>Всього :</span>
            <span>{total}</span>
          </div>
          <div className="mt-10 flex justify-between">
            <span className="uppercase "> Що по грошам :</span>
            <span className="uppercase">{totalPrice} GRN</span>
          </div>
          <Button className="uppercase mt-5">Оплатити</Button>
        </div>
      </div>
    </div>
  );
}
