import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function OrdersRoute() {
  return (
    <Card>
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
  );
}
