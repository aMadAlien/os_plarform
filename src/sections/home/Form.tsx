"use client";

import { useState } from "react";
import Link from "next/link";
import ArrowShortIcon from "@/assets/icons/ArrowShortIcon";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { validateData, type FormData } from "@/utils/validation";
import { useDictionary } from "@/i18n/DictionaryContext";


export default function Form() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [accepted, setAccepted] = useState<boolean>(false);
  const [errors, setErrors] = useState<null | { [key: string]: string }>(null);
  const { dict } = useDictionary();

  function submit(data: FormData) {
    const validationErrors = validateData(data as FormData, dict.validation);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors(null);

    const preparedData = {
      name: data.name.trim(),
      telegram: data.telegram.trim(),
      phone: data.phone.trim(),
    };

    return {
      success: true,
      data: preparedData,
    };
  }


  return (
    <div id="section-form" className="bg-rounded mb-[70px] md:mb-[106px]">
      <h2 className="title mb-6">{dict.form.title}</h2>

      <div className="flex max-md:flex-col gap-6">
        <div className="w-full max-w-[626px]">
          <img
            className="w-[378px] mb-4 max-md:w-[90%] max-md:mx-auto"
            src="/images/form.png" alt="image" />
          <p className="text-xl leading7 font-medium">{dict.form.description}</p>
        </div>

        <div className="flex flex-col gap-[30px] w-full max-w-[506px] max-md:mx-auto">
          <div className="w-full">
            <Input
              value={name}
              onChange={setName}
              placeholder={dict.form.namePlaceholder}
              errored={!!errors?.name}
            />
            {
              !errors?.name ? null :
                <span className='error-message'>{errors.name}</span>
            }
          </div>
          <div className="w-full">
            <Input
              value={phone}
              onChange={setPhone}
              placeholder={dict.form.phonePlaceholder}
              errored={!!errors?.phone}
            />
            {
              !errors?.phone ? null :
                <span className='error-message'>{errors.phone}</span>
            }
          </div>
          <div className="w-full">
            <Input
              value={telegram}
              onChange={setTelegram}
              placeholder={dict.form.telegramPlaceholder}
              errored={!!errors?.telegram}
            />
            {
              !errors?.telegram ? null :
                <span className='error-message'>{errors.telegram}</span>
            }
          </div>
          <button
            type="button"
            onClick={() => setAccepted(prev => !prev)}
            className="flex gap-3 items-center text-left"
          >
            <Checkbox isActive={accepted} />
            <p className="text-sm leading-6 text-[#5F6379]">
              <span>{dict.form.agreeWith} </span>
              <Link href={''} className="text-[#1A2040] font-medium hover:underline">{dict.form.offer}</Link>
              <span> {dict.form.and} </span>
              <Link href={''} className="text-[#1A2040] font-medium hover:underline">{dict.form.privacyPolicy}</Link>
            </p>
          </button>

          <button
            type="button"
            disabled={!accepted}
            className="relative h-[50px] bg-black rounded-[25px] text-white text-base leading-[50px] hover:bg-gray-500 transition-colors duration-300"
            onClick={() => submit({ name, phone, telegram })}
          >
            {dict.form.submit}
            <span className="absolute bg-[#FFFFFF66] rounded-full h-[44px] w-[44px] flex items-center justify-center right-[3px] top-1/2 -translate-y-1/2">
              <ArrowShortIcon className="rotate-180" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
