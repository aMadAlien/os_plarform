"use client";

import Image from "next/image";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Warranty() {
  const { dict } = useDictionary();

  return (
    <section className="max-w-[1136px] w-full mx-auto rounded-[48px] bg-[#DEDBDC] mt-[75px] overflow-hidden">
      <div className="flex max-md:flex-col justify-between items-stretch gap-5">

        <div className="max-md:mx-8 ml-8 lg:ml-[80px] mt-7 mb-14 md:max-w-[475px]">
          <h2 className="text-3xl leading-9 font-semibold mb-7">{dict.warranty.title}</h2>

          <p className="text-[#464E62] text-lg leading-7 font-semibold mb-7">
            {dict.warranty.paragraph1}
          </p>

          <p className="text-[#464E62] text-lg leading-7 font-semibold">
            {dict.warranty.paragraph2}
          </p>
        </div>

        <div className="relative w-full min-h-[400px] sm:flex-[1_1_600px] md:flex-[0_0_500px]">
          <Image
            src="/images/warranty.webp"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            alt=""
            className="object-cover rounded-[48px]"
          />
        </div>
      </div>
    </section>
  )
}
