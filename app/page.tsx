'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  if (wokes === true) {
    setTimeout(() => {
      redirect('/shop');
    }, 6000);
  }
  return (
    <div className="w-full h-[100vh] relative flex text-center justify-center cursor-pointer bg-[#fcfcff] ">
      <div className="absolute top-28 left-0 right-0 m-auto text-center">
        <Image
          src={sleep}
          width={100}
          height={100}
          alt="animation sleep"
          className={cn(
            wokes === false ? 'block' : 'hidden',
            'absolute top-10 left-0 right-0 m-auto text-center w-96',
          )}
        />
        <Image
          src={woke}
          width={100}
          height={100}
          alt="animation woke"
          className={cn(
            wokes === false ? 'hidden' : 'block',
            'absolute top-10 left-0 right-0 m-auto text-center w-96',
          )}
        />
      </div>
      <Button className="uppercase absolute bottom-12  m-auto" onClick={() => setWokes(true)}>
        Start
      </Button>
    </div>
  );
}
