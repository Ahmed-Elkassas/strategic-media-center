import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePageFooter() {
  const t = useTranslations("common");
  return (
    <footer className="bg-slate-800 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-4">
          {/*  Navigation Links */}
          <ul className="flex flex-wrap gap-2 text-white text-sm md:text-base justify-center md:justify-start w-full md:w-auto">
            <li className="border-l-2 px-3">
              <Link href="/" className="hover:text-slate-400">
                {t("links.home")}
              </Link>
            </li>
            <li className="border-l-2 px-3">
              <Link href="/aboutus" className="hover:text-slate-400">
                {t("links.aboutus")}
              </Link>
            </li>
            <li className="border-l-2 px-3">
              <Link href="#" className="hover:text-slate-400">
                {t("footer.serviceAgreement")}
              </Link>
            </li>
            <li className="border-l-2 px-3">
              <Link href="#" className="hover:text-slate-400">
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li className="px-3">
              <Link href="#" className="hover:text-slate-400">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
          {/*  Social Media Links  */}
          <ul className="flex flex-wrap gap-3 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            <li>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                className="text-white hover:text-slate-400"
              ></Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                className="text-white hover:text-slate-400"
              ></Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="text-white hover:text-slate-400"
              ></Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="text-white hover:text-slate-400"
              ></Link>
            </li>
          </ul>
        </div>
        {/* Divider Line  */}
        <div className="h-[2px] w-full bg-slate-400" />

        {/* Copyright Text  */}
        <p className="text-center text-white py-4">
          {t("footer.copyright")}
          <i className="fas fa-copyright"></i>
        </p>
      </div>
    </footer>
  );
}
