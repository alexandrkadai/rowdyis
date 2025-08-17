'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import tee from '../../assets/testimage/Misprint+Tee+2.png';
import Image from 'next/image';
import { useRef, useState } from 'react';
import pusher from '../../assets/images/pusher.png';
import puserOpened from '../../assets/images/pusherOpened.png';
import paper from '../../assets/images/paperCut.png';
import { cn } from '@/lib/utils';
import Modal from '@/app/components/frontside/Modal';
import { Button } from '@/components/ui/button';

export default function Ballers() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [paperHover, setPaperHover] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [stage, setStage] = useState(0);
  const handleClickModal = () => {
    setIsClicked(!isClicked);
  };
  const handleClick = () => {
    if (stage < appleStages.length - 1) {
      setStage(stage + 1);
    }
    if (stage === 8) {
      setStage(0);
    }
  };

  const appleStages = [
    '/apple1.png',
    '/apple2.png',
    '/apple3.png',
    '/apple4.png',
    '/apple5.png',
    '/apple6.png',
    '/apple7.png',
    '/apple8.png',
    '/apple9.png',
  ];

  const handleMouseEnter = () => {
    setPaperHover(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setPaperHover(true);
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger className='absolute top-[150px] left-[150px] text-2xl'>кошик</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='relative top-[-13px]'>кошик</SheetTitle>
            <SheetDescription>
              <div className='flex flex-row gap-[15px] overflow-y-scroll'>
                
           <Image className="w-[150px] h-[350px]" src={tee} width={150} height={350} alt="Hoody Ballers" />
           
           <div>
     <div className="flex flex-col justify-between">
              {/* Title + size */}
              <div>
                <h3 className="font-semibold capitalize text-black">Misprint Tee</h3>
                <p className="text-sm mt-[10px] lowercase text-gray-700">black/s</p>
              </div>

              {/* Price */}
              <p className="mt-[15px] font-medium">£200</p>

              {/* Quantity controls */}
              <div className="mt-[30px] flex items-center gap-2 border-[1px] border-black rounded-md w-fit">
                <Button variant="ghost" size="sm" className="rounded-full px-2">
                  -
                </Button>
                <span>1</span>
                <Button variant="ghost" size="sm" className="rounded-full px-2">
                  +
                </Button>
              </div>

              
              <button className="mt-[30px] text-sm text-gray-600 underline text-left w-fit">
                remove
              </button>
            </div>
           </div>
           </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {isClicked && <Modal handleClickModal={handleClickModal} />}
      <div
        className="z-1 absolute left-[50%] top-[50%] h-[120px] w-[120px] bg-red-300"
        onClick={handleClickModal}
      ></div>
      <Image
        src={paper}
        alt="Paper Cut"
        width={80}
        height={80}
        className={cn(
          paperHover ? 'opacity-100' : 'opacity-0',
          'absolute bottom-[-20px] left-[55px] h-[80px] w-[80px] object-cover'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div>
        <video
          ref={videoRef}
          className={cn(
            paperHover ? 'opacity-0' : 'opacity-100',
            'absolute bottom-[25px] left-[55px] h-[105px] w-[170px] object-cover'
          )}
          src="/videos/papperAnimation.mp4"
          autoPlay
          muted
          playsInline
          loop={false}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <Image
        src={isHovered ? puserOpened : pusher}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt="Pusher Logo"
        className="absolute right-[200px] top-[150px] h-[240px] w-[179px] rotate-[4deg] transform transition-all duration-300 ease-in-out"
      />
      <div className="absolute bottom-[-100px] left-[444px] h-[200px] w-[200px] cursor-pointer transition-transform duration-300 ease-in-out">
        <Image
          key={stage}
          src={appleStages[stage]}
          alt="Apple"
          width={100}
          height={120}
          className="h-[100px] w-[100px] cursor-pointer transition-transform duration-300 ease-in-out"
          onClick={handleClick}
        />
      </div>
      <video
        src="/videos/textDVD.mp4"
        className="absolute bottom-[75px] right-[417px] h-[105px] w-[170px] object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
