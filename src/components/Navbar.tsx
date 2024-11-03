import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("common.links");

  const locale = useLocale();

  const isRTL = locale === "ar";

  return (
    <div className="relative">
      <div
        className={`hidden md:block md:absolute top-[35px] lg:top-0 ${
          isRTL ? "right-[20px] lg:right-[50px]" : "left-[20px] lg:left-[50px]"
        } w-[150px] lg:w-[300px] h-auto`}
      >
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          className="w-full md:w-[165px]  h-auto"
          width="300"
          height="165"
          priority={false}
        />
      </div>
      <header className="container mx-auto px-2 py-8">
        <h1 className="text-center text-lg">
          <span className="underline underline-offset-4 block">
            المركز الوحيد المتخصص في تخطيط وإدارة العمل الإعلامي
          </span>
          <span className="underline underline-offset-4 block">
            على أسس استراتيجية، تضمن الوصول إلى الجمهور وتحقيق الأهداف العليا.
          </span>
        </h1>
      </header>
      <nav className="bg-[#991b1b] py-2 flex">
        <ul className="container mx-auto px-2 flex gap-[5px] justify-center text-white">
          <div className="hidden md:block w-[320px]" />
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/aboutus" className="text-sm hover:text-gray-300">
              {t("aboutus")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/philosophy" className="text-sm hover:text-gray-300">
              {t("philosophy")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/consulting" className="text-sm hover:text-gray-300">
              {t("consulting")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/training" className="text-sm hover:text-gray-300">
              {t("training")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="/lectures" className="text-sm hover:text-gray-300">
              {t("lectures")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="#" className="text-sm hover:text-gray-300">
              {t("studies")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="#" className="text-sm hover:text-gray-300">
              {t("seminars")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="#" className="text-sm hover:text-gray-300">
              {t("opinionPolls")}
            </Link>
          </li>
          <li className="lg:border-e-2 lg:pe-2 font-normal text-lg">
            <Link href="#" className="text-sm hover:text-gray-300">
              {t("forums")}
            </Link>
          </li>
          <li className="font-normal text-lg">
            <Link href="#" className="text-sm hover:text-gray-300">
              {t("news")}
            </Link>
          </li>
          <li className="mr-auto">
            <button className="capitalize font-semibold">e</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
