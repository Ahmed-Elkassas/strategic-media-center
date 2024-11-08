"use client";

import { Breadcrumb } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { CheckCircleTwoTone } from "@ant-design/icons";

export default function ConsultingReceived() {
  const t = useTranslations("consulting");
  const tBreadcrumb = useTranslations("common");

  return (
    <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
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
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* Confirmation Message */}
      <div className="mt-4 mx-auto max-w-3xl bg-[rgba(83,196,26,0.75)]  p-6 rounded-lg shadow-md">
        <span className="block text-center">
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{ fontSize: "25px" }}
          />
        </span>
        <h1 className="text-xl font-bold text-center text-white mb-4">
          {t("received.title")}
        </h1>
        <p className="text-lg text-white">{t("received.message")}</p>
      </div>

      {/* Related Consultations */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {t("relatedConsultations.title")}
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("relatedConsultations.item1")}</li>
          <li>{t("relatedConsultations.item2")}</li>
          <li>{t("relatedConsultations.item3")}</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="mt-6 text-center">
        <Link
          href="/consulting/consulting-request"
          className="text-blue-400 text-center hover:text-blue-600 px-4 py-2 underline underline-offset-4 hover:underline hover:underline-offset-1"
        >
          {t("received.requestAnother")}
        </Link>
      </div>
    </PageWrapper>
  );
}
