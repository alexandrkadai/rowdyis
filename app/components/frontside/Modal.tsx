import Image from 'next/image';
import tee from '@/app/assets/testimage/Misprint+Tee+1.png';
export default function Modal() {
  return (
    <div className="absolute left-0 top-0 h-[100%] w-[100%] bg-black/15">
      <div className="absolute left-[50%] top-[50%] flex h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] transform justify-between border-2 border-black bg-white">
        <div className="flex w-[50%] items-center justify-center">
          <Image src={tee} width={200} height={200} alt="Hoody Ballers" />
        </div>
        <div className="w-[50%] p-[30px]">
          <h1>Ballers Hoody</h1>
        </div>
      </div>
    </div>
  );
}
