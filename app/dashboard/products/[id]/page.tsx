import EditForm from '@/app/components/dashboard/EditForm';
import prisma from '@/app/lib/db';
import { notFound } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';


async function getData(productId: string) {
  noStore();
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}
type Params = Promise<{ id: string }>

export default async function EditProduct({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div>
      <EditForm data={data} />
    </div>
  );
}
