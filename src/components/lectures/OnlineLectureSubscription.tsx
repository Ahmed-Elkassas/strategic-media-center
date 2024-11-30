"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ReusableTable from "../shared/Table";

import {lecturesColumns} from "@/config/tables/lecturesConfig";
import {withAuth} from "@/components/withAuth";
import {useState} from "react";
import {useGet} from "@/hooks/useGet";

interface Lecture {
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

 function OnlineLectureSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");

     const [currentPage, setCurrentPage] = useState<number>(1);

     const { data, error, isPending } = useGet<Lecture[]>({
         endpoint: "/user/v1/events?category_ids=15",
         params: { page: currentPage },
     })

     const {  data: lectureData  = [], meta } = !error  && data?.response || {};

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
                href="/lectures"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("lectures.title")}
              </Link>
            )
          },
          {
            title: (
              <Link
                href="/lectures/types"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("lectures.lectureTyps")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("lectures.subscribeToRemoteLecture")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      {/* // TODO: WILL UPDATE WITH THE APIs */}
      <ReusableTable
        dataSource={lectureData}
        columns={lecturesColumns}
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
          href="/lectures/private-lecture-request"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tBreadcrumb("lectures.subscribeToPrivateLecture")}
        </Link>
        {/*<Link*/}
        {/*  href="/lectures/fee-payment"*/}
        {/*  className="underline underline-offset-4 hover:underline-offset-2"*/}
        {/*>*/}
        {/*  {tBreadcrumb("lectures.feePayment")}*/}
        {/*</Link>*/}
      </div>
    </PageWrapper>
  );
}

export default withAuth(OnlineLectureSubscription)