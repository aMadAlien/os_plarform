import { type JSX, useEffect, useRef, useState } from "react";

export function TabsBlock({ buttons }:
  { buttons: { title: string | JSX.Element; active: boolean; onClick: () => void }[] }
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeIndex = buttons.findIndex(b => b.active);
    if (activeIndex === -1) return;
    // children: [0] = indicator div, [1..n] = buttons
    const btn = container.children[activeIndex + 1] as HTMLElement;
    if (!btn) return;
    setIndicator({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
    });
  }, [buttons]);

  return (
    <>
      {/* Desktop: single bar with sliding indicator */}
      <div ref={containerRef} className="relative hidden md:flex bg-[#F5F5F5] rounded-[32px] gap-2 p-2 w-fit mx-auto">
        <div
          className="absolute top-2 h-[calc(100%-16px)] bg-black rounded-[40px] transition-all duration-300 ease-in-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {buttons.map(({ title, active, onClick }, index) => (
          <button
            key={index}
            type="button"
            onClick={onClick}
            className={`
              relative z-10
              ${active ? "text-white" : "hover:bg-white"} w-fit
              rounded-[40px] h-[50px] text-xl leading-[100%] px-10 font-medium
              transition-colors duration-300`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Mobile: individual pill buttons with wrap */}
      <div className="flex md:hidden flex-wrap justify-center gap-2 px-2">
        {buttons.map(({ title, active, onClick }, index) => (
          <button
            key={index}
            type="button"
            onClick={onClick}
            className={`
              ${active ? "bg-black text-white" : "bg-[#F5F5F5]"}
              rounded-[40px] h-[42px] text-sm leading-[100%] px-5 font-medium
              transition-colors duration-300`}
          >
            {title}
          </button>
        ))}
      </div>
    </>
  );
}