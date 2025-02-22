import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/logo.png';
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
import { unstable_noStore as noStore } from 'next/cache';

export default async function FrontSideNavigation() {
  noStore();
  const { itemsCart, total } = await GetCart();

  return (
    <header className="mt-5 w-full py-5 lg:ml-0 lg:mt-0">
      <nav className="flex flex-row items-center justify-around gap-4">
        <div className="w-full">
          <Link href="/shop">
            <Image
              src={logo}
              alt="Rowdy Logo"
              width={150}
              height={100}
              className="ml-7 h-[50px] w-[75px] object-contain lg:h-[100px] lg:w-[150px]"
            />
          </Link>
        </div>
        <div className="flex w-full flex-row justify-between">
          <div className="absolute left-7 top-[120px] flex flex-row items-center justify-between gap-4 lg:static lg:left-0 lg:top-0 lg:flex-row">
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
              Кошик ({total})
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
                      <div key={index} className="border-b-2 border-black">
                        <div className="mt-5 flex flex-row items-center justify-between gap-4 px-4 text-[20px] font-bold uppercase">
                          <span>{item.name}</span>
                          <Image
                            src={item.image}
                            alt="Product Image"
                            width={32}
                            height={32}
                            className="rounded-xl"
                          />

                          <span>{item.sizeItem}</span>
                        </div>
                        <div className="flex justify-between px-4">
                          <div className="flex flex-row items-center">
                            <form action={deleteOneItem}>
                              <input
                                type="hidden"
                                name="itemId"
                                value={item.id}
                              />
                              <input
                                type="hidden"
                                name="sizeToD"
                                value={item.sizeItem}
                              />
                              <Button variant="ghost" type="submit">
                                -
                              </Button>
                            </form>
                            <span>{item.quantity}</span>
                            <form action={addOneItem}>
                              <input
                                type="hidden"
                                name="itemId"
                                value={item.id}
                              />
                              <input
                                type="hidden"
                                name="sizeToD"
                                value={item.sizeItem}
                              />
                              <Button variant="ghost" type="submit">
                                +
                              </Button>
                            </form>
                          </div>
                          <span className="flex items-center justify-end font-bold">
                            {item.price} &#8372;
                          </span>
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
