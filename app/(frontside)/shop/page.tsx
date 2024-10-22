import tee from '@/app/assets/testimage/Misprint+Tee+1.png';
import Image from 'next/image';

export default function page() {
  return (
    <div className="mt-[150px] grid 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 justify-center items-center">
      <div className="w-[350px] h-[400px] relative border-2 border-black m-auto  cursor-pointer">
        <Image src={tee} alt="tshirt test" fill />
        <div className="absolute flex flex-col left-10 bottom-10">
          <span className="uppercase text-md font-bold">Misprint</span>
          <span className="uppercase text-md font-bold">3999 &#8372;</span>
        </div>
      </div>
      <div className="w-[350px] h-[400px] relative border-2 border-black m-auto cursor-pointer">
        <Image src={tee} alt="tshirt test" fill />
        <div className="absolute flex flex-col left-10 bottom-10">
          <span className="uppercase text-md font-bold">Misprint</span>
          <span className="uppercase text-md font-bold">3999 &#8372;</span>
        </div>
      </div>
      <div className="w-[350px] h-[400px] relative border-2 border-black m-auto cursor-pointer">
        <Image src={tee} alt="tshirt test" fill />
        <div className="absolute flex flex-col left-10 bottom-10">
          <span className="uppercase text-md font-bold">Misprint</span>
          <span className="uppercase text-md font-bold">3999 &#8372;</span>
        </div>
      </div>
      <div className="w-[350px] h-[400px] relative border-2 border-black m-auto cursor-pointer">
        <Image src={tee} alt="tshirt test" fill />
        <div className="absolute flex flex-col left-10 bottom-10">
          <span className="uppercase text-md font-bold">Misprint</span>
          <span className="uppercase text-md font-bold">3999 &#8372;</span>
        </div>
      </div>
    </div>
  );
}
