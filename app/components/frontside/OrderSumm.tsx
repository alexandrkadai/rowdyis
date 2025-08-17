import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CartSummary() {
  const items = [
    {
      id: 1,
      name: "Reversible Temple Waffle LS Tee",
      color: "Black",
      size: "S",
      price: 135,
      img: "/picture1.png",
    },
    {
      id: 2,
      name: "Reversible Temple Waffle LS Tee",
      color: "Grey",
      size: "S",
      price: 135,
      img: "/picture2.png",
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const taxes = 45;
  const total = subtotal;

  return (
    <div className="w-full">
      <div className="space-y-4 p-0">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-md overflow-hidden border">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">
                {item.color} / {item.size}
              </p>
            </div>
            <p className="text-sm font-semibold">£{item.price}.00</p>
          </div>
        ))}

        {/* Discount input */}
        <div className="flex gap-2">
          <input
            placeholder="Discount code or gift card"
            className="flex-1 border rounded-md px-3 py-2 text-sm"
          />
          <Button variant="secondary">Apply</Button>
        </div>

        {/* Price summary */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal · {items.length} items</span>
            <span>£{subtotal}.00</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Shipping</span>
            <span>Enter shipping address</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-baseline border-t pt-3">
          <span className="font-semibold text-lg">Total</span>
          <span className="text-lg font-bold">GBP £{total}.00</span>
        </div>
        <p className="text-xs text-gray-500">Including £{taxes}.00 in taxes</p>
      </div>
    </div>
  );
}