'use client';

import { createProduct } from '@/app/actions';
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
import { ChevronLeft, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { productShema } from '@/app/lib/zodSchemas';
import { useActionState, useState } from 'react';
import Image from 'next/image';

export default function ProductCreate() {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useActionState(createProduct, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productShema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
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
      <form id={form.id} onSubmit={form.onSubmit} action={action} className="mt-10 pb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl uppercase">Add new Product</CardTitle>
            <CardDescription>Create new Product for your Store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Label>Name</Label>
                <Input
                  key={fields.name.key}
                  name={fields.name.name}
                  defaultValue={fields.name.initialValue}
                  type="text"
                  placeholder="Please Enter the Name"
                />
                <p className="text-red-500">{fields.name.errors}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Label>Description</Label>
                <Textarea
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={fields.description.initialValue}
                  placeholder="Please Enter the Description"
                />
                <p className="text-red-500">{fields.description.errors}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Label>Price</Label>
                <Input
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={fields.price.initialValue}
                  type="number"
                  placeholder="Please Enter the Price $"
                />
                <p className="text-red-500">{fields.price.errors}</p>
              </div>
              <h2>Sizes</h2>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>S</Label>
                  <Input
                    key={fields.sizeS.key}
                    name={fields.sizeS.name}
                    defaultValue={fields.sizeS.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                  <p className="text-red-500">{fields.sizeS.errors}</p>
                </div>
                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>M</Label>
                  <Input
                    key={fields.sizeM.key}
                    name={fields.sizeM.name}
                    defaultValue={fields.sizeM.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>L</Label>
                  <Input
                    key={fields.sizeL.key}
                    name={fields.sizeL.name}
                    defaultValue={fields.sizeL.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>XL</Label>
                  <Input
                    key={fields.sizeXl.key}
                    name={fields.sizeXl.name}
                    defaultValue={fields.sizeXl.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>2XL</Label>
                  <Input
                    key={fields.size2xl.key}
                    name={fields.size2xl.name}
                    defaultValue={fields.size2xl.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                </div>

                <div className="flex flex-col gap-4 w-[150px]">
                  <Label>3XL</Label>
                  <Input
                    key={fields.size3xl.key}
                    name={fields.size3xl.name}
                    defaultValue={fields.size3xl.initialValue}
                    type="number"
                    placeholder="Please Enter the number of size S"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Label>Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.status.errors}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Label>Category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={fields.category.initialValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.category.errors}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Label>Images</Label>
                <input
                  type="hidden"
                  value={images}
                  key={fields.images.key}
                  name={fields.images.name}
                  defaultValue={fields.images.initialValue as string}
                />
                {images.length > 0 ? (
                  <div className="flex gap-5">
                    {images.map((image, index) => (
                      <div className="relative w-[100px] h-[100px]" key={index}>
                        <Image
                          src={image}
                          width={100}
                          height={100}
                          alt="product image"
                          className="w-full h-full object-cover rounded-lg border-2 border-black"
                        />
                        <button
                          type="button"
                          className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg"
                          onClick={() => handleDeleteImage(index)}>
                          <XIcon size={12} strokeWidth={4} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    className="ut-button:bg-black"
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setImages(res.map((r) => r.url));
                    }}
                    onUploadError={() => alert('Something Went Wrong try again')}
                  />
                )}
                <p className="text-red-500">{fields.images.errors}</p>
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
