import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo.png';
import Cart from './Cart';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FrontSideNavigation() {
  return (
    <header className="w-full">
      <nav className="flex flex-row justify-between items-center gap-4">
        <MenuIcon size={24} className="lg:hidden" />
        <Link href="/shop">
          <Image
            src={logo}
            alt="Rowdy Logo"
            width={150}
            height={100}
            className="object-contain w-[75px] h-[50px] lg:w-[150px] lg:h-[100px]"
          />
        </Link>
        <div className="hidden lg:flex flex-row justify-between items-center gap-4">
          <Link className="uppercase font-bold" href="/shop">
            Магазин
          </Link>
          <Link className="uppercase font-bold" href="/lookbook">
            Лукбук
          </Link>
          <Link className="uppercase font-bold" href="/contacts">
            Контакти
          </Link>
        </div>
        <Cart />
        <div className="w-[300px] h-[100vh] fixed right-0 top-0 bg-white border-l-2 border-black z-50">
          <Button variant="ghost" className="absolute top-4 right-4">
            <XIcon size={35} strokeWidth={3} />
          </Button>
          <h2 className="text-[35px] font-bold text-uppercase mt-2 ml-2">Cart</h2>
          <div className="w-full border-b-2 border-black"></div>
          <span className="mt-10 text-center block font-bold"> Your Cart is Empty</span>
          <Button disabled className="absolute bottom-0 left-0 w-full rounded-none">
            Checkout
          </Button>
        </div>
      </nav>
    </header>
  );
}
