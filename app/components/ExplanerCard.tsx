import { type JSX } from "react";

export function ExplanerCard({
  title,
  description,
  image,
  index,
}: {
  title: string | JSX.Element;
  description: string | JSX.Element;
  image: string;
  index: number;
}) {
  const isOdd = index % 2 !== 0;
  const cardClass = isOdd ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`rounded-[32px] py-8 pb-4 px-7 ${cardClass}`}>
      <div className={`${isOdd ? "text-black" : "text-white"} font-bold text-3xl leading-9`}>
        {title}
      </div>
      <p className={`${isOdd ? "text-black" : "text-white"} font-medium text-lg leading-6 mt-8`}>
        {description}
      </p>
      <img
        src={image}
        className="max-h-[200px] w-auto mx-auto mt-10"
        alt="Explaner Card Image"
      />
    </div>
  );
}