import { ExplanerCard } from "~/components/ExplanerCard";
import { explaners } from "./data";

export default function Explaner() {
  return (
    <section className="container bg-rounded !mt-12">
      <div className="flex justify-between items-center gap-5">
        <h2 className="title">
          Як проходить<br />навчання
        </h2>

        <button
          type="button"
          className="h-min rounded-[10px] bg-black hover:bg-[#F5F6FA] border border-[#EBEEF5] py-[18px] px-6 text-white hover:text-black text-sm font-bold leading-5 transition-colors duration-300"
        >
          Підібрати навчання
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[86px]">
        {
          explaners.map((explaner, index) => (
            <ExplanerCard
              key={index}
              index={index}
              title={explaner.title}
              description={explaner.description}
              image={explaner.image}
            />
          ))
        }
      </div>
    </section>
  )
}
