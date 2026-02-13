"use client";

export default function ButtonBlack({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button
      type="button"
      className="rounded-[8px] bg-black text-white py-3 px-7 block border border-[#E25544] hover:opacity-70 transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
