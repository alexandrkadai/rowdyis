import Image from 'next/image';
import welcome from '../../assets/welcome.jpg';

export default function page() {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/patheon.jpg')] ">
      <div className='mt-32 flex items-center justify-center flex-col'>
      <Image src={welcome} width={150} height={50} alt="welcome"/>
      <span className='mt-20 text-purple-800 m-auto text-3xl'>TO</span>
      </div>
      <h1 className='text-center mt-[50px] text-[144px] text-purple-800'>BALLERS</h1>
    </div>
  )
}
