import { useState } from "react";
import { Link } from "react-router";
import ArrowShortIcon from "~/assets/icons/ArrowShortIcon";
import Checkbox from "~/components/Checkbox";
import Input from "~/components/Input";


interface FormData { name: string, telegram: string, phone: string };

function validateData(data: FormData) {
  const errors: { [key: string]: string } = {};
  const requiredMessage = "Обов'язково для заповнення.";

  if (!data.name || data.name.trim() === "") {
    errors.name = requiredMessage;
  }

  if (!data.telegram || data.telegram.trim() === "") {
    errors.telegram = requiredMessage;
  }

  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!data.phone || data.phone.trim() === "") {
    errors.phone = requiredMessage;
  }

  if (data.phone && !phoneRegex.test(data.phone)) {
    errors.phone = "Невірний номер телефону. Він повинен містити від 10 до 15 цифр.";
  }

  return errors;
}




export default function Form() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [telegram, setTelegram] = useState<string>('');
  const [accepted, setAccepted] = useState<boolean>(false);
  const [errors, setErrors] = useState<null | { [key: string]: string }>(null);

  function submit(data: FormData) {
    const errors = validateData(data);

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
    <div className="bg-rounded mb-[70px] md:mb-[106px]">
      <h2 className="title mb-6">Розпочни свій шлях уже зараз!</h2>

      <div className="flex max-md:flex-col gap-6">
        <div className="w-full max-w-[626px]">
          <img
            className="w-[378px] mb-4 max-md:w-[90%] max-md:mx-auto"
            src="../../public/images/form.png" alt="image" />
          <p className="text-xl leading7 font-medium">Реєструйся на консультацію та зроби перший крок назустріч
            новій професії. Наш менеджер допоможе тобі обрати напрямок
            навчання.</p>
        </div>

        <div className="flex flex-col gap-[30px] w-full max-w-[506px] max-md:mx-auto">
          <div className="w-full">
            <Input
              value={name}
              onChange={setName}
              placeholder="Імʼя"
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
              placeholder="Номер Телефону"
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
              placeholder="Нікнейм в Telegram"
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
            <p className="text-2sm leading-6 text-[#5F6379]">
              <span>Ви погоджуєтесь з </span>
              <Link to={''} className="text-[#1A2040] font-medium hover:underline">Оферта</Link>
              <span> та </span>
              <Link to={''} className="text-[#1A2040] font-medium hover:underline">Політика конфіденційності</Link>
            </p>
          </button>

          <button
            type="button"
            disabled={!accepted}
            className="relative h-[50px] bg-black rounded-[25px] text-white text-base leading-[50px] hover:bg-gray-500 transition-colors duration-300"
            onClick={() => submit({ name, phone, telegram })}
          >
            Надіслати
            <span className="absolute bg-[#FFFFFF66] rounded-full h-[44px] w-[44px] flex items-center justify-center right-[3px] top-1/2 -translate-y-1/2">
              <ArrowShortIcon className="rotate-180" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
