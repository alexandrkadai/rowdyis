import React, { ReactNode } from 'react';
import FrontSideNavigation from '../components/frontside/FrontSideNavigation';
import { Copyright } from 'lucide-react';
import Link from 'next/link';

export default function FrontSideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full md:p-[50px] lg:px-[120px] lg:py-[50px]">
      <FrontSideNavigation />
      <main className="w-full">{children}</main>
      <footer className="mb-10 mt-[200px] flex w-full items-center justify-center">
        <div className="text-lg flex flex-col lg:flex-row gap-5 font-bold uppercase">
          
          <span className="flex flex-row gap-4 ">Rowdy <Copyright size={24} /></span>
          <span className="">UKraine, Kiev</span>
          
          <span>All Rights Reserved</span>
          <Link href="/terms" className="underline">
            Terms And Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
