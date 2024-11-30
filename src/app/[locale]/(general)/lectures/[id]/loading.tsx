import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("consulting");
  return (
    <div className="flex items-center justify-center h-screen">
      <p>{t("loading")}</p>
    </div>
  );
}
