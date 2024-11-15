"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ReusableTable from "../shared/Table";
import {
  trainingCoursesColumns,
  trainingCoursesData
} from "@/config/tables/trainingCoursesConfig";

export default function OnlineCourseSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");

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
            title: (
              <Link
                href="/training/courses/types"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("training.coursesTypes")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("training.subscribeToRemoteCourse")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      {/* // TODO: WILL UPDATE WITH THE APIs */}
      <ReusableTable
        dataSource={trainingCoursesData}
        columns={trainingCoursesColumns}
      />
    </PageWrapper>
  );
}
