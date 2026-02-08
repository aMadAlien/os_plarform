import logoDark from "../../public/images/logo-dark.png";

export default function Slogan() {
  return (
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
  )
}
