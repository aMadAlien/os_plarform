import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/config";

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.message}</p>
    </main>
  );
}
