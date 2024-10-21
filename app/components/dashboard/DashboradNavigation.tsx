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
    href: '/dashboard/orders',
  },
  {
    name: 'Товари',
    href: '/dashboard/products',
  },
  {
    name: 'Категорії',
    href: '/dashboard/category',
  },
  {
    name: 'Колекція',
    href: '/dashboard/collections',
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
            item.href === pathName ? 'text-black font-bold' : 'text-muted-foreground font-normal', 'uppercase tracking-wide'
          )}>
          {item.name}
        </Link>
      ))}
    </>
  );
}
