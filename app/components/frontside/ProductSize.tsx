'use client';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { type $Enums } from '@prisma/client';
import React, { useState } from 'react';
import { addItem } from '@/app/actions';
import { useAlertManager } from '@/app/hooks/useAlert';
import { AlertManager } from './AlertManage';
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
  const { alerts, addAlert } = useAlertManager();

  const handleSubmitForm = async () => {
    if (size === '') {
      addAlert('Please Select Size', 'error');
      return;
    }
    const result = await addItem(data.id, size);
    addAlert('Product added successfully!');
    setSize('');
  };

  return (
    <>
      <RadioGroup className="mt-2 flex w-full flex-row gap-5">
        <div
          className="relative flex items-center space-x-2"
          onClick={() => setSize('s')}
        >
          <RadioGroupItem
            value="s"
            id="sizeS"
            className={cn(size === 's' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="sizeS"
            className={cn(
              size === 's' ? 'text-black' : 'text-gray-300',
              'pointer-events-none absolute right-[13px] text-[25px] font-bold'
            )}
          >
            S
          </label>
        </div>
        <div
          className="relative flex items-center space-x-2 px-1.5"
          onClick={() => setSize('m')}
        >
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'm' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'm' ? 'text-black' : 'text-gray-300',
              'pointer-events-none absolute right-[11px] text-[25px] font-bold'
            )}
          >
            M
          </label>
        </div>
        <div
          className="relative flex items-center space-x-2"
          onClick={() => setSize('l')}
        >
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'l' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'l' ? 'text-black' : 'text-gray-300',
              'pointer-events-none absolute left-[5px] h-10 w-10 text-[25px] font-bold'
            )}
          >
            L
          </label>
        </div>

        <div
          className="relative flex items-center space-x-2 px-2"
          onClick={() => setSize('xl')}
        >
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(size === 'xl' ? 'border-black' : 'border-gray-300')}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'xl' ? 'text-black' : 'text-gray-300',
              'pointer-events-none absolute right-[7px] text-nowrap text-[24px] font-bold lg:right-[9px]'
            )}
          >
            XL
          </label>
        </div>

        <div
          className="relative flex w-[120px] items-center space-x-5 lg:w-[95px]"
          onClick={() => setSize('xxl')}
        >
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className={cn(
              size === '2xl' ? 'border-black' : 'border-gray-300',
              'w-14'
            )}
          />
          <label
            htmlFor="option-two"
            className={cn(
              size === 'xxl' ? 'text-black' : 'text-gray-300',
              'pointer-events-none absolute right-[25px] text-[23px] lg:text-[25px] font-bold lg:right-[38px]'
            )}
          >
            2XL
          </label>
        </div>
      </RadioGroup>

      <form action={handleSubmitForm} className="mt-10">
        <Button className="rounded-none font-bold uppercase">
          Add to Cart
        </Button>
      </form>
      <AlertManager alerts={alerts} />
    </>
  );
}
