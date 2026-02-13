import { type JSX } from "react";

export function TabButton({ title, active, onClick }: { title: string | JSX.Element; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${active ? "border-black bg-white text-black" : "bg-black text-white"}
        border-2 rounded-[40px] h-[38px] md:h-[45px] text-sm md:text-lg leading-[100%] font-bold px-5
        hover:bg-white hover:text-black transition-colors duration-300`}
    >
      {title}
    </button>
  );
}