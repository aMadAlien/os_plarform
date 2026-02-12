export interface FormData { name: string, telegram: string, phone: string };

export function validateData(data: FormData) {
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