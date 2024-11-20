'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { Suspense, useState } from 'react';
import { redirect } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  if (wokes === true) {
    setTimeout(() => {
      redirect('/shop');
    }, 4700);
  }

  return (
    <Suspense fallback={<MainLoadingScreen />}>
      <div
        className="w-full h-[100vh] relative flex text-center justify-center cursor-[url(cursor.cur),_pointer] bg-[#fcfcff] "
        onClick={() => setWokes(true)}>
        <div className="absolute top-28 left-0 right-0 m-auto text-center">
          {isLoading && (
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="animate-spin" />
              <span className="font-bold text-lg">Loading...</span>
            </div>
          )}
          <>
            <Image
              src={sleep}
              width={100}
              height={100}
              alt="animation sleep"
              priority
              className={cn(
                wokes === false ? 'opacity-100' : 'opacity-0',
                isLoading ? 'opacity-0' : 'opacity-100',
                'absolute top-10 left-0 right-0 m-auto text-center w-96 transition-opacity duration-300',
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
            <Image
              src={woke}
              width={100}
              height={100}
              alt="animation woke"
              className={cn(
                wokes === false ? 'opacity-0' : 'opacity-100',
                'absolute top-10 left-0 right-0 m-auto text-center w-96 transition-opacity duration-300',
              )}
            />
          </>
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
