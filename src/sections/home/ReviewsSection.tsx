"use client";

import { useRef, useState } from "react";
import ArrowShortIcon from "@/assets/icons/ArrowShortIcon";

const reviews = [
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
  "/images/reviews/1.png",
]

export default function ReviewsSection() {
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);
  const isMouseDown = useRef(false);  // Відстежуємо, чи натиснута мишка
  const startX = useRef(0);  // Позиція початку
  const scrollLeft = useRef(0);  // Поточна позиція скролу

  const handleScroll = () => {
    if (!reviewsRef.current) return;
    const scrollLeftValue = reviewsRef.current.scrollLeft;
    const scrollWidth = reviewsRef.current.scrollWidth;
    const clientWidth = reviewsRef.current.clientWidth;

    setIsAtStart(scrollLeftValue === 0);
    setIsAtEnd(scrollLeftValue + clientWidth === scrollWidth);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!reviewsRef.current) return;
    isMouseDown.current = true;
    startX.current = e.clientX;
    scrollLeft.current = reviewsRef.current.scrollLeft;
    reviewsRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    if (!reviewsRef.current) return;
    isMouseDown.current = false;
    reviewsRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!reviewsRef.current) return;
    if (!isMouseDown.current) return;

    const x = e.clientX;
    const walk = (x - startX.current) * 2; // швидкість прокручування
    reviewsRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollTo = (direction: "prev" | "next") => {
    if (!reviewsRef.current) return;
    const scrollAmount = 300;
    reviewsRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="container !mt-[75px] !mb-[90px] px-4">
      <div className="flex max-sm:flex-col justify-between items-end gap-5 mb-2">
        <div>
          <h2 className="text-base md:text-4xl text-[#5F6379] font-medium md:mb-1">Відгуки</h2>
          <h2 className="title">
            Краще за нас скажуть лише <br className="max-md:hidden" /> результати студентів
          </h2>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            title="scroll reviews button"
            className={`w-[49px] h-[49px] bg-white flex items-center justify-center rounded-full hover:brightness-95 transition-filters duration-300 ${isAtStart ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={() => scrollTo("prev")}
            disabled={isAtStart}
          >
            <ArrowShortIcon />
          </button>
          <button
            type="button"
            title="scroll reviews button"
            className={`w-[49px] h-[49px] bg-white flex items-center justify-center rounded-full hover:brightness-95 transition-filters duration-300 ${isAtEnd ? "opacity-50 cursor-not-allowed" : ""
              }`}
            onClick={() => scrollTo("next")}
            disabled={isAtEnd}
          >
            <ArrowShortIcon className="rotate-180" />
          </button>
        </div>
      </div>

      <div
        className="overflow-x-auto whitespace-nowrap cursor-grab flex gap-5 md:gap-10 pb-3 scrollbar--top pb-[72px]"
        ref={reviewsRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews.map((review, index) => (
          <div key={index} className="rounded-[25px] scrollbar--top w-[85%] md:w-[55%] lg:w-[31%] aspect-[1/1.3] relative shrink-0 overflow-hidden">
            <img
              src={review}
              alt={`review-${index}`}
              key={index}
              draggable={false}
              className="object-cover w-full h-full absolute"
            />
          </div>
        ))}
      </div>
    </section>
  );
}