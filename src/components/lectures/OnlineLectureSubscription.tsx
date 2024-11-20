"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ReusableTable from "../shared/Table";

import {lecturesColumns, lecturesData} from "@/config/tables/lecturesConfig";

export default function OnlineLectureSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");

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
        dataSource={lecturesData}
        columns={lecturesColumns}
      />
      <div className="mt-6 flex justify-between items-center">
        <Link
          href="/lectures/private-lecture-request"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tBreadcrumb("lectures.subscribeToPrivateLecture")}
        </Link>
        <Link
          href="/lectures/fee-payment"
          className="underline underline-offset-4 hover:underline-offset-2"
        >
          {tBreadcrumb("lectures.feePayment")}
        </Link>
      </div>
    </PageWrapper>
  );
}
