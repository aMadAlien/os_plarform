import MastercardIcon from "~/assets/icons/playments/MastercardIcon";
import VisaIcon from "~/assets/icons/playments/VisaIcon";
import ApplePayIcon from "~/assets/icons/playments/ApplePayIcon";
import GooglePayIcon from "~/assets/icons/playments/GooglePayIcon";
import ArrowIcon from "~/assets/icons/ArrowIcon";
import NavCols from "./NavCols";
import Contacts from './Contacts';
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <div className="bg-[#292929] text-white">
      <div className="container px-5 md:px-10 lg:px-15 pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-7 py-8 md:py-11 border-b border-[#333333]">

          <div>
            <div className="text-lg font-bold border-b border-[#333333] pb-6 lg:w-1/2">Курси</div>

            <NavCols />

            <div className="flex flex-wrap items-center gap-4 md:gap-5 mt-8 md:mt-10 justify-self-end">

              <ApplePayIcon />
              <MastercardIcon />
              <VisaIcon />
              <GooglePayIcon />

              <button
                type="button"
                className="flex h-[48px] md:h-[55px] hover:opacity-70 transition-all duration-300"
              >
                <div className="bg-white text-black rounded-full flex items-center justify-center px-6 md:px-10 text-sm md:text-base font-bold">Сплатити курс</div>
                <div className="h-full aspect-square bg-white rounded-full flex items-center justify-center">
                  <ArrowIcon className="w-[22px] md:w-[27px]" />
                </div>
              </button>

            </div>
          </div>

          <Contacts />
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  )
}
