import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common.footer");
  return (
    <footer className="bg-zinc-600 text-white py-2">
      <div className="container mx-auto px-4">
        <ul className="flex gap-2 justify-center items-center">
          <li className="pe-2 border-transparent border-e-[1px] border-white">
            <Link href="/service-subscription">{t("subscribe")}</Link>
          </li>
          <li className="pe-2 border-transparent  border-e-[1px] border-white">
            <Link href="/signup">{t("signup")}</Link>
          </li>
          <li className="pe-2 border-transparent border-e-[1px] border-white">
            <Link href="#">{t("login")}</Link>
          </li>
          <li className="pe-2 border-transparent border-e-[1px] border-white">
            <Link href="#">{t("centerServiceAgreement")}</Link>
          </li>
          <li className="pe-2">
            <Link href="#">{t("contact")}</Link>
          </li>
        </ul>
        <p className="text-center mt-2">{t("copyright")}</p>
      </div>
    </footer>
  );
}
