import SubmitButton from '@/app/components/SubmitButton';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateCategory() {
  return (
    <>
      <div className="mt-5">
        <Button asChild variant="outline">
          <Link href="/dashboard/category" className="font-bold uppercase">
            <ChevronLeft size={24} strokeWidth={3} />
            Go back
          </Link>
        </Button>
      </div>
      <form action="" className="mt-10 pb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl uppercase">
              Create New Category
            </CardTitle>
            <CardDescription>
              Create new category for the products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Label>Name</Label>
                <Input type="text" placeholder="Please Enter the Name" />
                {/* <p className=""></p> //////ERROr */}
              </div>
              <div className="flex flex-col gap-4">
                <Label>Description</Label>
                <Textarea placeholder="Please Enter the Description" />
                {/* <p className=""></p> //ERROr */}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton variant="default" text="Create category" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
