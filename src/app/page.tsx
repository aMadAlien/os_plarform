"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isValidLocale } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0] || "";
    const locale = isValidLocale(browserLang) ? browserLang : defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
