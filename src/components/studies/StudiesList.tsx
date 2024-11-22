"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "@/components/PageWrapper";
import ReusableTable from "@/components/shared/Table";
import { studiesColumns, studiesData } from "@/config/tables/studiesConfig";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function StudiesList() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tStudies = useTranslations("studies");

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/studies"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("studies.title")}
              </Link>
            )
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* Description */}
      <section className="mb-6">
        <p>{tStudies("studiesList.description")}</p>
      </section>

      {/* Reusable Table */}
      <ReusableTable dataSource={studiesData} columns={studiesColumns} />

      {/* Actions */}
      <div className="flex justify-center mt-6">
        <Link
          href="/studies/request-custom-study"
          className="text-blue-600 underline underline-offset-4 hover:underline-offset-2"
        >
          {tStudies("studiesList.requestCustomStudy")}
        </Link>
      </div>
    </PageWrapper>
  );
}
