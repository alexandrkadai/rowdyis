import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableCell,
} from '@/components/ui/table';
import { CirclePlus, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import tee from '@/app/assets/testimage/Misprint+Tee+1.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ProductsRoute() {
  const mDate = Date.now();
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2 font-bold">
          <Link href="/dashboard/products/create">
            <CirclePlus size={24} />
            Add product
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-md font-bold">All Products</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            List of all products in the store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              <TableRow>
                <TableCell>
                  <Image src={tee} alt="T-shirt image" width={50} height={50} />
                </TableCell>
                <TableCell>T-shirt</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>$ 42</TableCell>
                <TableCell>{new Intl.DateTimeFormat('en-US').format(mDate)}</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='center'>
                      <DropdownMenuLabel>
                        Actions
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className='text-red-500'>Delete</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {/* Never Will BE */}
              <TableRow>
                <TableCell>
                  <Image src={tee} alt="T-shirt image" width={50} height={50} />
                </TableCell>
                <TableCell>T-shirt</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>$ 42</TableCell>
                <TableCell>{new Intl.DateTimeFormat('en-US').format(mDate)}</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='center'>
                      <DropdownMenuLabel>
                        Actions
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className='text-red-500'>Delete</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Image src={tee} alt="T-shirt image" width={50} height={50} />
                </TableCell>
                <TableCell>T-shirt</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>$ 42</TableCell>
                <TableCell>{new Intl.DateTimeFormat('en-US').format(mDate)}</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='center'>
                      <DropdownMenuLabel>
                        Actions
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className='text-red-500'>Delete</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Image src={tee} alt="T-shirt image" width={50} height={50} />
                </TableCell>
                <TableCell>T-shirt</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>$ 42</TableCell>
                <TableCell>{new Intl.DateTimeFormat('en-US').format(mDate)}</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='center'>
                      <DropdownMenuLabel>
                        Actions
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className='text-red-500'>Delete</DropdownMenuItem>
                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {/* Never Will BE */}
            
              
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
