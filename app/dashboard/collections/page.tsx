import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreVertical, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function CollectionRoute() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex gap-2">
          <Link href="/dashboard/collection/create">
            <PlusCircle className="h-5 w-5" />
            <span className="font-bold">Add Collection</span>
          </Link>
        </Button>
      </div>
      <Card className='mt-10'>
        <CardHeader>
          <CardTitle>All Collections Page</CardTitle>
          <CardDescription>Here you can manage your collecions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Summer Vibe 18</TableCell>
                <TableCell>Summer Vibe 18</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className='text-end'>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {/* Never Will Be */}
              <TableRow>
                <TableCell>Drop Forewa</TableCell>
                <TableCell>Drop Forewa</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className='text-end'>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Season 5</TableCell>
                <TableCell>Season 5</TableCell>
                <TableCell>24/10/2024</TableCell>
                <TableCell className='text-end'>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical size={24} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              {/* Never Will Be */}
              
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
