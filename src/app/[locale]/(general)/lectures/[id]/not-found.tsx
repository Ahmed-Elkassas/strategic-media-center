import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound"); // Access translations in the "notFound" namespace

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="mb-4">{t("description")}</p>
      <Link href="/public">
        <span className="text-blue-600 hover:underline">{t("goBackHome")}</span>
      </Link>
    </div>
  );
}
