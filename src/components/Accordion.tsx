"use client";

import { useState } from "react"
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Accordion() {
  const [active, setActive] = useState<number | null>(0);
  const { dict } = useDictionary();
  const data = dict.faq;

  if (!data || !data.length) return null;

  return (
    <div className="accordion">
      {
        data.map((item, i) => (
          <div key={i} className="accordion__elem">
            <button
              type="button"
              className="accordion__title"
              onClick={() => setActive(i === active ? null : i)}
            >
              <span>{item.title}</span>
              <span className={`plusminus ${active === i ? 'active' : ''}`} />
            </button>

            <div className={`accordion__text ${active === i ? 'active' : ''}`}>
              {item.text}
            </div>
          </div>
        ))
      }
    </div>
  )
}
