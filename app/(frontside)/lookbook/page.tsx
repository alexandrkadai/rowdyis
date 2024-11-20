import Image from 'next/image';
import im1 from '@/app/assets/testimage/IMG_1201.jpeg';
export default function page() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10">
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
      <Image src={im1} width={350} height={350} alt="lookbok" />
    </div>
  );
}
