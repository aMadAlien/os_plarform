import { validateData, type FormData } from "~/utils/validation";
import Input from "../Input";
import { useState } from "react";
import { Link } from "react-router";
import ButtonBlack from "../ButtonBlack";

export default function FormModal() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [errors, setErrors] = useState<null | { [key: string]: string }>(null);

  function submit(data: FormData) {
    const errors = validateData(data as FormData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
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
    <div className="w-full max-w-[990px] text-[#2A2F3C] max-sm:mt-5 flex max-sm:flex-col gap-6 md:gap-10 items-center md:p-[2.778vw]">
      <div>
        <p className="text-[#E25544] font-semibold text-xs mb-2.5">ЗВ'ЯЖИСЯ З НАМИ</p>
        <h2 className="font-semibold max-md:text-2xl text-[3.611vw] sm:leading-[4.167vw] 2xl:text-[52px] 2xl:eading-[60px] mb-5">Потрібно більше інформації?</h2>

        <ul>
          {
            [
              "Отримай відповіді на всі запитання",
              "З'ясуй, який формат навчання тобі підійде",
              "Дізнайся про наші ексклюзивні пропозиції",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-centr mb-2 sm:mb-4">
                <svg className="shrink-0 max-sm:w-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="14" fill="#B4D9DD" />
                  <path d="M19.3346 10L12.0013 17.3333L8.66797 14" stroke="#3F7075" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="text-sm md:text-lg font-medium leading-5 md:leading-6">{item}</span>
              </li>
            ))
          }
        </ul>

      </div>

      <div className="w-full max-w-[350px] md:max-w-[368px] rounded-[14px] md:rounded-[32px] bg-white p-[2.222vw]">
        <div className="flex flex-col gap-4 w-full max-w-[506px] max-md:mx-auto">
          <div className="w-full">
            <span className="form-label flex gap-2 items-center">Ім’я
              <span className="bg-[#FF602E] w-[4px] h-[4px] rounded-full" />
            </span>
            <Input
              value={name}
              onChange={setName}
              placeholder="Іван"
              errored={!!errors?.name}
            />
            {
              !errors?.name ? null :
                <span className='error-message'>{errors.name}</span>
            }
          </div>
          <div className="w-full">
            <span className="form-label">Телефон</span>
            <Input
              value={phone}
              onChange={setPhone}
              placeholder="+1"
              errored={!!errors?.phone}
            />
            {
              !errors?.phone ? null :
                <span className='error-message'>{errors.phone}</span>
            }
          </div>
          <div className="w-full">
            <span className="form-label">Телефон</span>
            <Input
              value={telegram}
              onChange={setTelegram}
              placeholder="@os_platform"
              errored={!!errors?.telegram}
            />
            {
              !errors?.telegram ? null :
                <span className='error-message'>{errors.telegram}</span>
            }
          </div>

          <ButtonBlack
            title="Отримати консультацію"
            onClick={() => submit({ name, phone, telegram })}
          />

          <p className="text-xs leading-5 text-[#7A8399]">
            <span>Натискаючи на «Отримати консультацію», ти погоджуєшся з нашими </span>
            <Link to={''} className="text-[#464E62] hover:underline">Умовами використання</Link>,
            <Link to={''} className="text-[#464E62] hover:underline"> Політикою конфіденційності </Link>
            <span> та </span>
            <Link to={''} className="text-[#464E62] hover:underline">Політикою файлів cookie</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
