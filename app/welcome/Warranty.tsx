
export default function Warranty() {
  return (
    <section className="max-w-[1136px] w-full mx-auto rounded-[48px] bg-[#DEDBDC] mt-[75px] overflow-hidden">
      <div className="flex justify-between items-stretch gap-5">

        <div className="ml-[80px] mt-7 mb-14 max-w-[475px]">
          <h2 className="text-3xl leading-9 font-semibold mb-7">Як працює гарантія працевлаштування?</h2>

          <p className="text-[#464E62] text-lg leading-7 font-semibold mb-7">
            Ми співпрацюємо з командами та проєктами на ринку арбітражу, P2P та digital-напрямків, які зацікавлені у підготовлених спеціалістах.
          </p>

          <p className="text-[#464E62] text-lg leading-7 font-semibold">
            Під час навчання ти отримуєш практичні навички та працюєш з реальними інструментами, а після завершення курсу ми допомагаємо з виходом на ринок: рекомендаціями, підготовкою до співбесід та передачею кандидатів партнерам.
          </p>
        </div>

        <div className="relative flex-[0_0_500px]">
          <img
            src="../../public/images/warranty.png"
            alt=""
            className="h-full w-full absolute object-cover rounded-[48px]"
          />
        </div>
      </div>
    </section>
  )
}
