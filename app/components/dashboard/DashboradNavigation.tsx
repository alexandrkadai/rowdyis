'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  {
    name: 'Адмінка',
    href: '/dashboard',
  },
  {
    name: 'Замовлення',
    href: '/orders',
  },
  {
    name: 'Товари',
    href: '/products',
  },
  {
    name: 'Категорії',
    href: '/category',
  },
  {
    name: 'Колекція',
    href: '/collections',
  },
];

export default function DashboradNavigation() {
  const pathName = usePathname();

  return (
    <>
      {links.map((item) => (
        <Link
        key={item.href}
          href={item.href}
          className={cn(
            item.href === pathName ? 'text-black font-bold' : 'text-muted-foreground font-normal',
          )}>
          {item.name}
        </Link>
      ))}
    </>
  );
}
