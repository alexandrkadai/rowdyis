import React, { ReactNode } from 'react';
import FrontSideNavigation from '../components/frontside/FrontSideNavigation';
import { Copyright } from 'lucide-react';
import Link from 'next/link';

export default function FrontSideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-[50px] sm:p-[100px] lg:p-[120px] xl:p-[240px]">
      <FrontSideNavigation />
      <main className="w-full">{children}</main>
      <footer className="mb-10 mt-[200px] flex w-full items-center justify-center">
        <div className="textlg flex flex-row gap-5 font-bold uppercase">
          <Copyright size={24} />
          <span className="">Rowdy</span>
          <span className="">UKraine</span>
          <span className="">Kiev</span>
          <span>All Rights Reserved</span>
          <Link href="/terms" className="underline">
            Terms And Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
