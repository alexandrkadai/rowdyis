import Image from 'next/image';
import im1 from '@/app/assets/testimage/IMG_1201.jpeg';
export default function page() {
  return (
    <div className="flex flex-col mt-10 gap-10 justify-center items-center">
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
    </div>
  );
}
