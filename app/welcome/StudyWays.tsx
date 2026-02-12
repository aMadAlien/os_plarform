import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react'
import { TabsBlock } from '~/components/TabsBlock'
import { studyWays } from './data'
import Explaner1 from '/images/explaner-2.1.png'
import Explaner2 from '/images/explaner-2.2.png'
import Explaner3 from '/images/explaner-2.3.png'

export type StudyWay = 'couches' | 'warranty' | 'comunity';
export interface StudyWayData {
  id: StudyWay
  category: string
  title: string
  description: ReactNode
  img?: string
  video?: string
}

const TRANSITION_MS = 300;

export default function StudyWays() {
  const [activeTab, setActiveTab] = useState<StudyWay>('couches');
  const [visible, setVisible] = useState(true);
  const pendingTab = useRef<StudyWay | null>(null);

  const tabData = useMemo(() => studyWays.find(way => way.id === activeTab), [activeTab]);

  const handleTabChange = useCallback((id: StudyWay) => {
    if (id === activeTab) return;
    pendingTab.current = id;
    setVisible(false);

    setTimeout(() => {
      setActiveTab(pendingTab.current!);
      pendingTab.current = null;
      setVisible(true);
    }, TRANSITION_MS);
  }, [activeTab]);

  return (
    <div id="section-study-ways" className="max-sm:!px-1.5 bg-rounded bg-rounded--dark mt-10">
      <h2 className="title text-center">
        Як проходить навчання
      </h2>

      <div className="rounded-[32px] bg-white mt-14 py-8 md:py-10 overflow-hidden">
        <TabsBlock
          buttons={studyWays.map((way) => ({
            title: way.title,
            active: way.id === activeTab,
            onClick: () => handleTabChange(way.id),
          }))}
        />

        <div className="flex max-md:flex-col max-md:items-center gap-10 mt-[70px]">
          <div className={`tab-text ${visible ? 'active' : ''} lg:mt-[7%] max-sm:px-3 sm:pl-5 lg:pl-[56px]`}>
            <h3 className="text-xl sm:text-3xl lg:text-[40px] leading-5 sm:leading-[42px] font-medium">
              {tabData?.title}
            </h3>
            <p className="text-base md:text-lg leading-5 md:leading-[26px] mt-7">{tabData?.description}</p>
          </div>

          <div className={`tab-media ${visible ? 'active' : ''} shrink-0 w-[55%] max-md:w-full`}>
            {tabData?.img ? (
              <img
                src={tabData.img}
                alt=""
                className="w-full object-cover rounded-l-[24px]"
              />
            ) : (
              <video
                key={tabData?.video}
                src={tabData?.video}
                className="w-full object-cover rounded-l-[24px]"
                muted
                loop
                preload="auto"
                autoPlay={true}
                controls={false}
              />
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-5">
        {
          [
            {
              title: "Навчання з практикою",
              text: "Кожен модуль — це реальні завдання та практика, а не суха теорія.",
              image: Explaner1,
            }, {
              title: "Доступ без обмежень",
              text: "доступ до курсу та всіх оновлень",
              image: Explaner2,
            },
            {
              title: "Фокус на результат і дохід",
              text: "Навчання з практичним підходом та акцентом на результат.",
              image: Explaner3,
            }
          ].map((item, index) => (
            <div key={index} className="last:text-white last:bg-black bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 pb-8 sm:pb-10">
              <div className='flex flex-col items-center'>
                <img className='mb-6 sm:mb-8 w-full max-w-[280px]' src={item.image} alt="Explaner" />
                <h4 className='font-medium text-xl sm:text-2xl text-center'>{item.title}</h4>
                <p className='max-w-[280px] text-sm sm:text-base leading-5 sm:leading-[22px] mt-4 sm:mt-6 text-center'>{item.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
