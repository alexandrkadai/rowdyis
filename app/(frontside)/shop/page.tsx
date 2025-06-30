// app/shop/page.tsx
import prisma from '@/app/lib/db';
import ShopImages from '@/app/components/frontside/ShopImages';
import { cache } from 'react';

export const revalidate = 60; // <-- Regenerate page every 60 seconds

// Wrap the DB call in a cached function
const getData = cache(async () => {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
});

export default async function ShopPage() {
  const data = await getData();

  return (
    <div className="mt-[150px] flex flex-col items-center justify-center gap-y-5 lg:flex-row lg:justify-between">
      {data.map((item) => (
        <div
          className="relative h-[350px] w-[350px] cursor-pointer border-[4px] border-blue-700 lg:h-[500px] lg:w-[500px]"
          key={item.id}
        >
          <ShopImages images={item.images} id={item.id} />
          <div className="absolute bottom-10 left-10 flex flex-col">
            <span className="text-md font-bold uppercase text-blue-700">
              {item.name}
            </span>
            <span className="text-md font-bold uppercase text-blue-700">
              {item.price} &#8372;
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
