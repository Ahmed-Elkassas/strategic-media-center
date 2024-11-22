"use client";

import { Breadcrumb, Button } from "antd";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";

export default function CenterNews() {
  const tNews = useTranslations("news");

  const newsList = [
    { id: 1, title: "عنوان الخبر ١", link: "/news/details/1" },
    { id: 2, title: "عنوان الخبر ٢", link: "/news/details/2" },
    { id: 3, title: "عنوان الخبر ٣", link: "/news/details/3" },
    { id: 4, title: "عنوان الخبر ٤", link: "/news/details/4" },
    { id: 5, title: "عنوان الخبر ٥", link: "/news/details/5" },
    { id: 6, title: "عنوان الخبر ٦", link: "/news/details/6" },
    { id: 7, title: "عنوان الخبر ٧", link: "/news/details/7" },
    { id: 8, title: "عنوان الخبر ٨", link: "/news/details/8" }
  ];

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          {
            title: (
              <Link href="/" className="hover:!bg-transparent hover:underline">
                {tNews("home")}
              </Link>
            )
          },
          { title: tNews("centerNews") }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      {/* Page Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main News Section */}
        <div className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <div className="bg-gray-300 w-full h-64 rounded-lg mb-4"></div>
            <h2 className="text-xl font-bold">{tNews("mainNewsTitle")}</h2>
            <ul className="list-disc ps-6 mt-4 space-y-1 text-gray-700">
              <li>{tNews("newsSummaryPoint1")}</li>
              <li>{tNews("newsSummaryPoint2")}</li>
              <li>{tNews("newsSummaryPoint3")}</li>
              <li>{tNews("newsSummaryPoint4")}</li>
              <li>{tNews("newsSummaryPoint5")}</li>
              <li>{tNews("newsSummaryPoint6")}</li>
              <li>{tNews("newsSummaryPoint7")}</li>
            </ul>
            <Button type="link" className="mt-4 text-blue-500">
              {tNews("detailsButton")}
            </Button>
          </div>
        </div>

        {/* News List */}
        <div className="flex-1">
          <ul className="space-y-2">
            {newsList.map((news) => (
              <li key={news.id}>
                <Link
                  href={news.link}
                  className="block bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-sm text-gray-700 font-medium"
                >
                  {news.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
