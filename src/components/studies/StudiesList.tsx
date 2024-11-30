"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "@/components/PageWrapper";
import ReusableTable from "@/components/shared/Table";
import { studiesColumns } from "@/config/tables/studiesConfig";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {withAuth} from "@/components/withAuth";
import {useState} from "react";
import {useGet} from "@/hooks/useGet";

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


 function StudiesList() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tStudies = useTranslations("studies");

     const [currentPage, setCurrentPage] = useState<number>(1);

     const { data, error, isPending } = useGet<Study[]>({
         endpoint: "/user/v1/studies",
         params: { page: currentPage },
     })

     const {  data: studiesData  = [], meta } = !error  && data?.response || {};

     // Assign default values
     const currentPageNumber = meta?.current_page ?? 1;
     const totalRecords = meta?.total ?? 0;

     const handlePageChange = (page: number) => {
         setCurrentPage(page);
     };


     return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      {/* Breadcrumb */}
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
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* Description */}
      <section className="mb-6">
        <p>{tStudies("studiesList.description")}</p>
      </section>

      {/* Reusable Table */}
      <ReusableTable dataSource={studiesData} columns={studiesColumns}   loading={isPending}
         pagination={{
             current: currentPageNumber,
             total: totalRecords,
             pageSize: 10,
             onChange: handlePageChange,
         }}/>

      {/* Actions */}
      {/*<div className="flex justify-center mt-6">*/}
      {/*  <Link*/}
      {/*    href="/studies/request-custom-study"*/}
      {/*    className="text-blue-600 underline underline-offset-4 hover:underline-offset-2"*/}
      {/*  >*/}
      {/*    {tStudies("studiesList.requestCustomStudy")}*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </PageWrapper>
  );
}

export default withAuth(StudiesList)