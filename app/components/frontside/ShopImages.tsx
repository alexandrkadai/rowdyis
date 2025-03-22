'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
interface ShopImagesProps {
  images: string[];
  id: string;
}

export default function ShopImages({ images, id }: ShopImagesProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/shop/${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={hovered && images[1] ? images[1] : images[0]}
        alt="tshirt test"
        fill
      />
    </Link>
  );
}
