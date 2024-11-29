"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "@/components/PageWrapper";
import ReusableTable from "@/components/shared/Table";
import { openOpinionPollsColumns, openOpinionPollsData } from "@/config/tables/openOpinionPollsConfig";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {withAuth} from "@/components/withAuth";

function OpenOpinionPolls() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tPolls = useTranslations("opinionPolls");

    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link
                                href="/opinion-polls"
                                className="hover:!bg-transparent hover:underline"
                            >
                                {tBreadcrumb("opinionPolls.title")}
                            </Link>
                        ),
                    },
                    {
                        title: tPolls("measurementsOfOpinionConquest"),
                    },
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Page Content */}
            <div className="mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Table */}
                <ReusableTable
                    dataSource={openOpinionPollsData}
                    columns={openOpinionPollsColumns}
                    rowKey="id"
                />

                {/* Actions */}
                <div className="mt-6 flex justify-center">
                    <Link
                        href="/opinion-polls"
                        className="underline underline-offset-4 hover:underline-offset-2"
                    >
                        طلب قياس رأي خاص
                    </Link>
                </div>
            </div>
        </PageWrapper>
    );
}

export default withAuth(OpenOpinionPolls)