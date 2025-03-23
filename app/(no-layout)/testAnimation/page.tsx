'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function OpeningDoorsAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoors = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="relative w-full h-[100vh] overflow-hidden"  onClick={toggleDoors}>
        {/* Left door */}
        <div 
          className={`absolute top-0 left-0 w-1/2 h-full bg-indigo-500 transition-transform duration-1000 ease-in-out ${
            isOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Right door */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full bg-purple-500 transition-transform duration-1000 ease-in-out ${
            isOpen ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Content behind the doors (optional) */}
        {/* <div className=" inset-0 flex items-center justify-center">
          <p className={`text-xl font-bold transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
            Welcome Inside!
          </p>
        </div> */}
        <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat">
        <div className={`text-xl font-bold transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
           
          
      <div className='mt-32 flex items-center justify-center flex-col'>
      <p className= "text-purple-800 m-auto text-3xl">
            Welcome 
          </p>
      <span className='mt-20 text-purple-800 m-auto text-3xl'>TO</span>
      </div>
      <h1 className='text-center mt-[50px] text-[144px] text-purple-800'>BALLERS</h1>
    </div>
      </div>
      </div>
    </div>
  );
}