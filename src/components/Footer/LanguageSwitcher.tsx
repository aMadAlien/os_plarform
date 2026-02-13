"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryContext";

const labels: Record<Locale, string> = {
  uk: "Укр",
  en: "Eng",
};

export default function LanguageSwitcher() {
  const { locale } = useDictionary();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="bg-white w-fit ml-auto rounded-[12px] h-[26px] p-[2px] flex mt-5 mr-15">
      {locales.map((loc) => (
        <LangBtn
          key={loc}
          title={labels[loc]}
          isActive={locale === loc}
          onClick={() => switchLocale(loc)}
        />
      ))}
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
