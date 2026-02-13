import { type ReactNode } from "react";
import Image from "next/image";
import { assetUrl } from "@/utils/assetUrl";

export function ExplanerCard({
  title,
  description,
  image,
  index,
}: {
  title: ReactNode;
  description: ReactNode;
  image: string;
  index: number;
}) {
  const isOdd = index % 2 !== 0;
  const cardClass = isOdd ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`rounded-[32px] py-8 pb-4 px-4 md:px-7 ${cardClass}`}>
      <div className={`${isOdd ? "text-black" : "text-white"} font-bold text-xl lg:text-3xl leading-7 lg:leading-9`}>
        {title}
      </div>
      <p className={`${isOdd ? "text-black" : "text-white"} font-medium text-base lg:text-lg leading-6 mt-5 lg:mt-8`}>
        {description}
      </p>
      <Image
        src={assetUrl(image)}
        width={280}
        height={200}
        className="max-h-[200px] w-auto mx-auto mt-10 object-contain"
        alt="Explaner Card Image"
      />
    </div>
  );
}