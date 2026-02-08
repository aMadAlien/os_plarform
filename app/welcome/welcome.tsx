import { useState, type JSX } from "react";
import logoDark from "./logo-dark.png";
import logoLight from "./logo-light.svg";
import ArrowIcon from "~/assets/icons/ArrowIcon";


const courses = [
  {
    id: "arbitrage",
    title: "Курс з арбітражу трафіку iGaming",
    tags: ["Nutra", "Facebook", "Google", "iGaming"],
    image: "https://images.pexels.com/photos/17648007/pexels-photo-17648007.jpeg",
  },
  {
    id: "ai-creator",
    title: "AI Creator",
    tags: ["Nutra", "Facebook", "Google", "iGaming"],
    image: "/ai-creator.png",
  },
  {
    id: "p2p-arbitrage",
    title: "P2P Арбітраж",
    tags: ["Nutra", "Facebook", "Google", "iGaming"],
    image: "/p2p-arbitrage.png",
  },
];

const explaners = [
  {
    title: <>Фокус на<br /> результат і дохід</>,
    description: <>Ми навчаємо з чіткою метою — підготувати тебе до реальної роботи та перших грошей.<br />Формат: 20% теорії, 80% практики на реальних завданнях.</>,
    image: "https://images.pexels.com/photos/17648007/pexels-photo-17648007.jpeg",
  },
  {
    title: <>Практики ринку<br /> — твої ментори</>,
    description: <>Тебе супроводжують експерти, які працюють у сфері прямо зараз.<br />Вони допомагають розібратися в темах, виправляють помилки та проводять живі Q&A-сесії</>,
    image: "https://images.pexels.com/photos/17648007/pexels-photo-17648007.jpeg",
  },
  {
    title: <>Платформа, а якій<br />  є все</>,
    description: <>Відеоуроки, практика, завдання та прогрес — все в одному місці.<br />Навчаєшся у зручному темпі та одразу застосовуєш знання на практиці.</>,
    image: "https://images.pexels.com/photos/17648007/pexels-photo-17648007.jpeg",
  },
];


function TabButton({ title, active, onClick }: { title: string | JSX.Element; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${active ? "border-black bg-white text-black" : "bg-black text-white"}
        border-2 rounded-[40px] h-[45px] text-lg leading-[100%] font-bold px-5
        hover:bg-white hover:text-black transition-colors duration-300`}
    >
      {title}
    </button>
  );
}

function ExplanerCard({
  title,
  description,
  image,
  index,
}: {
  title: string | JSX.Element;
  description: string | JSX.Element;
  image: string;
  index: number;
}) {
  const isOdd = index % 2 !== 0;
  console.log('run', index, isOdd);
  const cardClass = isOdd ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`rounded-[32px] py-8 px-7 ${cardClass}`}>
      <div className={`${isOdd ? "text-black" : "text-white"} font-bold text-3xl leading-9`}>
        {title}
      </div>
      <p className={`${isOdd ? "text-black" : "text-white"} font-medium text-lg leading-6 mt-8`}>
        {description}
      </p>
      <img
        src={image}
        className="max-h-[200px] w-auto mx-auto mt-5"
        alt="Explaner Card Image"
      />
    </div>
  );
}



export function Welcome() {
  const [courseTab, setCourseTab] = useState<"all" | "arbitrage" | "ai-creator" | "p2p-arbitrage">("all");

  return (
    <main className="">

      <div className="h-[104px]"
        style={{
          background: "linear-gradient(90deg, #390911 0%, #B62F44 16.01%, #390911 55.58%, #390911 100%)"
        }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
          <img src={logoDark} alt="One Media" className="h-8 scale-[10]" />

          <div>
            <p className="text-white mb-1.5 text-xl">Як заробляти $300/день</p>
            <p className="text-white mb-2.5 text-sm">Без команди і офісу</p>
          </div>

          <button
            type="button"
            className="rounded-[25px] bg-white h-[50px] w-[308px] text-black text-2xl leading-5 font-medium"
          >
            Хочу дізнатись
          </button>
        </div>
      </div>

      <section className="container bg-rounded !mt-8">
        <h2 className="title text-center mb-[54px]">
          Обирай курс<br />
          Напрями, де реально заробляють
        </h2>

        <div className="flex gap-5 items-center justify-center flex-wrap mb-12">
          <TabButton
            title={<span className="flex items-center gap-2">Всі <ArrowIcon /></span>}
            active={courseTab === "all"}
            onClick={() => setCourseTab("all")}
          />
          {
            courses.map((course, index) => (
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
                <div className="flex py-7 px-5 gap-1 h-full">
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

                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-[160px] h-[160px] rounded-full shrink-0 self-end"
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

      <section className="container bg-rounded !mt-12">
        <div className="flex justify-between items-center gap-5">
          <h2 className="title">
            Як проходить<br />
            навчання
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

      <section className="max-w-[1136px] w-full mx-auto rounded-[48px] bg-[#DEDBDC] mt-[75px] overflow-hidden">
        <div className="flex justify-between items-stretch gap-5">

          <div className="ml-[80px] mt-6 mb-10 max-w-[475px]">
            <h2 className="text-3xl leading-9 font-semibold mb-7">Як працює гарантія працевлаштування?</h2>

            <p className="text-[#464E62] text-lg leading-7 font-semibold mb-7">
              Ми співпрацюємо з командами та проєктами на ринку арбітражу, P2P та digital-напрямків, які зацікавлені у підготовлених спеціалістах.
            </p>

            <p className="text-[#464E62] text-lg leading-7 font-semibold">
              Під час навчання ти отримуєш практичні навички та працюєш з реальними інструментами, а після завершення курсу ми допомагаємо з виходом на ринок: рекомендаціями, підготовкою до співбесід та передачею кандидатів партнерам.
            </p>
          </div>

          <div className="relative flex-[0_0_440px]">
            <img
              src="https://images.pexels.com/photos/17648007/pexels-photo-17648007.jpeg"
              alt=""
              className="h-full w-full absolute object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
