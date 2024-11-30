"use client";

import {Breadcrumb, Spin} from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {notFound} from "next/navigation";
import {isAuthenticated} from "@/utils/auth";

interface Study {
    id: number;
    type: string;
    expert: {
        id: number;
        name: string;
    };
    specialization: string;
    page_numbers: number;
    publication_date: string;
    main_topics: string;
    summary: string;
    file: string;
    related_studies: Study[];
    related_services: string[];
}


 function MaterialDetails({ id }: { id: string }) {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tMaterial = useTranslations("studies.materialDetails");


     const { data, error, isPending } = useGet<Study>({
         endpoint: `/user/v1/studies/${id}`,
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
                href="/studies"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("studies.title")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("studies.materialDetails")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      {/* Material Details */}
      <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
        <ul className="list-disc ps-6 space-y-4 text-gray-700 font-medium">
          <li>
            <strong>{tMaterial("type")}: </strong> {item?.type}
          </li>
          <li>
            <strong>{tMaterial("author")}: </strong>  {item?.expert?.name}
          </li>
          <li>
            <strong>{tMaterial("specialization")}: </strong> {item?.specialization}
          </li>
          <li>
            <strong>{tMaterial("summary")}: </strong> {item?.summary}
          </li>
          <li>
            <strong>مواد أخرى للمؤلف: </strong>
              {item?.main_topics}
          </li>
          {/*<li>*/}
          {/*  <strong>{tMaterial("relatedTopics")}: </strong> تظهر تباعاً*/}
          {/*</li>*/}
        </ul>

        {/* Actions */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <Link
            href="/studies/upload-material"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tMaterial("downloadMaterial")}
          </Link>
            {!isAuthenticated()  ? <Link
                href="/login"
                className="underline underline-offset-4 hover:underline-offset-2"
                >
            {tMaterial("loginToAccess")}
                </Link> : null  }
        </div>
      </div>
    </PageWrapper>
  );
}
export default withAuth(MaterialDetails)