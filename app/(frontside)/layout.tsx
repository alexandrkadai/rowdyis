import React, { ReactNode } from 'react';
import FrontSideNavigation from '../components/frontside/FrontSideNavigation';
import { Copyright } from 'lucide-react';

export default function FrontSideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-[50px] sm:p-[100px] lg:p-[120px] xl:p-[240px]">
      <FrontSideNavigation />
      <main className="w-full">{children}</main>
      <footer className="w-full  mt-[200px] mb-10 flex items-center justify-center">
        <div className="flex flex-row uppercase font-bold gap-5 textlg">
          <Copyright size={24} />
          <span className="">Rowdy</span>
          <span className="">UKraine</span>
          <span className="">Kiev</span>
          <span>All Rights Reserved</span>
          <span>Terms And Conditions</span>
        </div>
      </footer>
    </div>
  );
}
