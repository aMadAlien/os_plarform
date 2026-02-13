"use client";

import { useCallback, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { TabsBlock } from '@/components/TabsBlock'
import { useDictionary } from '@/i18n/DictionaryContext'
import { joinWithBr } from '@/i18n/jsx-helpers'
import { assetUrl } from '@/utils/assetUrl'

export type StudyWay = 'couches' | 'warranty' | 'comunity';

const TRANSITION_MS = 300;

export default function StudyWays() {
  const [activeTab, setActiveTab] = useState<StudyWay>('couches');
  const [visible, setVisible] = useState(true);
  const pendingTab = useRef<StudyWay | null>(null);
  const { dict } = useDictionary();

  const tabData = useMemo(() => dict.studyWays.tabs.find(way => way.id === activeTab), [activeTab, dict]);

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
        {dict.studyWays.sectionTitle}
      </h2>

      <div className="rounded-[32px] bg-white mt-14 py-8 md:py-10 overflow-hidden">
        <TabsBlock
          buttons={dict.studyWays.tabs.map((way) => ({
            title: way.title,
            active: way.id === activeTab,
            onClick: () => handleTabChange(way.id as StudyWay),
          }))}
        />

        <div className="flex max-md:flex-col max-md:items-center gap-10 mt-[70px]">
          <div className={`tab-text ${visible ? 'active' : ''} lg:mt-[7%] max-sm:px-3 sm:pl-5 lg:pl-[56px]`}>
            <h3 className="text-xl sm:text-3xl lg:text-[40px] leading-5 sm:leading-[42px] font-medium">
              {tabData?.title}
            </h3>
            <p className="text-base md:text-lg leading-5 md:leading-[26px] mt-7">{tabData ? joinWithBr(tabData.descriptionParts) : null}</p>
          </div>

          <div className={`tab-media ${visible ? 'active' : ''} shrink-0 w-[55%] max-md:w-full`}>
            {tabData?.img ? (
              <Image
                src={assetUrl(tabData.img!)}
                width={700}
                height={500}
                alt=""
                className="w-full object-cover rounded-l-[24px]"
              />
            ) : (
              <video
                key={tabData?.video}
                src={tabData?.video ? assetUrl(tabData.video) : undefined}
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
          dict.studyWays.cards.map((item, index) => (
            <div key={index} className="last:text-white last:bg-black bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 pb-8 sm:pb-10">
              <div className='flex flex-col items-center'>
                <Image className='mb-6 sm:mb-8 w-full max-w-[280px]' src={assetUrl(item.image)} width={280} height={200} alt="Explaner" />
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
