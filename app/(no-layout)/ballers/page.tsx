'use client';
import Image from 'next/image';
import { useState } from 'react';
import pusher from '../../assets/images/pusher.png';
import puserOpened from '../../assets/images/pusherOpened.png';

export default function Page() {
  const [isHovered, setIsHovered] = useState(false);

  const [stage, setStage] = useState(0);

  const handleClick = () => {
    if (stage < appleStages.length - 1) {
      setStage(stage + 1);
    }
  };

  const appleStages = [
    '/apple1.png',
    '/apple2.png',
    '/apple3.png',
    '/apple4.png',
    '/apple5.png',
  ];

  return (
    <div className="relative h-screen w-full bg-[url('/background.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <Image
        src={isHovered ? puserOpened : pusher}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt="Pusher Logo"
        className="absolute right-[200px] top-[150px] h-[240px] w-[179px] rotate-[4deg] transform transition-all duration-300 ease-in-out"
      />
      <div className="absolute left-[444px] bottom-[-100px] h-[200px] w-[200px] cursor-pointer transition-transform duration-300 ease-in-out">
        <Image
          key={stage}
          src={appleStages[stage]}
          alt="Apple"
          width={100}
        height={120}
        className="h-[120px] w-[100px] cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={handleClick}
      />
      </div>
      <video
    src="/videos/textDVD.mp4" 
    className="absolute bottom-[75px] right-[417px] w-[170px] h-[105px] object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
    </div>
  );
}
