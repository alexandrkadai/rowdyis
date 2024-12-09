import { deleteProduct } from '@/app/actions';
import SubmitButton from '@/app/components/SubmitButton';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type Params = Promise<{ id: string }>

export default async function DeleteRoute({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  return (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>
            Are you Absolutely sure to delete this Product ?
          </CardTitle>
          <CardDescription className="pb-2">
            This Action cannot be undone once you delete product you will lost
            all data about it.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex w-full justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={id} />
            <SubmitButton variant="destructive" text="Delete Product" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
