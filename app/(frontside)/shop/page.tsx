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
    <div className="mt-[150px] grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 justify-center items-center">
      {data.map((item) => (
        <div
          className="w-[350px] h-[400px] relative border-2 border-black m-auto  cursor-pointer"
          key={item.id}>
          <Link href={`/shop/${item.id}`}>
            <Image src={item.images[0]} alt="tshirt test" fill />
          </Link>
          <div className="absolute flex flex-col left-10 bottom-10">
            <span className="uppercase text-md font-bold">{item.name}</span>
            <span className="uppercase text-md font-bold">{item.price} &#8372;</span>
          </div>
        </div>
      ))}
    </div>
  );
}
