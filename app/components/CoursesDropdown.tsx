import { useEffect, useRef, useState } from "react";
import { coursesCategories } from "~/welcome/data";

export default function CoursesDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleSelect = (id: string) => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("select-course-tab", { detail: id }));
    document.getElementById("section-courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-1">
        Курси
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`courses-dropdown ${open ? "active" : ""} absolute top-full left-0 mt-3 bg-white rounded-[16px] py-2 min-w-[220px] z-50`}
        style={{ boxShadow: '0px 4px 24px 0px #22262F1A' }}
      >
        {coursesCategories
          .filter(c => c.id !== "top")
          .map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelect(cat.id)}
              className="block w-full text-left px-5 py-2.5 text-sm font-medium text-[#2A2F3C] hover:bg-[#F5F6FA] transition-colors duration-150"
            >
              {cat.title}
            </button>
          ))}
      </div>
    </div>
  );
}