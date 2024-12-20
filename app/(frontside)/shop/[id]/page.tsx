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
type Params = Promise<{ id: string }>;

export default async function OneProductRoute({ params }: { params: Params }) {
  const id = await params;
  const data = await getData(id.id);
  const imagesP = data!.images;

  return (
    <div className="mt-10 flex w-full flex-col-reverse lg:flex-row">
      <div className="mt-5 flex w-full flex-col items-center gap-5 lg:mt-0">
        {imagesP.map((item) => (
          <Image
            src={item}
            width={350}
            height={400}
            alt="Product Image"
            key={item}
          />
        ))}
      </div>
      <div className="flex w-full flex-col text-left p-5 lg:ml-5">
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
