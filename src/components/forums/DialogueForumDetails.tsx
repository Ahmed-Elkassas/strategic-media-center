"use client";

import {Breadcrumb, Spin} from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from '../PageWrapper'
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {notFound} from "next/navigation";

interface Forum {
    id: number;
    title: string;
    subtitle: string;
    domain: string;
    start_date: string;
    end_date: string;
    forum_ids: number[];
    related_forums: string[];
    related_services: string[];
}

 function DialogueForumDetails({ id }: { id: string }) {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tForumDetails = useTranslations("forums.details");


     const { data, error, isPending } = useGet<Forum>({
         endpoint: `/user/v1/discussion_forums/${id}`,
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
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link
                                href="/forums"
                                className="hover:!bg-transparent hover:underline"
                            >
                                {tBreadcrumb("forums.title")}
                            </Link>
                        )
                    },
                    {
                        title: tBreadcrumb("forums.details")
                    }
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Forum Details */}
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-lg font-bold mb-4">
                    {tForumDetails("detailsHeader")}
                </div>
                <ul className="list-disc ps-6 space-y-2 text-gray-700 font-medium">
                    <li>
                        <strong>{tForumDetails("title")}:</strong> {item?.title}
                    </li>
                    <li>
                        <strong>{tForumDetails("topic")}:</strong> {item?.subtitle}
                    </li>
                    <li>
                        <strong>{tForumDetails("domain")}:</strong> {item?.domain}
                    </li>
                    <li>
                        <strong>{tForumDetails("participantsCount")}:</strong> {item?.forum_ids?.length || 0}
                    </li>
                    <li>
                        <strong>{tForumDetails("creationDate")}:</strong> {item?.start_date}
                    </li>
                    <li>
                        <strong>{tForumDetails("relatedSurveys")}:</strong>
                        <ul className="list-disc ps-6">
                            {item?.related_forums?.length > 0 ? (
                                item.related_forums.map((survey, index) => (
                                    <li key={index}>{survey}</li>
                                ))
                            ) : (
                                <li>لا توجد استبيانات ذات صلة</li>
                            )}
                        </ul>
                    </li>
                    <li>
                        <strong>{tForumDetails("relatedServices")}:</strong>
                        <ul className="list-disc ps-6">
                            {item?.related_services?.length > 0 ? (
                                item.related_services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))
                            ) : (
                                <li>لا توجد خدمات ذات صلة</li>
                            )}
                        </ul>
                    </li>
                </ul>

                {/* Actions */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <Link
                        href="/forums"
                        className="underline underline-offset-4 hover:underline-offset-2 text-blue-600"
                    >
                        {tForumDetails("joinForum")}
                    </Link>
                    <Link
                        href="/forums"
                        className="underline underline-offset-4 hover:underline-offset-2 text-gray-600"
                    >
                        {tForumDetails("backToList")}
                    </Link>
                </div>
            </div>
        </PageWrapper>
     );
 }

export default withAuth(DialogueForumDetails)