import { Button } from '@/components/ui/button';

export default function OrderSummary() {
  return (
    <div className="w-full flex flex-col">
      <h4 className="text-2xl font-bold">Підсумок</h4>
      <div className="">
        <div className="mt-3 flex justify-between">
          <span className="">Tee</span>
          <span className="">2</span>
          <span className="">7 000 GRN</span>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <span className="uppercase "> Що по грошам :</span>
        <span className="uppercase">12344 GRN</span>
      </div>
      <Button className="uppercase mt-2">Оплатити</Button>
    </div>
  );
}
