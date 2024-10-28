'use client';
import { usePathname } from 'next/navigation';
import first from '@/app/assets/testimage/Misprint+Tee+1.png';
import second from '@/app/assets/testimage/Misprint+Tee+2.png';
import third from '@/app/assets/testimage/White+Tag+1.png';
import fourth from '@/app/assets/testimage/White+Tag+2.png';
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function OneProductRoute() {
  const [size, setSize] = useState<string>('');
  
  const itemId = usePathname();
  return (
    <div className="w-ful flex  sm:flex-col-reverse md:flex-col-reverse lg:flex-row mt-10 ">
      <div className="w-full flex flex-col gap-5 ">
        <Image src={first} width={350} height={350} alt="Product Image" />
        <Image src={second} width={350} height={350} alt="Product Image" />
        <Image src={third} width={350} height={350} alt="Product Image" />
        <Image src={fourth} width={350} height={350} alt="Product Image" />
      </div>

      <div className="w-full flex flex-col ml-5 text-left">
        <h2 className="text-[45px] font-bold uppercase">Tee Shirt</h2>
        <span className="mt-2 font-bold text-[45px]">3099 &#8372;</span>
        <span className="mt-5 uppercase tracking-wide">Please Select Size</span>

        <RadioGroup defaultValue="" className="flex flex-row mt-2 gap-5">
          <div className="flex items-center space-x-2 relative " onClick={() => setSize('s')}>
            <RadioGroupItem value="option-one" id="option-one" />
            <label
              htmlFor="option-one"
              className={cn(
                size === 's' ? 'text-black' : 'text-gray-300',
                'absolute right-[13px] text-[25px] font-bold pointer-events-none',
              )}>
              S
            </label>
          </div>

          <div className="flex items-center space-x-2 relative" onClick={() => setSize('m')}>
            <RadioGroupItem value="option-two" id="option-two" />
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
            <RadioGroupItem value="option-two" id="option-two" />
            <label
              htmlFor="option-two"
              className={cn(
                size === 'l' ? 'text-black' : 'text-gray-300',
                'absolute h-10 w-10 left-[10px] text-[25px] font-bold pointer-events-none',
              )}>
              L
            </label>
          </div>

          <div className="flex items-center space-x-2 relative" onClick={() => setSize('xl')}>
            <RadioGroupItem value="option-two" id="option-two" />
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
            <RadioGroupItem value="option-two" id="option-two" />
            <label
              htmlFor="option-two"
              className={cn(
                size === 'xxl' ? 'text-black' : 'text-gray-300',
                'absolute right-[0px] text-[25px] font-bold pointer-events-none',
              )}>
              2XL
            </label>
          </div>
        </RadioGroup>
        <div className="mt-10">
          <Button className="uppercase font-bold rounded-none">Add to Cart</Button>
        </div>
        <article className='mt-10 text-sm text-muted-foreground'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
        </article>
      </div>
    </div>
  );
}
