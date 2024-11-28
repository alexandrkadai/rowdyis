import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/app/lib/db';
import { cookies } from 'next/headers';
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
    <div className="mt-[150px] flex flex-row justify-between">
      {data.map((item) => (
        <div
          className="relative h-[500px] w-[500px] cursor-pointer border-[4px] border-blue-700"
          key={item.id}
        >
          <Link href={`/shop/${item.id}`}>
            <Image src={item.images[0]} alt="tshirt test" fill />
          </Link>
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
