"use client";

import { ExplanerCard } from "@/components/ExplanerCard";
import { useDictionary } from "@/i18n/DictionaryContext";
import { joinWithBr } from "@/i18n/jsx-helpers";

export default function Explaner() {
  const { dict } = useDictionary();

  return (
    <section className="bg-rounded !mt-12">
      <div className="flex max-sm:flex-col justify-between sm:items-center gap-5">
        <h2 className="title max-sm:text-center">
          {dict.explaner.sectionTitle}
        </h2>

        <button
          type="button"
          className="w-fit max-sm:mx-auto h-min rounded-[10px] bg-black hover:bg-[#F5F6FA] border border-[#EBEEF5] py-[18px] px-6 text-white hover:text-black text-sm font-bold leading-5 transition-colors duration-300"
        >
          {dict.explaner.selectTraining}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-[86px]">
        {
          dict.explaner.items.map((explaner, index) => (
            <ExplanerCard
              key={index}
              index={index}
              title={joinWithBr(explaner.titleParts)}
              description={joinWithBr(explaner.descriptionParts)}
              image={explaner.image}
            />
          ))
        }
      </div>
    </section>
  )
}
