import DeliveryCountry from '@/app/components/frontside/DeliveryCountry';
import OrderSummary from '@/app/components/frontside/OrderSummary';

export default function CheckoutRoute() {
  return (
    <>
      <div className="mt-10 flex h-auto w-full flex-row justify-between gap-10">
        <DeliveryCountry />
        <OrderSummary />
      </div>
    </>
  );
}
