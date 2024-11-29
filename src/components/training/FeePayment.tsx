"use client";

import { Breadcrumb, Button, Checkbox } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ReusableTable from "../shared/Table";
import {
  feePaymentCoursesColumns,
  feePaymentCoursesDataSource
} from "@/config/tables/courseFeePayment";
import {withAuth} from "@/components/withAuth";

 function FeePayment() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tPayment = useTranslations("training.payment");

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
                className="hover:!bg-transparent  hover:underline"
              >
                {tBreadcrumb("training.coursesTypes")}
              </Link>
            )
          },
          {
            title: (
              <Link
                href="/training/courses/online-course-subscription"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("training.subscribeToRemoteCourse")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("training.feePayment")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      {/* Page Content */}
      <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Table */}
        <ReusableTable
          dataSource={feePaymentCoursesDataSource}
          columns={feePaymentCoursesColumns}
        />

        {/* Total and Discount Section */}
        <div className="flex justify-end ">
          <div className="w-[145px] ">
            <p className="flex items-center justify-center font-semibold h-[55px] bg-gray-400">
              الخصم: $50
            </p>
            <p className="flex items-center justify-center font-semibold h-[55px] bg-gray-400 mt-[1px]">
              المجموع: $450
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* Subscription Checkbox */}
          <div className="text-yellow-400 px-4 py-3">
            <Checkbox>{tPayment("checkboxMessage")}</Checkbox>
          </div>

          {/* Fee Payment Link */}
          <Button type="link" href="/training/fee-payment/submit">
            {tPayment("submitPayment")}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

export default withAuth(FeePayment)