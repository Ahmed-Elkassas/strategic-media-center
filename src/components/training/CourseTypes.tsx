"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CourseTypes() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tCourses = useTranslations("training.coursesTypes");

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/training"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("training.title")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("training.coursesTypes")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <section>
        <p className="my-4">{tCourses("heroParagraph")}</p>
        <p className="my-4">{tCourses("secondParagraph")}</p>
        <p>{tCourses("points.headTitle")}</p>
        <ol className=" list-decimal list-inside ms-4">
          <li className="mt-2">
            {tCourses("points.firstPointRemoteCoursesTitle")}
          </li>
          <li className="my-1">
            {tCourses("points.secondPointPrivacyCourses.title")}
          </li>
          <ul className="list-disc list-inside ms-8">
            <li>{tCourses("points.secondPointPrivacyCourses.first")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.second")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.third")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.fourth")}</li>
          </ul>
        </ol>
      </section>
    </PageWrapper>
  );
}
