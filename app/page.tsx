'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import sleep from '@/app/assets/animation/RowdYSleep.gif';
import woke from '@/app/assets/animation/RowdYWoke.gif';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react'; // Import useEffect
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [wokes, setWokes] = useState(false);
  const router = useRouter();

  // Use useEffect to handle the timeout
  useEffect(() => {
    if (wokes) {
      const timer = setTimeout(() => {
        router.push('/shop');
      }, 4000); // 4 seconds

      // Cleanup the timer if the component unmounts or wokes changes
      return () => clearTimeout(timer);
    }
  }, [wokes, router]);

  return (
    <div className="relative flex h-[100vh] w-full cursor-[url(cursor.cur),_pointer] justify-center bg-[#fcfcff] text-center">
      <div className="absolute left-0 right-0 top-28 m-auto text-center">
        <Image
          src={sleep}
          width={100}
          height={100}
          alt="animation sleep"
          priority
          className={cn(
            wokes ? 'opacity-0' : 'opacity-100',
            'absolute left-0 right-0 top-10 m-auto w-96 text-center transition-opacity duration-300'
          )}
        />
        <Image
          src={woke}
          width={100}
          height={100}
          alt="animation woke"
          className={cn(
            wokes ? 'opacity-100' : 'opacity-0',
            'absolute left-0 right-0 top-10 m-auto w-96 text-center transition-opacity duration-300'
          )}
        />
      </div>
      <Button
        className="absolute bottom-[20%] m-auto uppercase transition-transform hover:scale-105 active:scale-95"
        onClick={() => setWokes(true)}
      >
        Start
      </Button>
    </div>
  );
}
