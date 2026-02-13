import type { Metadata } from "next";
import "./globals.css";
import { GeneralContextProvider } from "@/context/GeneralContextProvider";
import Modal from "@/components/Modal";

export const metadata: Metadata = {
  title: "One Media - Навчальна платформа",
  description: "Навчальна платформа для онлайн заробітку",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@600;700;800&display=swap"
        />
      </head>
      <body>
        <GeneralContextProvider>
          {children}
          <Modal />
        </GeneralContextProvider>
      </body>
    </html>
  );
}
