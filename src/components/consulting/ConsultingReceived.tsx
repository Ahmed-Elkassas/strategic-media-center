"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import SuccessMessage from "../shared/SuccessMessage";
import { withAuth } from "@/components/withAuth";

function ConsultingReceived() {
  const t = useTranslations("consulting");
  const tBreadcrumb = useTranslations("common");

  const message = (
    <h1 className="text-xl font-bold text-center text-white mb-4">
      {t("received.title")}
    </h1>
  );

  const additionalMessage = (
    <p className="text-lg text-white">{t("received.message")}</p>
  );

  return (
    <SuccessMessage
      breadcrumbItems={[
        {
          title: (
            <Link
              href="/consulting"
              className="hover:!bg-transparent hover:underline"
            >
              {tBreadcrumb("breadcrumb.consulting.title")}
            </Link>
          )
        },
        {
          title: tBreadcrumb("breadcrumb.consulting.consultingReceived")
        }
      ]}
      message={message}
      additionalMessage={additionalMessage}
    >
      {/* Call-to-Action */}
      <div className="mt-6 text-center">
        <Link
          href="/consulting/consulting-request"
          className="text-blue-400 text-center hover:text-blue-600 px-4 py-2 underline underline-offset-4 hover:underline hover:underline-offset-1"
        >
          {t("received.requestAnother")}
        </Link>
      </div>
    </SuccessMessage>
  );
}

export default withAuth(ConsultingReceived);
