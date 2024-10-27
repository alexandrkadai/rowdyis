import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CareateCollection() {
  return (
    <>
      <div className="mt-5">
        <Button asChild variant="outline">
          <Link href="/dashboard/collections" className="uppercase font-bold">
            <ChevronLeft size={24} strokeWidth={3} />
            Go back
          </Link>
        </Button>
      </div>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Create New Collection</CardTitle>
          <CardDescription>
            Create new Colection for the drop or starting new season.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </>
  );
}
