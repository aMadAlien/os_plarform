"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function Slogan() {
  const { dict } = useDictionary();

  return (
    <div className="p-5"
      style={{
        background: "linear-gradient(90deg, #390911 0%, #B62F44 16.01%, #390911 55.58%, #390911 100%)"
      }}>
      <div className="max-w-[1200px] min-h-[90px] mx-auto flex max-md:flex-col gap-7 md:gap-3 flex-wrap items-center justify-cennter md:justify-between">
        <img src="/images/logo-dark.png" alt="One Media" className="" />

        <div>
          <p className="text-white mb-1.5 text-lg lg:text-xl">{dict.slogan.line1}</p>
          <p className="text-white mb-2.5 text-sm">{dict.slogan.line2}</p>
        </div>

        <button
          type="button"
          className="rounded-[25px] bg-white h-[50px] max-w-[308px] min-w-[180px] w-[21.389vw] text-black text-xl lg:text-2xl leading-5 font-medium"
        >
          {dict.slogan.button}
        </button>
      </div>
    </div>
  )
}
