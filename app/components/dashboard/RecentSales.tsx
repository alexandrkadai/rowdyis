import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserIcon } from 'lucide-react';
import React from 'react';

export default function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 ">
        <div className="flex items-center justify-center gap-4">
          <Avatar>
            <UserIcon size={24} className='mt-2'/>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-md ">User Name</p>
            <p className="text-sm text-muted-foreground">User Email</p>
          </div>
          <span className="text-sm ml-auto">55555 grn</span>
        </div>
      </CardContent>
    </Card>
  );
}
