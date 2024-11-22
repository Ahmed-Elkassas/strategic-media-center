"use client";

import { Breadcrumb } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from '../PageWrapper'

export default function DialogueForumDetails() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tForumDetails = useTranslations("forums.details");

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
                        <strong>{tForumDetails("title")}:</strong> أهمية التخطيط الاستراتيجي للمؤسسات الإعلامية
                    </li>
                    <li>
                        <strong>{tForumDetails("topic")}:</strong> التخطيط الاستراتيجي
                    </li>
                    <li>
                        <strong>{tForumDetails("domain")}:</strong> الإعلام والتخطيط
                    </li>
                    <li>
                        <strong>{tForumDetails("participantsCount")}:</strong> 39
                    </li>
                    <li>
                        <strong>{tForumDetails("creationDate")}:</strong> .../.../....
                    </li>
                    <li>
                        <strong>{tForumDetails("relatedSurveys")}:</strong>
                        <ul className="list-disc ps-6">
                            <li>استطلاع رأي عن أهمية التخطيط الاستراتيجي</li>
                            <li>استطلاع رأي عن الإعلام الحكومي</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{tForumDetails("relatedServices")}:</strong>
                        <ul className="list-disc ps-6">
                            <li>خدمات استشارية في مجال الإعلام</li>
                            <li>تحليل بيانات الاستطلاعات</li>
                        </ul>
                    </li>
                </ul>

                {/* Actions */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <Link
                        href="/forums/participate"
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
