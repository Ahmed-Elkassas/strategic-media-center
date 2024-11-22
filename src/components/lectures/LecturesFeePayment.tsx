"use client";

import { Breadcrumb,  Checkbox, Button } from "antd";
import PageWrapper from "@/components/PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {lecturesFeePaymentData, lecturesPaymentColumns} from "@/config/tables/lectureFeePayment";
import ReusableTable from "@/components/shared/Table";

export default function LecturesFeePayment() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tLectures = useTranslations("lectures");

    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            {/* Breadcrumb */}
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
                        ),
                    },
                    {
                        title: (
                            <Link
                                href="/lectures/online-lecture-subscription"
                                className="hover:!bg-transparent hover:underline"
                            >
                                {tBreadcrumb("lectures.subscribeToRemoteLecture")}
                            </Link>
                        ),
                    },

                    {
                        title: tBreadcrumb("lectures.feePayment"),
                    },
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Table Section */}
            <section className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
                <ReusableTable
                    dataSource={lecturesFeePaymentData}
                    columns={lecturesPaymentColumns}

                />

                {/* Additional Actions */}
                <div className="mt-4">
                    <Checkbox>{tLectures("subscribeConfirmation")}</Checkbox>
                </div>

                {/* Fees and Actions */}
                <div className="flex justify-between items-center mt-6 bg-yellow-200 p-4 rounded-lg">
                    <div>
                        <p>
                            {tLectures("discount")}: <strong>$5</strong>
                        </p>
                        <p>
                            {tLectures("total")}: <strong>$45</strong>
                        </p>
                    </div>
                    <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
                        {tLectures("payFees")}
                    </Button>
                </div>
            </section>

            {/* Footer Links */}
            <div className="mt-6 flex justify-center gap-6">
                <Link
                    href="/lectures/online-course-subscription"
                    className="underline underline-offset-4 hover:underline-offset-2"
                >
                    {tLectures("expertDetails.subscribeToRemoteCourse")}
                </Link>
                <Link
                    href="/lectures/private-course-request"
                    className="underline underline-offset-4 hover:underline-offset-2"
                >
                    {tLectures("expertDetails.subscribeToPrivateCourse")}
                </Link>
                <Link
                    href="/lectures"
                    className="underline underline-offset-4 hover:underline-offset-2 text-red-600"
                >
                    {tLectures("expertDetails.cancelSubscription")}
                </Link>
            </div>
        </PageWrapper>
    );
}
