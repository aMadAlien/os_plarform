"use client";

import { useDictionary } from "@/i18n/DictionaryContext";
import { assetUrl } from "@/utils/assetUrl";

export default function TeamBlock() {
  const { dict } = useDictionary();

  return (
    <div id="section-team" className="container mt-[75px] md:mt-[200px] px-4">
      <h2 className="title text-center">
        {dict.team.sectionTitle}
      </h2>
      <p className="text-[#666666] text-center mt-6 text-lg">{dict.team.subtitle}</p>

      <div className="rounded-[30px] md:rounded-[70px] overflow-hidden h-[618px] relative mt-7">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 max-md:w-full px-5">
          <p className="text-white font-medium text-xl md:text-3xl text-center" >{dict.team.videoText}</p>
          <button
            type="button"
            className="mt-7 md:mt-[57px] rounded-[8px] bg-white py-3 px-7 mx-auto block"
          >
            {dict.team.learnMore}
          </button>
        </div>
        <video
          src={assetUrl("/video/team.mp4")}
          className="object-cover h-full w-full"
          muted
          loop
          preload="auto"
          autoPlay={true}
          controls={false}
        />
      </div>
    </div>
  )
}
