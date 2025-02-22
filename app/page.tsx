'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  const router = useRouter();

  if (wokes === true) {
    setTimeout(() => {
      router.push('/shop');
    }, 4000);
  }

  return (
    <div
      className="w-full h-[100vh] relative flex text-center justify-center cursor-[url(cursor.cur),_pointer] bg-[#fcfcff]">
      <div className="absolute top-28 left-0 right-0 m-auto text-center">
        <Image
          src={sleep}
          width={100}
          height={100}
          alt="animation sleep"
          priority
          className={cn(
            wokes ? 'opacity-0' : 'opacity-100',
            'absolute top-10 left-0 right-0 m-auto text-center w-96 transition-opacity duration-300',
          )}
        />
        <Image
          src={woke}
          width={100}
          height={100}
          alt="animation woke"
          className={cn(
            wokes ? 'opacity-100' : 'opacity-0',
            'absolute top-10 left-0 right-0 m-auto text-center w-96 transition-opacity duration-300',
          )}
        />
      </div>
      <Button
        className="uppercase absolute bottom-[20%] m-auto transition-transform hover:scale-105 active:scale-95"
        onClick={() => setWokes(true)}>
        Start
      </Button>
    </div>
  );
}