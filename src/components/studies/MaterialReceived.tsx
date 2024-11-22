"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import SuccessMessage from "../shared/SuccessMessage";

export default function MaterialReceived() {
  const t = useTranslations("studies");
  const tBreadcrumb = useTranslations("common");

  const message = (
    <h1 className="text-xl font-bold text-center text-white mb-4">
      {t("receivedMaterial")}
    </h1>
  );


  return (
    <SuccessMessage
      breadcrumbItems={[
        {
          title: (
            <Link
              href="/studies"
              className="hover:!bg-transparent hover:underline"
            >
              {tBreadcrumb("breadcrumb.studies.title")}
            </Link>
          )
        },
        {
          title: tBreadcrumb("breadcrumb.studies.materialReceived")
        }
      ]}
      message={message}

    >


      {/* Call-to-Action */}
      <div className="mt-6 text-center">
        <Link
          href="/studies/list"
          className="text-blue-400 text-center hover:text-blue-600 px-4 py-2 underline underline-offset-4 hover:underline hover:underline-offset-1"
        >
          {tBreadcrumb("breadcrumb.studies.studiesList")}
        </Link>
      </div>
    </SuccessMessage>
  );
}
