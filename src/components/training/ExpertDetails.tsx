"use client";

import {Breadcrumb, Image} from "antd";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import PageWrapper from "../PageWrapper";

export default function ExpertDetails() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tExpert = useTranslations("training.expertDetails");

    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            {/* Breadcrumb */}
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
                        ),
                    },
                    {
                        title: tBreadcrumb("training.expertDetails"),
                    },
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Page Content */}
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    {/* Expert Details */}
                    <div className="col-span-2">
                        <ul className="list-disc ps-6 space-y-2 text-gray-700 font-medium">
                            <li>
                                <strong>{tExpert("name")}: </strong> عمرو عبدالهادي
                            </li>
                            <li>
                                <strong>{tExpert("shortBio")}: </strong>
                            </li>
                            <li>
                                <strong>{tExpert("currentPosition")}: </strong>
                            </li>
                            <li>
                                <strong>{tExpert("previousPositions")}: </strong>
                                <ul className="list-disc ps-6">
                                    <li> 1</li>
                                    <li> 2</li>
                                    <li> 3</li>
                                    <li> 4</li>

                                </ul>
                            </li>
                            <li>
                                <strong>{tExpert("keyWorkExperience")}: </strong>
                                <ul className="list-disc ps-6">
                                    <li> 1</li>
                                    <li> 2</li>
                                    <li> 3</li>

                                </ul>
                            </li>
                            <li>
                                <strong>{tExpert("mainTrainingCourses")}: </strong>
                                <ul className="list-disc ps-6">
                                    <li> 1</li>
                                    <li> 2</li>

                                </ul>
                            </li>
                            <li>
                                <strong>{tExpert("academicQualifications")}: </strong>
                                <ul className="list-disc ps-6">
                                    <li> 1</li>
                                    <li> 2</li>
                                    <li> 3</li>

                                </ul>
                            </li>
                            <li>
                                <strong>{tExpert("researchStudies")}: </strong>
                                <ul className="list-disc ps-6">
                                    <li>Research 1</li>
                                    <li>Research 2</li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* Expert Image */}
                    <div className="col-span-1 flex justify-center">
                        <Image
                            src={"https://placehold.co/350x250"}
                            alt="Expert Image"
                            width={350}
                            height={250}
                            className=""
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <Link
                        href="/training/courses/online-course-subscription"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tExpert("subscribeToRemoteCourse")}
                    </Link>
                    <Link
                        href="/training/courses/private-course-request"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        {tExpert("subscribeToPrivateCourse")}
                    </Link>
                    <Link
                        href="/training/courses"
                        className="underline underline-offset-4 hover:underline-offset-2 text-red-600"
                    >
                        {tExpert("cancelSubscription")}
                    </Link>
                </div>
            </div>
        </PageWrapper>
    );
}
