"use client";

import {Breadcrumb,  Spin,} from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {notFound} from "next/navigation";

interface Course {
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

 function CourseDetails({ id }: { id: string }) {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tCourseDetails = useTranslations("training.courseDetails");
    const tCourses = useTranslations("training.coursesTypes");

     const { data, error, isPending } = useGet<Course>({
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
                        <li>{tCourseDetails("specialization")}: {item?.specialization} </li>
                        <li>{tCourseDetails("goal")}: {item?.objective}</li>
                        <li>{tCourseDetails("mainTitle")}: {item?.main_axes}</li>
                        <li>{tCourseDetails("subTitles")}: {item?.main_knowledge}</li>
                        {/*<li>{tCourseDetails("annualSchedule")}: {item}</li>*/}
                        <li>{tCourseDetails("trainerName")} <Link href={`/training/experts/${item?.expert?.id}`} className="underline underline-offset-4 hover:underline-offset-2">{item?.expert?.name}</Link></li>
                        {/*<li>{tCourseDetails("relatedServices")}:</li>*/}
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
                    {/*<Button danger type="link" className="text-base font-medium">*/}
                    {/*    {tCourseDetails("cancelSubscription")}*/}
                    {/*</Button>*/}
                </div>
            </div>
        </PageWrapper>
    );
}
export default withAuth(CourseDetails)