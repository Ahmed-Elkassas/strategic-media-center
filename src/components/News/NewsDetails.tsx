"use client";

import { Breadcrumb, Typography } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";

const { Paragraph } = Typography;

 function NewsDetails() {
  const tNews = useTranslations("news");
  const tNewsDetails = useTranslations("news.details");

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
            title: tNewsDetails("newsTitle")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* News Title */}
      <div className="mb-4   mx-auto">
        <Paragraph className="text-gray-500">
          {tNewsDetails("newsAuthor")}: محمد علي | {tNewsDetails("newsDate")}:
          01/01/2024
        </Paragraph>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-4">
        <Paragraph className="text-gray-700 leading-relaxed col-span-3">
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")} {tNewsDetails("newsContent")}{" "}
          {tNewsDetails("newsContent")}{" "}
        </Paragraph>
        {/* News Image */}
        <div className="col-span-1">
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-2"></div>
          <Paragraph className="text-center text-gray-600">
            {tNewsDetails("imageCaption")}
          </Paragraph>
        </div>
      </div>
    </PageWrapper>
  );
}

export default withAuth(NewsDetails)