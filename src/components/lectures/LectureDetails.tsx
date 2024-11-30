"use client";

import {Breadcrumb, Spin} from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {notFound} from "next/navigation";

interface Lecture {
    id: number;
    title: string;
    specialization: string;
    duration: number;
    duration_type: string;
    price: number;
    objective: string;
    main_axes: string;
    main_skills: string
    main_knowledge: string
    related_services: {
        id: number;
        title: string;
    }[];
    expert?: {
        id: number;
        name: string
    }
}

 function LectureDetails({ id }: { id: string }) {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tLectureDetails = useTranslations("lectures.details");


     const { data, error, isPending } = useGet<Lecture>({
         endpoint: `/user/v1/events/${id}`,
     })

     if (isPending) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <Spin size="large" />
                 </div>
             </PageWrapper>
         );
     }

     // Handle error state
     if (error) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <p>خطأ: {error.message}</p>
                 </div>
             </PageWrapper>
         );
     }

     // Check if data exists
     if (!data || !data.response || !data.response.data) {
         notFound();
     }

     const item = data.response.data;

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
                    <li>{tLectureDetails("lectureTitle")}: {item?.title}</li>
                    <li>{tLectureDetails("specialization")}: {item?.specialization}</li>
                    <li>الھدف العام المحاضرة: {item?.objective}</li>

                    <li>{tLectureDetails("mainTitle")}: {item?.main_axes}</li>
                    <li>{tLectureDetails("subTitles")}: {item?.main_knowledge}</li>
                    <li>{tLectureDetails("annualSchedule")}</li>
                    <li>{tLectureDetails("trainerName")}<Link href={`/lectures/experts/${item?.expert?.id}`} className="underline underline-offset-4 hover:underline-offset-2">{item?.expert?.name}</Link></li>

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
                    {/*<Link*/}
                    {/*    href="/lectures/cancel-subscription"*/}
                    {/*    className="text-red-500 hover:underline"*/}
                    {/*>*/}
                    {/*    {tLectureDetails("cancelSubscription")}*/}
                    {/*</Link>*/}
                </div>
            </div>
        </PageWrapper>
    );
}

export default withAuth(LectureDetails)