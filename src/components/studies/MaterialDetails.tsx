"use client";

import { Breadcrumb } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";

 function MaterialDetails() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tMaterial = useTranslations("studies.materialDetails");

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
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
          },
          {
            title: tBreadcrumb("studies.materialDetails")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      {/* Material Details */}
      <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
        <ul className="list-disc ps-6 space-y-4 text-gray-700 font-medium">
          <li>
            <strong>{tMaterial("type")}: </strong> بحث/كتاب/أخرى
          </li>
          <li>
            <strong>{tMaterial("author")}: </strong> قائمة من المؤلفين
          </li>
          <li>
            <strong>{tMaterial("specialization")}: </strong> إعلام/اتصال
            مؤسسي/أخرى
          </li>
          <li>
            <strong>{tMaterial("summary")}: </strong> نص في حدود ٧٠ كلمة
          </li>
          <li>
            <strong>{tMaterial("sourceCountry")}: </strong> قائمة من الدول
          </li>
          <li>
            <strong>{tMaterial("relatedTopics")}: </strong> تظهر تباعاً
          </li>
        </ul>

        {/* Actions */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Link
            href="/studies/upload-material"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tMaterial("downloadMaterial")}
          </Link>
          <Link
            href="/login"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tMaterial("loginToAccess")}
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
export default withAuth(MaterialDetails)