import { useState } from "react";
import { courses, coursesCategories } from "./data";
import ArrowIcon from "~/assets/icons/ArrowIcon";
import { TabButton } from "../components/TabButton";


function CourseTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex max-md:flex-wrap gap-1.5 mb-3 md:mb-6">
      {
        tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#B3B8C7] text-black hover:bg-black hover:text-white h-[20px] md:h-[27px] text-xs leading-[20px] md:leading-[27px] font-medium rounded-[13px] px-3 transition-colors duration-300 select-none"
          >
            {tag}
          </span>
        ))
      }
    </div>
  )
}

export default function CoursesBlock() {
  const [courseTab, setCourseTab] = useState<"all" | "arbitrage" | "ai-creator" | "p2p-arbitrage">("all");

  return (
    <section className="bg-rounded !mt-8">
      <h2 className="title text-center mb-10 md:mb-[54px]">
        Обирай курс<br />
        Напрями, де реально заробляють
      </h2>

      <div className="flex gap-2 md:gap-x-5 items-center justify-center flex-wrap mb-7 md:mb-12">
        <TabButton
          title={
            <span className="flex items-center gap-2">
              Всі <ArrowIcon color={courseTab === "all" ? 'black' : 'white'} />
            </span>
          }
          active={courseTab === "all"}
          onClick={() => setCourseTab("all")}
        />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses
          .filter(course => courseTab === "all" || course.id === courseTab)
          .map((course, index) => (
            <div
              key={index}
              className="py-5 md:py-7 px-3 md:px-5 bg-[#F5F6FA] rounded-[32px] h-[228px] overflow-hidden max-w-[560px] w-full max-lg:justify-self-center"
            >
              <div className="sm:hidden">
                <CourseTags tags={course.tags} />
              </div>
              <div className="flex gap-1 sm:h-full justify-between">

                <div className="flex flex-col justify-between">

                  <div>
                    <div className="max-sm:hidden">
                      <CourseTags tags={course.tags} />
                    </div>
                    <h3 className="text-base sm:text-2xl md:text-3xl max-sm:leading-5 text-[#22262F] font-bold">{course.title}</h3>
                  </div>

                  <button
                    type="button"
                    className="flex gap-3 items-center text-black font-bold text-sm sm:text-base leading-6 -mb-1.5"
                  >
                    Детальніше <ArrowIcon className="max-sm:w-[26px]" />
                  </button>
                </div>

                <video
                  src={course.video}
                  className="w-[120px] sm:w-[150px] md:w-[160px] aspect-square rounded-full shrink-0 self-end object-cover max-sm:translate-[-16px]"
                  muted
                  loop
                  preload="auto"
                  controls={false}
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  playsInline
                />
              </div>
            </div>
          ))
        }
      </div>

      <button
        type="button"
        className="rounded-[10px] bg-[#F5F6FA] hover:bg-black border border-[#EBEEF5] py-[18px] px-6 hover:text-white text-[#2A2F3C] text-sm font-bold leading-5 mx-auto mt-[65px] block  transition-colors duration-300"
      >
        Показати більше
      </button>
    </section>
  )
}
