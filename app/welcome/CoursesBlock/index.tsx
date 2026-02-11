import { useState, type JSX } from "react";
import { courses, coursesCategories } from "./../data";
import ArrowIcon from "~/assets/icons/ArrowIcon";


function CourseTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-1.5">
      {
        tags.map((tag, index) => (
          <span
            key={index}
            className="first:bg-black first:text-white bg-[#B3B8C7] text-black hover:bg-black hover:text-white h-[20px] md:h-[27px] text-xs leading-[20px] md:leading-[27px] font-medium rounded-[13px] px-3 transition-colors duration-300 select-none"
          >
            {tag}
          </span>
        ))
      }
    </div>
  )
}

export function TabButton({ title, active, onClick }: { title: string | JSX.Element; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${active ? "border-2 border-black bg-white text-black font-bold" : "text-[#6E7494]"}
        max-lg:border-2 rounded-[40px] h-[38px] md:h-[45px] text-sm md:text-lg leading-[100%] px-5 text-left text-nowrap
        hover:bg-white hover:text-black transition-colors duration-300`}
    >
      <span className="flex items-center justify-between gap-2">
        {title}
        {active && <ArrowIcon />}
      </span>
    </button>
  );
}

export default function CoursesBlock() {
  const [courseTab, setCourseTab] = useState<"top" | "arbitrage" | "ai-creator" | "p2p-arbitrage" | "office" | "it-dev">("top");

  return (
    <section className="bg-rounded !mt-8">
      <h2 className="title text-center mb-10 md:mb-[54px]">
        Обирай курс<br />
        Напрями, де реально заробляють
      </h2>

      <div className="flex flex-col max-lg:flex-wrap md:flex-row gap-5 md:gap-7 w-full overflow-hidden">
        <div className="flex max-lg:flex-wrap lg:flex-col gap-2 md:gap-2.5 lg:flex-[1_0_270px] overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          {
            coursesCategories.map((course, index) => (
              <TabButton
                key={index}
                title={course.title}
                active={courseTab === course.id}
                onClick={() => setCourseTab(course.id as any)}
              />
            ))
          }
        </div>

        <div className="flex flex-col gap-5 md:gap-[44px] md:flex-[0_1_880px]">
          {courses
            .filter(course => course.id === courseTab)
            .map((course, index) => (
              <div
                key={index}
                className="py-2.5 px-3 xl:pr-[60px] md:px-6 bg-[#F5F6FA] hover:bg-[#DCDCEE] rounded-[20px] h-auto sm:h-[255px] overflow-hidden w-full hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-3 sm:h-full justify-between">

                  <div className="flex flex-col justify-between gap-2 sm:gap-0 py-1 sm:py-0">
                    <CourseTags tags={course.tags} />
                    <h3 className="text-base sm:text-2xl lg:text-3xl max-md:leading-5 text-[#22262F] font-bold">{course.title}</h3>
                    <p className="text-[#333] font-semibold text-xs sm:text-sm leading-4 sm:leading-5 md:max-w-[470px]">{course.description}</p>

                    <button
                      type="button"
                      className="flex gap-3 items-center text-black font-bold text-sm sm:text-base leading-6 hover:translate-x-[20px] hover:scale-[1.05] transition-all duration-300"
                    >
                      Детальніше <ArrowIcon className="max-sm:w-[26px]" />
                    </button>
                  </div>

                  <video
                    src={course.video}
                    className="w-[120px] sm:w-[180px] lg:w-[220px] aspect-square shrink-0 object-cover rounded-[12px]"
                    muted
                    loop
                    preload="auto"
                    controls={false}
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                    playsInline
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
