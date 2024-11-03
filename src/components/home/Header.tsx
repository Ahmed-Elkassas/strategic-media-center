"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import {
  FacebookFilled,
  InstagramFilled,
  MenuOutlined,
  TwitterCircleFilled,
  YoutubeFilled
} from "@ant-design/icons";
export default function HomePageHeader() {
  const t = useTranslations("common.links");

  const locale = useLocale();

  const isRTL = locale === "ar";

  return (
    <header className="relative">
      <div className="relative">
        <div
          className={`hidden md:block md:absolute top-[35px] lg:top-0 ${
            isRTL
              ? "right-[20px] lg:right-[50px]"
              : "left-[20px] lg:left-[50px]"
          } `}
        >
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            className="w-full md:w-[253px] h-auto"
            width="300"
            height="165"
            priority={false}
          />
        </div>
        <div>
          {/* <!-- Top Bar (Social media + Sign-in/Sign-up buttons) --> */}
          <div className="bg-gray-400 text-white text-sm py-2">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
              <div className="hidden md:block w-[320px]" />

              <div className="flex-1 flex justify-between items-center w-full md:w-auto">
                {/* <!-- Sign-in/Sign-up --> */}
                <div className="flex gap-4">
                  <Link href="/login" className="text-slate-700">
                    تسجيل دخول
                  </Link>
                  <Link href="/signup" className="text-slate-700">
                    تسجيل جديد
                  </Link>
                </div>
                {/* <!-- Social Media Links --> */}
                <ul className="flex gap-3">
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      target="_blank"
                      className="text-slate-700"
                    >
                      <TwitterCircleFilled style={{ fontSize: "1.3rem" }} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com"
                      target="_blank"
                      className="text-slate-700"
                    >
                      <YoutubeFilled style={{ fontSize: "1.3rem" }} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      className="text-slate-700"
                    >
                      <InstagramFilled style={{ fontSize: "1.3rem" }} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      className="text-slate-700"
                    >
                      <FacebookFilled style={{ fontSize: "1.3rem" }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden flex justify-between items-center px-4">
            <div className="w-[200px] h-auto">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                className="w-[150px] h-auto"
                height={150}
                width={200}
              />
            </div>
            <button
              id="burger-btn"
              className="text-white bg-primary p-2 rounded-md focus:outline-none md:hidden"
            >
              <MenuOutlined />
            </button>
          </div>

          {/* <!-- Main Navigation Bar --> */}
          <div className="bg-primary py-3 hidden md:block" id="main-menu">
            <nav className="container mx-auto px-4 flex flex-wrap">
              <div className="hidden md:block w-[320px]" />
              <ul className="h-auto md:h-[154px] flex flex-col md:flex-row items-start md:items-end gap-4 w-full text-white flex-1">
                <li className="lg:border-e-2 lg:pl-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("home")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="/aboutus" className="text-sm hover:text-gray-300">
                    {t("aboutus")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link
                    href="/consulting"
                    className="text-sm hover:text-gray-300"
                  >
                    {t("consulting")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    منهجية العمل
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("lectures")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    دورات
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("seminars")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("opinionPolls")}
                  </Link>
                </li>
                <li className="lg:border-e-2 lg:px-2">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("forums")}
                  </Link>
                </li>
                <li className="">
                  <Link href="#" className="text-sm hover:text-gray-300">
                    {t("news")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* <!-- Submenu Bar --> */}
          <div className="bg-gray-500 py-2 text-white text-sm">
            <div className="container mx-auto px-4 flex flex-wrap">
              <div className="hidden md:block w-[320px]"></div>
              <nav className="flex gap-4 w-full flex-1">
                <Link href="#" className="hover:text-gray-300">
                  فعاليات الشهر القادم
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  فعاليات الشهر القادم
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  فعاليات الشهر القادم
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
