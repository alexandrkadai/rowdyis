import Image from 'next/image';
import tee from '@/app/assets/testimage/Misprint+Tee+1.png';

type Props ={
  handleClickModal: () => void;
}
export default function Modal({handleClickModal}: Props) {
  return (
    <div>
    <div onClick={handleClickModal}className="absolute left-0 top-0 h-[100%] w-[100%] bg-black/50 z-10"></div>
      <div className="absolute left-[50%] top-[50%] flex h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] transform justify-between border-2 border-black bg-white z-20">
        <button className="absolute right-0 top-[-7px] text-[25px]" onClick={handleClickModal}>&times;</button>
        <div className="flex w-[50%] items-center justify-center">
          <Image src={tee} width={200} height={200} alt="Hoody Ballers" />
        </div>
        <div className="flex w-[50%] flex-col p-5 text-left lg:ml-5">
          <h1 className="text-xl  leading-tight">
            ballers hoody
          </h1>

          <p className="text-lg mt-[15px]">2345 &#8372;</p>

          <div className="flex space-x-6 mt-[15px]">
           
            <label className="flex cursor-pointer items-center space-x-2">
              <span className="h-5 w-5 rounded-full border border-black bg-white"></span>
              <span>grey</span>
            </label>
            <label className="flex cursor-pointer items-center space-x-2">
              <span className="h-5 w-5 rounded-full border border-black bg-black"></span>
              <span>black</span>
            </label>
          </div>

          <div>
            <p className="mb-2 mt-[15px]">select size</p>
            <select className="w-full cursor-pointer appearance-none rounded-lg border border-black px-4 py-2">
              <option value="p">select</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="l">xl</option>
            </select>
          </div>

          <div className="flex space-x-4 mt-[15px]">
            <button className="flex-1 text-[12px] rounded-lg border border-black py-2 hover:bg-gray-100">
              add to bag
            </button>
            <button className="flex-1 text-[12px] rounded-lg border border-black py-2 hover:bg-gray-100">
              checkout
            </button>
          </div>

          <ul className="space-y-1 text-sm mt-[35px]">
            <li className="cursor-pointer hover:underline">product details</li>
            <li className="cursor-pointer hover:underline">shipping</li>
            <li className="cursor-pointer hover:underline">returns</li>
            <li className="cursor-pointer hover:underline">our packaging</li>
            <li className="cursor-pointer hover:underline">size guide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
