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
      <div className="container px-15 pb-10">
        <div className="flex justify-between gap-7 py-11 border-b border-[#333333]">

          <div className="">
            <div className="text-lg font-bold border-b border-[#333333] pb-6 w-1/2">Курси</div>

            <NavCols />

            <div className="flex items-center gap-5 justify-self-end mt-10">

              <ApplePayIcon />
              <MastercardIcon />
              <VisaIcon />
              <GooglePayIcon />

              <button
                type="button"
                className="flex h-[55px] hover:opacity-70 transition-all duration-300"
              >
                <div className="bg-white text-black rounded-full flex items-center justify-center px-10 text-base font-bold">Сплатити курс</div>
                <div className="h-full aspect-square  bg-white rounded-full flex items-center justify-center">
                  <ArrowIcon className="w-[27px]" />
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
