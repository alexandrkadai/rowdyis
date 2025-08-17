import Image from "next/image";
import DeliveryCountry from "@/app/components/frontside/DeliveryCountry";
import OrderSumm from "@/app/components/frontside/OrderSumm";
import logo from '../../assets/logo.webp';
import DeliveryChekout from "@/app/components/frontside/DeliveryChekout";
export default function page() {
  return (
    <div className="flex flex-col justify-center items-center"> 
        <Image
              src={logo}
              alt="Rowdy Logo"
              width={150}
              height={100}
              className="h-[50px] w-[75px] object-contain lg:h-[100px] lg:w-[150px]"
            />
      <div className="mt-[20px] flex flex-row justify-between gap-10">
      <DeliveryChekout />
      <OrderSumm />
      </div>
    </div>
  );
}
