import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/app/lib/db';
import ShopImages from '@/app/components/frontside/ShopImages';

async function getData() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function ShopPage() {
  const data = await getData();
  
  return (
    <div className="mt-[150px] flex flex-col justify-center items-center gap-y-5 lg:flex-row lg:justify-between">
      {data.map((item) => (
        <div
          className="relative h-[350px]
w-[350px] lg:h-[500px] lg:w-[500px] cursor-pointer border-[4px] border-blue-700"
          key={item.id}
        >
        <ShopImages images={item.images} id={item.id}/>
          <div className="absolute bottom-10 left-10 flex flex-col">
            <span className="text-md text-blue-700 font-bold uppercase">
              {item.name}
            </span>
            <span className="text-md text-blue-700 font-bold uppercase">
              {item.price} &#8372;
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}