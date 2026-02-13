"use client";

import { useEffect, useRef, useState, type JSX } from "react";

type Lang = "uk" | "en" | "ru";

const languages: { id: Lang; label: string; icon?: JSX.Element }[] = [
  {
    id: "uk",
    label: "Українська",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="flag-uk"><rect width="24" height="24" rx="12" fill="white" /></clipPath>
        <g clipPath="url(#flag-uk)">
          <rect width="24" height="24" rx="12" fill="#F5F6FA" />
          <path d="M24 0H0V12H24V0Z" fill="#0057B8" />
          <path d="M24 12H0V24H24V12Z" fill="#FFD700" />
        </g>
      </svg>
    ),
  },
  {
    id: "en",
    label: "English",
    icon: (
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
  },
  {
    id: "ru",
    label: "Русский",
  },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("uk");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.id === lang)!;

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

  const handleSelect = (id: Lang) => {
    setLang(id);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5"
        title="language"
      >
        {current.icon ?? (
          <span className="w-[24px] h-[24px] rounded-full bg-[#606980] text-white text-[10px] font-bold flex items-center justify-center leading-none">
            {current.id.toUpperCase()}
          </span>
        )}
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
        {languages.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => handleSelect(l.id)}
            className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150
              ${lang === l.id ? "text-black bg-[#F5F6FA]" : "text-[#2A2F3C] hover:bg-[#F5F6FA]"}`}
          >
            {l.icon ?? <span className="w-[24px] h-[24px]" />}
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
