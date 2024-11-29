import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "../../globals.css";
import Providers from "@/app/providers";

type Locale = "ar" | "en";


export default async function RootLayout({
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

  const messages = await getMessages();



  return (
    <html lang="ar" dir={dir}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar />
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
