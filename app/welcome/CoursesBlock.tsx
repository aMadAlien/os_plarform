import { useState } from "react";
import { courses, coursesCategories } from "./data";
import ArrowIcon from "~/assets/icons/ArrowIcon";
import { TabButton } from "../components/TabButton";

export default function CoursesBlock() {
  const [courseTab, setCourseTab] = useState<"all" | "arbitrage" | "ai-creator" | "p2p-arbitrage">("all");

  return (
    <section className="container bg-rounded !mt-8">
      <h2 className="title text-center mb-[54px]">
        Обирай курс<br />
        Напрями, де реально заробляють
      </h2>

      <div className="flex gap-5 items-center justify-center flex-wrap mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses
          .filter(course => courseTab === "all" || course.id === courseTab)
          .map((course, index) => (
            <div
              key={index}
              className="bg-[#F5F6FA] rounded-[32px] h-[228px]"
            >
              <div className="flex py-7 px-5 gap-1 h-full justify-between">
                <div className="flex flex-col justify-between">

                  <div>
                    <div className="flex gap-1.5 mb-6">
                      {
                        course.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-[#B3B8C7] text-black hover:bg-black hover:text-white h-[27px] text-xs leading-[27px] font-medium rounded-[13px] px-3 transition-colors duration-300 select-none"
                          >
                            {tag}
                          </span>
                        ))
                      }
                    </div>
                    <h3 className="text-3xl text-[#22262F] font-bold">{course.title}</h3>
                  </div>

                  <button
                    type="button"
                    className="flex gap-3 items-center text-black font-bold text-base leading-6 -mb-1.5"
                  >
                    Детальніше <ArrowIcon />
                  </button>
                </div>


                <video
                  src={course.video}
                  className="w-[160px] h-[160px] rounded-full shrink-0 self-end object-cover"
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
