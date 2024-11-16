"use client";

import {Breadcrumb, Button,} from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function CourseDetails() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tCourseDetails = useTranslations("training.courseDetails");
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
                        title: tBreadcrumb("training.courseDetails")
                    }
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />
            {/* Page Content */}
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">

                {/* Course Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">
                        {tCourseDetails("courseTitle")}
                    </h2>
                    <ul className="list-disc ps-6 space-y-2 text-gray-700 *:font-medium">
                        <li>{tCourseDetails("specialization")}:</li>
                        <li>{tCourseDetails("goal")}:</li>
                        <li>{tCourseDetails("mainTitle")}:</li>
                        <li>{tCourseDetails("subTitles")}:</li>
                        <li>{tCourseDetails("annualSchedule")}:</li>
                        <li>{tCourseDetails("trainerName")} <Link href="/training/experts/1" className="underline underline-offset-4 hover:underline-offset-2">عمرو عبدالهادي</Link></li>
                        <li>{tCourseDetails("relatedServices")}:</li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <Link
                        href="/training/courses/online-course-subscription"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tCourses("subscribeToRemoteCourse")}
                    </Link>
                    <Link
                        href="/training/courses/private-course-request"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tCourses("subscribeToPrivateCourse")}
                    </Link>
                    <Button danger type="link" className="text-base font-medium">
                        {tCourseDetails("cancelSubscription")}
                    </Button>
                </div>
            </div>
        </PageWrapper>
    );
}
