"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CoursesDropdown from "./CoursesDropdown";
import LanguageDropdown from "./LanguageDropdown";
import ButtonBlack from "./ButtonBlack";
import { useDictionary } from "@/i18n/DictionaryContext";
import { assetUrl } from "@/utils/assetUrl";

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span className={`block h-[2px] w-full bg-[#2A2F3C] rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[9px]" : ""}`} />
      <span className={`block h-[2px] w-full bg-[#2A2F3C] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
      <span className={`block h-[2px] w-full bg-[#2A2F3C] rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[9px]" : ""}`} />
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dict } = useDictionary();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="absolute w-full px-3 md:px-5 z-50 mt-3">
      <div
        className="bg-white rounded-[16px] p-4 md:px-6 md:py-2"
        style={{
          boxShadow: '0px 1px 2px 0px #22262F14'
        }}
      >
        {/* Top bar: always visible */}
        <div className="flex justify-between items-center gap-5">

          <nav className="flex gap-[2.778vw] items-center xl:w-[60%]">
            <Image src={assetUrl("/images/logo-dark.webp")} width={160} height={36} alt="os platform" className="w-[120px] md:w-[160px]" />
            <ul className="hidden lg:flex items-center gap-2 flex-[0_1_560px] justify-between">
              <li className="nav-link"><CoursesDropdown /></li>
              <li className="nav-link"><Link href="#section-team">{dict.header.aboutUs}</Link></li>
              <li className="nav-link"><Link href="#section-form">{dict.header.wantToEarn}</Link></li>
              <li className="nav-link"><Link href="#section-study-ways">{dict.header.learningFromPractitioners}</Link></li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-7">
            <button type="button" title="phone">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5562 10.9062L12.1007 11.359C12.1007 11.359 11.0181 12.4355 8.0631 9.4972C5.10812 6.55901 6.1907 5.48257 6.1907 5.48257L6.4775 5.19738C7.1841 4.49484 7.2507 3.36691 6.6342 2.54348L5.37326 0.859077C4.61028 -0.160083 3.13596 -0.294713 2.26145 0.574827L0.691848 2.13552C0.258228 2.56668 -0.0323518 3.12559 0.0028882 3.74561C0.0930382 5.33182 0.810708 8.7447 4.81536 12.7266C9.0621 16.9492 13.0468 17.117 14.6763 16.9651C15.1917 16.9171 15.6399 16.6546 16.0011 16.2954L17.4217 14.883C18.3806 13.9295 18.1102 12.2949 16.8833 11.628L14.9728 10.5894C14.1672 10.1515 13.1858 10.2801 12.5562 10.9062Z" fill="#606980" />
              </svg>
            </button>

            <LanguageDropdown />

            <button type="button" title="person">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 13.3333C26.6667 20.6971 20.6971 26.6667 13.3333 26.6667C5.96953 26.6667 0 20.6971 0 13.3333C0 5.96953 5.96953 0 13.3333 0C20.6971 0 26.6667 5.96953 26.6667 13.3333ZM17.3333 9.33333C17.3333 11.5425 15.5425 13.3333 13.3333 13.3333C11.1241 13.3333 9.33333 11.5425 9.33333 9.33333C9.33333 7.1242 11.1241 5.33333 13.3333 5.33333C15.5425 5.33333 17.3333 7.1242 17.3333 9.33333ZM13.3333 24.6667C15.712 24.6667 17.9196 23.9339 19.7425 22.6816C20.5477 22.1285 20.8917 21.0749 20.4237 20.2176C19.4533 18.4404 17.4536 17.3333 13.3332 17.3333C9.21292 17.3333 7.21329 18.4403 6.24285 20.2176C5.77473 21.0749 6.1188 22.1284 6.92395 22.6815C8.74691 23.9337 10.9545 24.6667 13.3333 24.6667Z" fill="#606980" />
              </svg>
            </button>

            <button
              type="button"
              className="md:text-nowrap max-xl:w-min rounded-[8px] bg-black text-white text-sm py-3 px-5 xl:px-7 block border border-[#E25544] hover:opacity-70 transition-all duration-300 ease-in-out"
            >
              {dict.header.selectTraining}
            </button>
          </div>

          {/* Mobile: icons + burger */}
          <div className="flex lg:hidden items-center gap-4">
            <LanguageDropdown />
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <BurgerIcon open={menuOpen} />
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""} lg:hidden`}>
          <ul className="flex flex-col gap-1 pt-4">
            <li><Link onClick={closeMenu} href="#section-courses" className="mobile-menu__link">{dict.header.courses}</Link></li>
            <li><Link onClick={closeMenu} href="#section-team" className="mobile-menu__link">{dict.header.aboutUs}</Link></li>
            <li><Link onClick={closeMenu} href="#section-form" className="mobile-menu__link">{dict.header.wantToEarn}</Link></li>
            <li><Link onClick={closeMenu} href="#section-study-ways" className="mobile-menu__link">{dict.header.learningFromPractitioners}</Link></li>
          </ul>

          <ButtonBlack
            title={dict.header.selectTraining}
            onClick={() => { }}
          />
        </div>

      </div>
    </div>
  )
}
