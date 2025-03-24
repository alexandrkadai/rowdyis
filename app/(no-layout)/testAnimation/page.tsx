'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function OpeningDoorsAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoors = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-gray-100">
      <div
        className="relative h-[100vh] w-full overflow-hidden"
        onClick={toggleDoors}
      >
        {/* Left door */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-indigo-500 transition-transform duration-1000 ease-in-out ${
            isOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Right door */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 bg-purple-500 transition-transform duration-1000 ease-in-out ${
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
        <div className="absolute h-full w-full bg-cover bg-center bg-no-repeat">
          <div
            className={`text-xl font-bold transition-opacity duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="mt-32 flex flex-col items-center justify-center">
              <p className="m-auto text-3xl text-purple-800">Welcome</p>
              <span className="m-auto mt-20 text-3xl text-purple-800">TO</span>
            </div>
            <h1 className="mt-[50px] text-center text-[144px] text-purple-800">
              BALLERS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
