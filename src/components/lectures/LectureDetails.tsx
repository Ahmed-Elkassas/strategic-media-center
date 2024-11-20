"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function LectureDetails() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tLectureDetails = useTranslations("lectures.details");

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
                        title: tBreadcrumb("lectures.lectureDetails")
                    }
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Lecture Details */}
                <h2 className="text-xl font-bold mb-4">
                    {tLectureDetails("lectureDetailsTitle")}
                </h2>
                <ul className="list-disc ps-6 space-y-2 text-gray-700 *:font-medium">
                    <li>{tLectureDetails("lectureTitle")}</li>
                    <li>{tLectureDetails("specialization")}</li>
                    <li>{tLectureDetails("goal")}</li>
                    <li>{tLectureDetails("mainTitle")}</li>
                    <li>{tLectureDetails("subTitles")}</li>
                    <li>{tLectureDetails("annualSchedule")}</li>

                    <li>{tLectureDetails("trainerName")} <Link href="/lectures/experts/1"
                                                              className="underline underline-offset-4 hover:underline-offset-2">عمرو
                        عبدالهادي</Link></li>
                    <li>{tLectureDetails("relatedLectures")}</li>
                    <li>{tLectureDetails("relatedServices")}</li>
                </ul>

                {/* Footer Actions */}
                <div className="flex justify-center gap-6 mt-8">
                    <Link
                        href="/lectures/online-lecture-subscription"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tLectureDetails("subscribeToLecture")}
                    </Link>
                    <Link
                        href="/lectures/private-lecture-request"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tLectureDetails("requestPrivateLecture")}
                    </Link>
                    <Link
                        href="/lectures/cancel-subscription"
                        className="text-red-500 hover:underline"
                    >
                        {tLectureDetails("cancelSubscription")}
                    </Link>
                </div>
            </div>
        </PageWrapper>
    );
}
