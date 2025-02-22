import Image from 'next/image';
import GetCart from './GetCart';

export default async function OrderSummary() {
  const { itemsCart, total, totalPrice } = await GetCart();
  return (
    <div className="relative flex w-full">
      <div className="flex w-[400px] flex-col bg-white">
        <h4 className="text-2xl font-bold">Підсумок</h4>
        <div className="mt-5">
          {itemsCart?.map((item, index) => (
            <div
              key={index}
              className="mt-5 flex flex-row justify-between text-[20px] font-bold uppercase"
            >
              <span>{item.name.substring(0, 10)}</span>
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
          <div className="mt-5 flex flex-row items-center justify-between text-[20px] font-bold">
            <span>Всього :</span>
            <span>{total}</span>
          </div>
          <div className="mt-10 flex items-center justify-between rounded-md bg-black p-2 text-white">
            <span className="uppercase"> Що по грошам :</span>
            <span className="uppercase">{totalPrice} GRN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
