'use client';

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
import Image from 'next/image';
import SubmitButton from '../SubmitButton';
import { useActionState, useState } from 'react';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { productShema } from '@/app/lib/zodSchemas';
import { editProduct } from '@/app/actions';
import { XIcon } from 'lucide-react';
import { type $Enums } from '@prisma/client';

interface iDataProduct {
  data: {
    id: string;
    name: string;
    description: string;
    images: string[];
    status: $Enums.ProductStatus;
    price: number;
    category: $Enums.Category;
    sizeS: number;
    sizeM: number;
    sizeL: number;
    sizeXL: number;
    size2xl: number;
    size3xl: number;
  };
}

export default function EditForm({ data }: iDataProduct) {
  const [images, setImages] = useState<string[]>(data.images);
  const [lastResult, action] = useActionState(editProduct, undefined);

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
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="mt-10 pb-10"
    >
      <input type="hidden" name="productId" value={data.id} />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl uppercase">Edit Product</CardTitle>
          <CardDescription>Edit Product for your Store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Label>Name</Label>
              <Input
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={data.name}
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
                defaultValue={data.description}
                placeholder="Please Enter the Description"
              />
              <p className="text-red-500">{fields.description.errors}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Price</Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={data.price}
                type="number"
                placeholder="Please Enter the Price $"
              />
              <p className="text-red-500">{fields.price.errors}</p>
            </div>
            <h2>Sizes</h2>
            <div className="flex flex-row gap-4">
              <div className="flex w-[150px] flex-col gap-4">
                <Label>S</Label>
                <Input
                  key={fields.sizeS.key}
                  name={fields.sizeS.name}
                  defaultValue={data.sizeS}
                  type="number"
                  placeholder="Please Enter the number of size S"
                />
                <p className="text-red-500">{fields.sizeS.errors}</p>
              </div>
              <div className="flex w-[150px] flex-col gap-4">
                <Label>M</Label>
                <Input
                  key={fields.sizeM.key}
                  name={fields.sizeM.name}
                  defaultValue={data.sizeM}
                  type="number"
                  placeholder="Please Enter the number of size S"
                />
              </div>
              <div className="flex w-[150px] flex-col gap-4">
                <Label>L</Label>
                <Input
                  key={fields.sizeL.key}
                  name={fields.sizeL.name}
                  defaultValue={data.sizeL}
                  type="number"
                  placeholder="Please Enter the number of size S"
                />
              </div>
              <div className="flex w-[150px] flex-col gap-4">
                <Label>XL</Label>
                <Input
                  key={fields.sizeXl.key}
                  name={fields.sizeXl.name}
                  defaultValue={data.sizeXL}
                  type="number"
                  placeholder="Please Enter the number of size S"
                />
              </div>
              <div className="flex w-[150px] flex-col gap-4">
                <Label>2XL</Label>
                <Input
                  key={fields.size2xl.key}
                  name={fields.size2xl.name}
                  defaultValue={data.size2xl}
                  type="number"
                  placeholder="Please Enter the number of size S"
                />
              </div>

              <div className="flex w-[150px] flex-col gap-4">
                <Label>3XL</Label>
                <Input
                  key={fields.size3xl.key}
                  name={fields.size3xl.name}
                  defaultValue={data.size3xl}
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
                defaultValue={data.status}
              >
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
                defaultValue={data.category}
              >
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
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((image, index) => (
                    <div className="relative h-[100px] w-[100px]" key={index}>
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="product image"
                        className="h-full w-full rounded-lg border-2 border-black object-cover"
                      />
                      <button
                        type="button"
                        className="absolute -right-3 -top-3 rounded-lg bg-red-500 p-2"
                        onClick={() => handleDeleteImage(index)}
                      >
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
                  onUploadError={(e) =>
                    alert(
                      'Something Went Wrong try again with smaller file' +
                        e.code
                    )
                  }
                />
              )}
              <p className="text-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="update product" variant="default" />
        </CardFooter>
      </Card>
    </form>
  );
}
