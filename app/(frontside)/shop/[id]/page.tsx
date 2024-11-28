import Image from 'next/image';
import prisma from '@/app/lib/db';
import ProductSize from '@/app/components/frontside/ProductSize';

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return data;
}

export default async function OneProductRoute({
  params,
}: {
  params: { id: string };
}) {
  const id = await params;
  const data = await getData(id.id);
  const imagesP = data!.images;

  return (
    <div className="w-ful mt-10 flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
      <div className="flex w-full flex-col gap-5 relative">
        {imagesP.map((item) => (
          <Image
            src={item}
            className='w-auto h-[400px]'
            fill
            alt="Product Image"
            key={item}
          />
        ))}
      </div>
      <div className="ml-5 flex w-full flex-col text-left">
        <h2 className="text-[45px] font-bold uppercase">{data?.name}</h2>
        <span className="mt-2 text-[45px] font-bold">
          {data?.price} &#8372;
        </span>
        <ProductSize data={data!} />
        <article className="mt-10 text-sm text-muted-foreground">
          {data?.description}
        </article>
      </div>
    </div>
  );
}
