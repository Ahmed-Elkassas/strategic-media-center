"use client";

import { notFound } from "next/navigation";
import { Breadcrumb } from "antd";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { consultingServices } from "@/lib/data/consultingData";
import PageWrapper from "../PageWrapper";

export default function ConsultingDetails({ slug }: { slug: string }) {
  const service = consultingServices?.find((s) => s.slug === slug);

  const t = useTranslations("common.breadcrumb.consulting");

  if (!service) {
    notFound();
  }

  return (
    <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/consulting"
                className="hover:!bg-transparent hover:underline"
              >
                {t("title")}
              </Link>
            )
          },
          {
            title: t("consultingDetails")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <div className="mt-3 mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Consultation Title */}
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          {service.title}
        </h1>

        {/* Consultation Field */}
        <p className="text-lg text-gray-700 mb-4">
          <strong className="font-semibold text-gray-900">
            مجال عمل الاستشارة:
          </strong>{" "}
          {service.field}
        </p>

        {/* Consultation Goal */}
        <p className="text-lg text-gray-700 mb-4">
          <strong className="font-semibold text-gray-900">
            الهدف العام من الاستشارة:
          </strong>{" "}
          {service.goal}
        </p>

        {/* Consultation Summary */}
        <p className="text-lg text-gray-700 mb-6">
          <strong className="font-semibold text-gray-900">
            ملخص الاستشارة:
          </strong>{" "}
          {service.summary}
        </p>

        {/* Related Services */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            استشارات ذات صلة:
          </h2>
          {service.relatedServices.map((related, index) => (
            <div key={index} className=" p-4 rounded-md  mb-4">
              <p className="font-semibold text-gray-900 mb-2">
                {related.category}:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {related.items.map((item, idx) => (
                  <li key={idx} className="pl-2 hover:text-cyan-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Other Related Services */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            خدمات أخرى ذات صلة:
          </h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            {service.otherRelatedServices.map((otherService, index) => (
              <li key={index} className="p-2 hover:text-gray-800">
                {otherService}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        href="/consulting/consulting-request"
        className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
      >
        طلب إستشارة
      </Link>
    </PageWrapper>
  );
}
