import { ReactNode } from 'react';
import DashboradNavigation from '../components/dashboard/DashboradNavigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CircleUser, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  getKindeServerSession,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== 'kaldikonly@gmail.com') {
    return redirect('/');
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      <header className="h-15 sticky top-0 mb-2 mt-5 flex items-center justify-between gap-4 border-b bg-white pb-2">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboradNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant="outline"
              size="icon"
            >
              <MenuIcon size={32} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="mt-5 grid gap-6 text-lg font-medium">
              <DashboradNavigation />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <LogoutLink>Log Out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main>{children}</main>
    </div>
  );
}
