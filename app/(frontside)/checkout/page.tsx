import DeliveryCountry from '@/app/components/frontside/DeliveryCountry';
import OrderSummary from '@/app/components/frontside/OrderSummary';

export default function CheckoutRoute() {
  return (
    <>
      <div className="mt-10 flex h-auto w-full p-5 flex-col-reverse justify-between gap-10 lg:flex-row lg:p-0">
        <DeliveryCountry />
        <OrderSummary />
      </div>
    </>
  );
}
