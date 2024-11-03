import FormCheckout from '@/app/components/frontside/FormCheckout';
import OrderSummary from '@/app/components/frontside/OrderSummary';

export default function CheckoutRoute() {
  return (
    <>
      <div className="flex flex-row w-full h-auto justify-between gap-10 mt-10">
        <FormCheckout />
        <OrderSummary />
      </div>
    </>
  );
}
