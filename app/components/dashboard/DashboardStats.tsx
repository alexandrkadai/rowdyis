import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, FlashlightIcon, Shirt, ShoppingBag } from 'lucide-react';
import React from 'react';

export default function DashboardStats() {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <DollarSign size={24} className="-translate-y-1 text-green-500" />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-md">1200000 grn</p>
          <p className="text-sm text-muted-foreground">
            Total sales for past month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <FlashlightIcon
            size={24}
            className="-translate-y-1 text-yellow-500"
          />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-md">10</p>
          <p className="text-sm text-muted-foreground">
            Total quantity of product
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Collections</CardTitle>
          <Shirt size={24} className="-translate-y-1 text-purple-500" />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-md">12</p>
          <p className="text-sm text-muted-foreground">
            Total amount of collections and drops
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total orders</CardTitle>
          <ShoppingBag size={24} className="-translate-y-1 text-orange-500" />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-md">120</p>
          <p className="text-sm text-muted-foreground">
            Total amount of orders
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
