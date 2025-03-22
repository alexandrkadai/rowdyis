import Image from 'next/image';

export default function ProductImages(images: string[]) {
  return (
    <div className="flex w-full flex-col gap-5">
      {images.map((item) => (
        <Image
          src={item}
          width={350}
          height={350}
          alt="Product Image"
          key={item}
        />
      ))}
    </div>
  );
}
