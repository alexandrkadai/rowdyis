import Image from 'next/image';
import welcome from '../../assets/welcome.jpg';

export default function page() {
  return (
    <div className="h-full w-full bg-[url('/patheon.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mt-32 flex flex-col items-center justify-center">
        <Image src={welcome} width={150} height={50} alt="welcome" />
        <span className="m-auto mt-20 text-3xl text-purple-800">TO</span>
      </div>
      <h1 className="mt-[50px] text-center text-[144px] text-purple-800">
        BALLERS
      </h1>
    </div>
  );
}
