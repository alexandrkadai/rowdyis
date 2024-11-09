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

export default async function OneProductRoute({ params }: { params: { id: string } }) {
  
  const id = await params;
  const data = await getData(id.id);
  const imagesP = data!.images;

  return (
    <div className="w-ful flex  sm:flex-col-reverse md:flex-col-reverse lg:flex-row mt-10 ">
      <div className="w-full flex flex-col gap-5 ">
        {imagesP.map((item) => (
          <Image src={item} width={350} height={350} alt="Product Image" key={item} />
        ))}
      </div>
      <div className="w-full flex flex-col ml-5 text-left">
        <h2 className="text-[45px] font-bold uppercase">{data?.name}</h2>
        <span className="mt-2 font-bold text-[45px]">{data?.price} &#8372;</span>
        <ProductSize data={data!}  />
        <article className="mt-10 text-sm text-muted-foreground">{data?.description}</article>
      </div>
    </div>
  );
}
