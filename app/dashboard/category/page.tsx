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

export default function CategoryRoute() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex gap-2">
          <Link href="/dashboard/collection/create">
            <PlusCircle className="h-5 w-5" />
            <span className="font-bold">Add Category</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Categories page</CardTitle>
          <CardDescription>All categories</CardDescription>
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
                <TableCell>Sweatshirt</TableCell>
                <TableCell>Sweatshirt</TableCell>
                <TableCell>24/10/24</TableCell>
                <TableCell className="text-end">
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
              {/* NEVER WILL BE */}
              <TableRow>
                <TableCell>Hoody</TableCell>
                <TableCell>Hoody</TableCell>
                <TableCell>24/10/24</TableCell>
                <TableCell className="text-end">
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
                <TableCell>T-Shirt</TableCell>
                <TableCell>T-Shirt</TableCell>
                <TableCell>24/10/24</TableCell>
                <TableCell className="text-end">
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
                <TableCell>Pants</TableCell>
                <TableCell>Pants</TableCell>
                <TableCell>24/10/24</TableCell>
                <TableCell className="text-end">
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
              {/* NEVER WILL BE */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
