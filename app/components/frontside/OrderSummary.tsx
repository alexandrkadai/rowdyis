import { Button } from '@/components/ui/button';

export default function OrderSummary() {
  return (
    <div className="relative w-full flex">
    <div className="w-[400px] flex flex-col fixed bg-white">
      <h4 className="text-2xl font-bold">Підсумок</h4>
      <div className="mt-5">
        <div className="mt-5 flex justify-between">
          <span className="text-lg">Tee</span>
          <span className="text-lg">2</span>
          <span className="text-lg">7 000 GRN</span>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <span className="uppercase "> Що по грошам :</span>
        <span className="uppercase">12344 GRN</span>
      </div>
      <Button className="uppercase mt-5">Оплатити</Button>
    </div>
    </div>
  );
}
