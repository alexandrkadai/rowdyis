import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentSales from '../components/dashboard/RecentSales';

export default function DashboardMain() {
  return (
    <>
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className='xl:col-span-2'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Here Will be Some Info</p>
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </>
  );
}
