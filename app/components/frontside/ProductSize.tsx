'use client';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { type $Enums } from '@prisma/client';
import React, { useState } from 'react';
import { addItem } from '@/app/actions';
interface iDataProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
  };
}

export default function ProductSize({ data }: iDataProps) {
  const [size, setSize] = useState<string>('');
  const addProductShoppingCart = addItem.bind(null, data.id);
  return (
    <>
      <span className="mt-5 uppercase tracking-wide">Please Select Size</span>
      <RadioGroup defaultValue="" className="flex flex-row mt-2 gap-5">
        <div className="flex items-center space-x-2 relative " onClick={() => setSize('s')}>
          <RadioGroupItem
            value="s"
            id="sizeS"
            className={cn(size === 's' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="sizeS"
            className={cn(
              size === 's' ? 'text-black' : 'text-gray-300',
              'absolute right-[13px] text-[25px] font-bold pointer-events-none',
            )}>
            S
          </label>
        </div>

        <div className="flex items-center space-x-2 relative" onClick={() => setSize('m')}>
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'm' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'm' ? 'text-black' : 'text-gray-300',
              'absolute right-[11px] text-[25px] font-bold pointer-events-none',
            )}>
            M
          </label>
        </div>

        <div className="flex items-center space-x-2 relative" onClick={() => setSize('l')}>
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'l' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'l' ? 'text-black' : 'text-gray-300',
              'absolute h-10 w-10 left-[5px] text-[25px] font-bold pointer-events-none',
            )}>
            L
          </label>
        </div>

        <div className="flex items-center space-x-2 relative" onClick={() => setSize('xl')}>
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'xl' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'xl' ? 'text-black' : 'text-gray-300',
              'absolute right-[4px] text-[25px] font-bold pointer-events-none',
            )}>
            XL
          </label>
        </div>

        <div className="flex items-center space-x-2 relative" onClick={() => setSize('xxl')}>
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === '2xl' ? 'border-black' : 'border-gray-300', 'w-14')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'xxl' ? 'text-black' : 'text-gray-300',
              'absolute right-[5px] text-[25px] font-bold pointer-events-none',
            )}>
            2XL
          </label>
        </div>
      </RadioGroup>
      <form action={addProductShoppingCart} className="mt-10">
        <Button className="uppercase font-bold rounded-none">Add to Cart</Button>
      </form>
    </>
  );
}
