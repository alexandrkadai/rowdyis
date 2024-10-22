import React, { ReactNode } from 'react';
import FrontSideNavigation from '../components/frontside/FrontSideNavigation';

export default function FrontSideLayout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full sm:p-0 md:p-[100px] lg:p-[120px] xl:p-[240px]'>
      <FrontSideNavigation />
      <main className="w-full">{children}</main>
    </div>
  );
}
