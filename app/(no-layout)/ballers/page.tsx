'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import pusher from '../../assets/images/pusher.png';
import puserOpened from '../../assets/images/pusherOpened.png';
import paper from '../../assets/images/paperCut.png';
import { cn } from '@/lib/utils';
import Modal from '@/app/components/frontside/Modal';

export default function Page() {
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
    <div className="relative h-screen w-full overflow-hidden bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
       {isClicked && <Modal />}
      <div
        className="absolute left-[50%] top-[50%] h-[120px] w-[120px] bg-red-300"
        onClick={handleClickModal}
      >
       
      </div>
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
