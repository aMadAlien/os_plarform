import useCountUp from '~/utils/useCountUp';

const b = import.meta.env.BASE_URL;



function Button({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button
      type="button"
      className="rounded-[8px] bg-black text-white py-3 px-7 block border border-[#E25544]"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default function HeroBlock() {
  const { count, ref: counterRef } = useCountUp(99);

  return (
    <div className='mb-[120px] pt-[120px]'>
      <div className="container">

        <div className="mx-auto max-w-[1136px] w-full relative">
          <div className="flex justify-between w-full">

            <div className="flex max-w-[560px] flex-col justify-center py-[20px]">
              <div className="flex gap-2.5 items-center mb-[57px]">
                <div className="flex gap-2 items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5327 9.42167C12.9265 9.64092 13.3719 9.76476 13.8535 9.76476C15.3635 9.76476 16.5888 8.53859 16.5888 7.0286C16.5888 5.52629 15.3635 4.30014 13.8535 4.30014C13.5542 4.30014 13.2696 4.35167 12.9996 4.4386C13.3935 5.07398 13.6196 5.82475 13.6196 6.62014C13.6196 7.70014 13.218 8.67784 12.5327 9.42167Z" fill="#464E62" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.99543 9.76476C5.47697 9.76476 5.92159 9.64092 6.3162 9.42167C5.63004 8.67784 5.22851 7.70014 5.22851 6.62014C5.22851 5.82552 5.45466 5.07398 5.84928 4.43937C5.57928 4.35167 5.29466 4.30014 4.99543 4.30014C3.48543 4.30014 2.25928 5.52629 2.25928 7.0286C2.25928 8.53934 3.48543 9.76476 4.99543 9.76476Z" fill="#464E62" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.42466 10.0913C11.337 10.0913 12.8924 8.53591 12.8924 6.62366C12.8924 4.71212 11.337 3.15674 9.42466 3.15674C7.51241 3.15674 5.95703 4.71212 5.95703 6.62366C5.95703 8.53591 7.51241 10.0913 9.42466 10.0913Z" fill="#464E62" />
                    <g opacity="0.4">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.9578 13.5144C17.3962 11.7559 15.9078 10.7497 13.8655 10.7497H13.8509C13.0186 10.7421 12.2747 10.9097 11.647 11.2305C13.3986 11.7928 14.697 13.0405 15.2947 14.8059C16.2431 14.6744 17.0678 14.3828 17.797 13.9374L18.0378 13.7844L17.9578 13.5144Z" fill="#464E62" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.16175 11.2164C6.54866 10.9102 5.82636 10.7495 5.00944 10.7495H4.98021C2.9379 10.7495 1.44944 11.7564 0.894822 13.5142L0.807129 13.7842L1.0479 13.9372C1.74097 14.3611 2.55866 14.6449 3.47021 14.7911C4.07559 13.0187 5.39636 11.7633 7.16175 11.2164Z" fill="#464E62" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.39802 11.6178C9.38577 11.6178 9.37419 11.6178 9.36269 11.6178C6.73652 11.6178 4.8219 12.9086 4.1096 15.1617L4.02344 15.434L4.26729 15.5832C5.65805 16.4309 7.3196 16.8432 9.34652 16.8432H9.41194C11.4404 16.8432 13.1027 16.4309 14.4934 15.5832L14.738 15.434L14.6519 15.1617C13.9389 12.9086 12.0249 11.6178 9.39802 11.6178Z" fill="#464E62" />
                    </g>
                  </svg>
                  <span className="text-[#2A2F3C] text-base font-medium">Для новачків</span>
                </div>

                <span className="w-[6px] h-[6px] rounded-full bg-[#D0D5E1]" />

                <div className="flex gap-2 items-center">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.16669 0C9.48385 0 9.77355 0.180064 9.91395 0.464484L12.2952 5.28872L17.6205 6.06709C17.9343 6.11296 18.1949 6.33296 18.2927 6.63464C18.3905 6.93631 18.3086 7.26735 18.0814 7.48863L14.2287 11.2411L15.138 16.5425C15.1916 16.8551 15.0631 17.1711 14.8064 17.3575C14.5498 17.544 14.2095 17.5685 13.9288 17.4209L9.16669 14.9165L4.40457 17.4209C4.12381 17.5685 3.78356 17.544 3.52691 17.3575C3.27027 17.1711 3.14173 16.8551 3.19535 16.5425L4.10459 11.2411L0.251918 7.48863C0.0247317 7.26735 -0.0571624 6.93631 0.0406526 6.63464C0.138467 6.33296 0.399038 6.11296 0.712838 6.06709L6.03814 5.28872L8.41944 0.464484C8.55983 0.180064 8.84951 0 9.16669 0Z" fill="#FFBE15" />
                  </svg>
                  <span className="text-[#2A2F3C] text-base font-medium">Онлайн дохід</span>
                </div>

              </div>

              <h1 className="text-[64px] leading-[100%] font-bold tracking-[-3px] mb-6">Навчальна платформа для онлайн-заробітку</h1>

              <p className="text-[32px] leading-[100%] font-medium text-[#464E62] mb-9">Старт з нуля — дохід від <span className="text-[#902335]">$1000</span></p>

              <div className="flex gap-5">
                <Button
                  title="Обрати курс"
                  onClick={() => { }}
                />
                <Button
                  title="Безкоштовна консультація"
                  onClick={() => { }}
                />
              </div>
            </div>

            <div className="absolute right-0 flex justify-center">
              <img
                className="w-[656px] h-auto"
                src={`${b}images/hero.png`}
                alt=""
              />
            </div>
          </div>
        </div>

      </div>

      <div className="container relative z-10 px-4">
        <div className="flex w-full gap-4">

          <div
            className="p-8 rounded-[32px] bg-[#212631] grid grid-cols-2 gap-8"
            style={{
              boxShadow: '1px 4px 12.7px 0px #B22E42',
            }}
          >
            {
              [
                {
                  title: "Навчаємо арбітражу, P2P та AI-професіям на основі реальної практики",
                  icon: "cometIcon"
                },
                {
                  title: "Власна система навчання, створена всередині команди",
                  icon: "GoogleIcon"
                },
                {
                  title: "Працюємо з цими напрямками з 2022 року",
                  icon: "globusIcon"
                },
                {
                  title: "Реальні кейси, інструменти та робота з живим ринком",
                  icon: "academyIcon"
                }
              ].map((item, index) => (
                <div className="flex items-center gap-4">
                  <div className="bg-[#2A2F3C] rounded-[16px] w-[88px] h-[88px] flex items-center justify-center shrink-0">
                    <img
                      className="w-[32px] h-[32px]"
                      src={`${b}images/icons/${item.icon}.webp`}
                      alt=""
                    />
                  </div>
                  <p className="text-white font-medium text-lg leading-[26px] md:w-[70%]">{item.title}</p>
                </div>
              ))
            }

          </div>

          <div
            className="p-8 rounded-[32px] bg-[#1F1D1D] min-w-[350px] flex flex-col justify-between gap-3"
            style={{
              boxShadow: '1px 4px 12.7px 0px #B22E42',
            }}
          >
            <img
              className="w-[56px] h-[24px]"
              src={`${b}images/icons/people.png`}
              alt=""
            />

            <div ref={counterRef} className="text-[#B22E42] font-semibold text-[96px] leading-[100%] font-[Manrope]">
              {count}%
            </div>

            <p className="text-white font-medium text-base leading-6">починали з повного нуля</p>
          </div>

        </div>
      </div>
    </div>
  )
}
