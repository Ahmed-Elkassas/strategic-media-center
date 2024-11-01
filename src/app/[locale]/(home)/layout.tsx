import type { Metadata } from "next";
// import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import HomePageHeader from "@/components/home/Header";
import HomePageFooter from "@/components/home/Footer";

import "../../globals.css";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900"
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900"
// });

// Define a type for the allowed locales
type Locale = "ar" | "en"; // Add more locales if needed

export const metadata: Metadata = {
  title: "المركز الإعلامي الاستراتيجي",
  description:
    "المركز الوحيد التخصص في تخطيط وإدارة العمل العلمي على أسس استراتيجية، تضمن الوصول إلى الجمهور وتحقيق الهداف العليا."
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Type assertion for locale
  const localeAsType = locale as Locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(localeAsType)) {
    notFound();
  }

  const dir = localeAsType === "ar" ? "rtl" : "ltr";

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir}>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* // TODO: DON'T Forget to replace the 'Navbar' with home page Navbar */}
          <HomePageHeader />
          {children}
          <HomePageFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
