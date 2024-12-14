import DeliveryCountry from '@/app/components/frontside/DeliveryCountry';
import FormCheckout from '@/app/components/frontside/FormCheckout';
import CheckoutForm from '@/app/components/frontside/FormCheckoutNEWWorld';
import OrderSummary from '@/app/components/frontside/OrderSummary';

export default function CheckoutRoute() {
  return (
    <>
    <DeliveryCountry />
      <div className="mt-10 flex h-auto w-full flex-row justify-between gap-10">
      
      <CheckoutForm />
        {/* <FormCheckout /> */}
        <OrderSummary />
      </div>
    </>
  );
}
