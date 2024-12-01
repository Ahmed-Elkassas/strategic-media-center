"use client";

import {Breadcrumb, Spin, Typography} from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {notFound} from "next/navigation";

const { Paragraph } = Typography;
interface News {
    id: number;
    field: string;
    date:  string;
    title: string;
    publication_date: string;
    summary: string;
    text: string;
    keywords: string;
    main_image: string;
    side_image: string;
    editor_name: string;
    editing_date: string;
    relatedNews: News[];
}
 function NewsDetails({ id }: { id: string }) {
  const tNews = useTranslations("news");
  const tNewsDetails = useTranslations("news.details");
     const { data, error, isPending } = useGet<News>({
         endpoint: `/user/v1/news/${id}`,
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
              <Link href="/news" className="hover:underline">
                {tNews("centerNews")}
              </Link>
            )
          },
          {
            title: item.title
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* News Title */}
      <div className="mb-4   mx-auto">
        <Paragraph className="text-gray-500">
          {tNewsDetails("newsAuthor")}: {item.editor_name} | {tNewsDetails("newsDate")}:
            {item.publication_date}
        </Paragraph>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-4">
        <Paragraph className="text-gray-700 leading-relaxed col-span-3">
            {item.text}
        </Paragraph>
        {/* News Image */}
        <div className="col-span-1">
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-2">
              <img src={item.main_image}/>
          </div>
          <Paragraph className="text-center text-gray-600">
              {item.summary}
          </Paragraph>
        </div>
      </div>
    </PageWrapper>
  );
}

export default withAuth(NewsDetails)