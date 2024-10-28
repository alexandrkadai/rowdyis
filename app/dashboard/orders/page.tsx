import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FilterIcon } from 'lucide-react';
import Link from 'next/link';

export default function OrdersRoute() {
  return (
    <>
      <div className="flex items-center justify-end mt-2">
        <Button asChild className="flex gap-2">
          <Link href="/dashboard/collection/create" className='uppercase'>
            <FilterIcon className="h-5 w-5" />
            <span className="font-bold">Filters</span>
          </Link>
        </Button>
      </div>
      <Card className='mt-10'>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>All orders from the shop</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Mister Customer</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Complete</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className="text-right">$ 1234</TableCell>
              </TableRow>
              {/* Never Will Be */}
              <TableRow>
                <TableCell>Mister Customer</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Complete</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className="text-right">$ 1234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mister Customer</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Complete</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className="text-right">$ 1234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mister Customer</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Complete</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className="text-right">$ 1234</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mister Customer</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Complete</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className="text-right">$ 1234</TableCell>
              </TableRow>
              {/* Never Will Be */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
