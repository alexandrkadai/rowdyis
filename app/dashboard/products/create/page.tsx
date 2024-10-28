'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UploadDropzone } from '@/lib/uploadthing';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className="flex items-center gap-4 mt-2">
        <Button variant="outline" size="default" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft size={24} strokeWidth={3} />
            <span className="uppercase font-bold">Go Back</span>
          </Link>
        </Button>
      </div>
      <form className="mt-10 pb-10">
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl uppercase'>Add new Product</CardTitle>
            <CardDescription>Create new Product for your Store</CardDescription>
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
              <div className="flex flex-col gap-4">
                <Label>Price</Label>
                <Input type="number" placeholder="Please Enter the Price $" />
                {/* <p className=""></p> //ERROr */}
              </div><h2>Sizes</h2>
              <div className="flex flex-row gap-4">
              
              <div className="flex flex-col gap-4 w-[150px]">
                <Label>S</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4 w-[150px]">
                <Label>M</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4 w-[150px]">
                <Label>L</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4 w-[150px]">
                <Label>XL</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4 w-[150px]">
                <Label>2XL</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>

              <div className="flex flex-col gap-4 w-[150px]">
                <Label>3XL</Label>
                <Input type="number" placeholder="Please Enter the number of size S" />
                {/* <p className=""></p> //ERROr */}
              </div>


              </div>
              <div className="flex flex-col gap-4">
                <Label>Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Hoody</SelectItem>
                    <SelectItem value="published">Sweatshirt</SelectItem>
                    <SelectItem value="archived">Tshirt</SelectItem>
                  </SelectContent>
                </Select>
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4">
                <Label>Images</Label>
                <UploadDropzone endpoint="imageUploader" />
                {/* <p className=""></p> //ERROr */}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="create product" variant="default" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
