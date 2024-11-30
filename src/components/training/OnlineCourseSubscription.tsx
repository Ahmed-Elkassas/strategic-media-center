"use client";

import {useState} from "react";
import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ReusableTable from "../shared/Table";
import {
  trainingCoursesColumns,
} from "@/config/tables/trainingCoursesConfig";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";

interface Courses {
    id: number;
    title: string;
    specialization: string;
    duration: number;
    duration_type: string;
    price: number;
    from_date: string;
    to_date: string;
    presentation_format: string
}

 function OnlineCourseSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tTraining = useTranslations("training");

     const [currentPage, setCurrentPage] = useState<number>(1);


     const { data, error, isPending } = useGet<Courses[]>({
         endpoint: "/user/v1/events?category_ids=14",
         params: { page: currentPage },
     })


     const {  data: coursesData  = [], meta } = !error  && data?.response || {};

     // Assign default values
     const currentPageNumber = meta?.current_page ?? 1;
     const totalRecords = meta?.total ?? 0;

     const handlePageChange = (page: number) => {
         setCurrentPage(page);
     };

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
        dataSource={coursesData}
        columns={trainingCoursesColumns}
        loading={isPending}
        pagination={{
            current: currentPageNumber,
            total: totalRecords,
            pageSize: 10,
            onChange: handlePageChange,
        }}
      />
      <div className="mt-6 flex justify-between items-center">
        <Link
          href="/training/courses/private-course-request"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tTraining("coursesTypes.subscribeToPrivateCourse")}
        </Link>
        {/*<Link*/}
        {/*  href="/training/courses/fee-payment"*/}
        {/*  className="underline underline-offset-4 hover:underline-offset-2"*/}
        {/*>*/}
        {/*  {tBreadcrumb("training.feePayment")}*/}
        {/*</Link>*/}
      </div>
    </PageWrapper>
  );
}

export default withAuth(OnlineCourseSubscription)