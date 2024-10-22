import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo.png';
import Cart from './Cart';
import { MenuIcon } from 'lucide-react';

export default function FrontSideNavigation() {
  return (
    <header className="w-full">
      <nav className="flex flex-row justify-around items-center gap-4">
        <MenuIcon size={24} className='lg:hidden'/>
        <Link href="/shop">
          <Image src={logo} alt="Rowdy Logo" width={150} height={100} className="object-contain" />
        </Link>
        <div className="hidden lg:flex flex-row justify-between items-center gap-4">
          <Link href="/shop">Магазин</Link>
          <Link href="/lookbook">Лукбук</Link>
          <Link href="/contacts">Контакти</Link>
        </div>
        <Cart />
      </nav>
    </header>
  );
}
