"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [activeLang, setActiveLang] = useState<"ua" | "ru">('ua');

  return (
    <div className="bg-white w-fit ml-auto rounded-[12px] h-[26px] p-[2px] flex mt-5 mr-15">

      <LangBtn title="Укр" isActive={activeLang === 'ua'} onClick={() => setActiveLang('ua')} />
      <LangBtn title="Ру" isActive={activeLang === 'ru'} onClick={() => setActiveLang('ru')} />
    </div>
  )
}

function LangBtn({ title, isActive, onClick }: { title: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      type="button"
      className={`${isActive ? 'bg-black text-white' : 'text-[#333333CC]'}
          text-xs font-medium h-full px-2.5 rounded-[12px] min-w-[40px]
        `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}