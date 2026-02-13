export interface FormData { name: string, telegram: string, phone: string };

export interface ValidationMessages {
  required: string;
  invalidPhone: string;
}

export function validateData(data: FormData, messages?: ValidationMessages) {
  const errors: { [key: string]: string } = {};
  const requiredMessage = messages?.required ?? "Required.";
  const invalidPhoneMessage = messages?.invalidPhone ?? "Invalid phone number.";

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
    errors.phone = invalidPhoneMessage;
  }

  return errors;
}
