import FormCheckout from '@/app/components/frontside/FormCheckout';
import CheckoutForm from '@/app/components/frontside/FormCheckoutNEWWorld';
import OrderSummary from '@/app/components/frontside/OrderSummary';

export default function CheckoutRoute() {
  return (
    <>
      <div className="mt-10 flex h-auto w-full flex-row justify-between gap-10">
        <FormCheckout />
        <OrderSummary />
      </div>
      <CheckoutForm />
    </>
  );
}
