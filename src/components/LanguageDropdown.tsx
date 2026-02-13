"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDictionary } from "@/i18n/DictionaryContext";
import { locales, type Locale } from "@/i18n/config";

const flagIcons: Record<Locale, React.ReactNode> = {
  uk: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="flag-uk"><rect width="24" height="24" rx="12" fill="white" /></clipPath>
      <g clipPath="url(#flag-uk)">
        <rect width="24" height="24" rx="12" fill="#F5F6FA" />
        <path d="M24 0H0V12H24V0Z" fill="#0057B8" />
        <path d="M24 12H0V24H24V12Z" fill="#FFD700" />
      </g>
    </svg>
  ),
  en: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="flag-en"><rect width="24" height="24" rx="12" fill="white" /></clipPath>
      <g clipPath="url(#flag-en)">
        <rect width="24" height="24" rx="12" fill="#012169" />
        <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="4" />
        <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
        <path d="M12 0V24M0 12H24" stroke="white" strokeWidth="6" />
        <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3" />
      </g>
    </svg>
  ),
  ru: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="flag-ru"><rect width="24" height="24" rx="12" fill="white" /></clipPath>
      <g clipPath="url(#flag-ru)">
        <rect width="24" height="24" rx="12" fill="#D52B1E" />
        <path d="M0 0H24V8H0Z" fill="white" />
        <path d="M0 8H24V16H0Z" fill="#0039A6" />
      </g>
    </svg>
  ),
};

const labels: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  ru: "Русский",
};

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { locale } = useDictionary();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  const handleSelect = (newLocale: Locale) => {
    setOpen(false);
    if (newLocale === locale) return;
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5"
        title="language"
      >
        {flagIcons[locale]}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#606980" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`courses-dropdown ${open ? "active" : ""} absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-[16px] py-2 min-w-[180px] z-50`}
        style={{ boxShadow: "0px 4px 24px 0px #22262F1A" }}
      >
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => handleSelect(l)}
            className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150
              ${locale === l ? "text-black bg-[#F5F6FA]" : "text-[#2A2F3C] hover:bg-[#F5F6FA]"}`}
          >
            {flagIcons[l]}
            {labels[l]}
          </button>
        ))}
      </div>
    </div>
  );
}
