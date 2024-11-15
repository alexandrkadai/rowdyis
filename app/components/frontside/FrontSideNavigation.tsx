import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo.png';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import GetCart from './GetCart';

export default async function FrontSideNavigation() {
  const { itemsCart, total } = await GetCart(); 
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

        <Sheet>
          <SheetTrigger className="uppercase font-bold">Koshik ({total})</SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader>
              <SheetTitle className="hidden">Cart</SheetTitle>
            </SheetHeader>
            <div>
              <h2 className="text-[35px] font-bold text-uppercase mt-2 ml-2">Cart</h2>
              <div className="w-full border-b-2 border-black"></div>
              {itemsCart && itemsCart.length > 0 ? (
                <>
                  {itemsCart.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between px-2 mt-5 uppercase font-bold text-[20px]">
                      <span>{item.name}</span>
                      <Image
                        src={item.image}
                        alt="Product Image"
                        width={32}
                        height={32}
                        className="rounded-xl"
                      />
                      <span>{item.price}</span>
                      <span className="">{item.sizeItem}</span>
                      <span className="">{item.quantity}</span>
                    </div>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="absolute bottom-0 left-0 w-full rounded-none">
                      <Link href="/checkout">Checkout</Link>
                    </Button>
                  </SheetClose>
                </>
              ) : (
                <>
                  <span className="mt-10 text-center block font-bold"> Your Cart is Empty</span>
                  <Button disabled className="absolute bottom-0 left-0 w-full rounded-none">
                    Checkout
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
