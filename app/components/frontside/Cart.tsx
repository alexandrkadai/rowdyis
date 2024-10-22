import { ShoppingBag } from 'lucide-react';
import React from 'react';

export default function Cart() {
  return (
    <div className='flex flex-row gap-2'>
        <span>КОШИК</span>
      <ShoppingBag size={24} />
    </div>
  );
}
