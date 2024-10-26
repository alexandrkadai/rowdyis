'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
          <Link href="/dasboard/products">
            <ChevronLeft size={24} strokeWidth={3} />
            <span className="uppercase font-bold">Go Back</span>
          </Link>
        </Button>
      </div>
      <h1 className="uppercase font-bold text-2xl mt-5">Add new Product</h1>
      <form className="mt-5 pb-10">
        <Card>
          <CardHeader>
            <CardTitle>Add new Product</CardTitle>
            <CardDescription>Add new Product</CardDescription>
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
                <Label>Collection</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Collection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">SweetVibe</SelectItem>
                    <SelectItem value="published">Season 18</SelectItem>
                    <SelectItem value="archived">Academy 1</SelectItem>
                  </SelectContent>
                </Select>
                {/* <p className=""></p> //ERROr */}
              </div>
              <div className="flex flex-col gap-4">
                <Label>Images</Label>
                <UploadDropzone  endpoint="imageUploader" />
                {/* <p className=""></p> //ERROr */}
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
