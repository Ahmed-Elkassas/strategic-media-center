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
import {withAuth} from "@/components/withAuth";

 function OnlineCourseSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tTraining = useTranslations("training");

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
      <div className="mt-6 flex justify-between items-center">
        <Link
          href="/training/courses/private-course-request"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tTraining("coursesTypes.subscribeToPrivateCourse")}
        </Link>
        <Link
          href="/training/courses/fee-payment"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tBreadcrumb("training.feePayment")}
        </Link>
      </div>
    </PageWrapper>
  );
}

export default withAuth(OnlineCourseSubscription)