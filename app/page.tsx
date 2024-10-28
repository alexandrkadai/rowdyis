'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { Suspense, useState } from 'react';
import { redirect } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  if (wokes === true) {
    setTimeout(() => {
      redirect('/shop');
    }, 5000);
  }

  return (
    <Suspense fallback={<MainLoadingScreen />}>
      <div
        className="w-full h-[100vh] relative flex text-center justify-center cursor-pointer bg-[#fcfcff] "
        onClick={() => setWokes(true)}>
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
            placeholder="blur"
            blurDataURL="/app/assets/animation/SleepBlur.jpeg"
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
    </Suspense>
  );
}

function MainLoadingScreen() {
  return (
    <div className="w-full h-full ">
      <div className="absolute top-28 left-0 right-0 m-auto text-center">
        <Skeleton className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
}
