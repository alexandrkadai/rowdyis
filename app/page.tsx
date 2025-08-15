'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!wokes) return;
    const timer = setTimeout(() => router.push('/shop'), 5000);
    return () => clearTimeout(timer);
  }, [wokes]);

  const handleStart = useCallback(() => {
    setWokes(true);
  }, []);

  const imageBaseClass =
    'absolute left-0 right-0 top-10 m-auto w-96 text-center transition-opacity duration-500 ease-in-out';

  return (
    <div className="relative flex h-screen w-full cursor-[url(cursor.cur),_pointer] justify-center bg-[#fcfcff] text-center">
      {/* Both animations are preloaded */}
      <div className="absolute left-0 right-0 top-28 m-auto text-center">
        <Image
          src={sleep}
          width={384}
          height={384}
          alt="sleep animation"
          priority
          className={cn(
            wokes ? 'opacity-0 pointer-events-none' : 'opacity-100',
            imageBaseClass
          )}
        />
        <Image
          src={woke}
          width={384}
          height={384}
          alt="woke animation"
          priority
          className={cn(
            wokes ? 'opacity-100' : 'opacity-0 pointer-events-none',
            imageBaseClass
          )}
        />
      </div>

      
      <Button
        disabled={wokes}
        onClick={handleStart}
        className="absolute bottom-[20%] m-auto uppercase transition-transform hover:scale-105 active:scale-95"
      >
        {wokes ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
          </>
        ) : (
          'Start'
        )}
      </Button>
    </div>
  );
}