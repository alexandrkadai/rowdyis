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
import { deleteOneItem, addOneItem } from '@/app/actions';

export default async function FrontSideNavigation() {
  const { itemsCart, total } = await GetCart();

  return (
    <header className="w-full">
      <nav className="flex flex-row items-center justify-around gap-4">
        <div className="w-full">
        <MenuIcon size={24} className="lg:hidden" />
        <Link href="/shop">
          <Image
            src={logo}
            alt="Rowdy Logo"
            width={150}
            height={100}
            className="h-[50px] w-[75px] object-contain lg:h-[100px] lg:w-[150px]"
          />
        </Link>
        </div>
        <div className="w-full flex flex-row justify-between">
        <div className="hidden flex-row items-center justify-between gap-4 lg:flex">
          <Link className="font-bold uppercase" href="/shop">
            Магазин
          </Link>
          <Link className="font-bold uppercase" href="/lookbook">
            Лукбук
          </Link>
          <Link className="font-bold uppercase" href="/contacts">
            Контакти
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="font-bold uppercase">
            Koshik ({total})
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader>
              <SheetTitle className="hidden">Cart</SheetTitle>
            </SheetHeader>
            <div>
              <h2 className="text-uppercase ml-2 mt-2 text-[35px] font-bold">
                Cart
              </h2>
              <div className="w-full border-b-2 border-black"></div>
              {itemsCart && itemsCart.length > 0 ? (
                <>
                  {itemsCart.map((item, index) => (
                    <div key={index}>
                      <div
                        
                        className="mt-5 flex flex-row justify-between px-2 text-[20px] font-bold uppercase"
                      >
                        <span>{item.name}</span>
                        <Image
                          src={item.image}
                          alt="Product Image"
                          width={32}
                          height={32}
                          className="rounded-xl"
                        />
                        <span>{item.price}</span>
                        <span >{item.quantity}</span>
                        <span >{item.sizeItem}</span>
                      </div>
                      <div className="flex justify-around">
                        <form action={deleteOneItem}>
                          <input type="hidden" name="itemId" value={item.id} />
                          <input
                            type="hidden"
                            name="sizeToD"
                            value={item.sizeItem}
                          />
                          <Button variant="default" type="submit">
                            minus
                          </Button>
                        </form>
                        <form action={addOneItem}>
                          <input type="hidden" name="itemId" value={item.id} />
                          <input
                            type="hidden"
                            name="sizeToD"
                            value={item.sizeItem}
                          />
                          <Button variant="default" type="submit">
                            plus
                          </Button>
                        </form>
                      </div>
                    </div>
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="absolute bottom-0 left-0 w-full rounded-none"
                    >
                      <Link href="/checkout">Checkout</Link>
                    </Button>
                  </SheetClose>
                </>
              ) : (
                <>
                  <span className="mt-10 block text-center font-bold">
                    
                    Your Cart is Empty
                  </span>
                  <Button
                    disabled
                    className="absolute bottom-0 left-0 w-full rounded-none"
                  >
                    Checkout
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  );
}
