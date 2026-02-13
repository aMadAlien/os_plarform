"use client";

import { useDictionary } from "@/i18n/DictionaryContext";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { dict } = useDictionary();

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{dict.error.title}</h1>
      <button onClick={reset}>{dict.error.tryAgain}</button>
    </main>
  );
}
