"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LectureTypes() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tLecture = useTranslations("lectures.lectureTyps");

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
            title: tBreadcrumb("lectures.lectureTyps")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <section>
        <p className="my-4">{tLecture("heroParagraph")}</p>
        <p>{tLecture("points.headTitle")}</p>
        <ol className=" list-decimal list-inside ms-4 mb-10 *:my-2">
          <li className="">
            {tLecture("points.firstPointRemoteCoursesTitle")}
          </li>
          <li className="">
            {tLecture("points.secondPointPrivacyCourses.title")}
          </li>
          <ul className="list-disc list-inside ms-8 *:my-1">
            <li>{tLecture("points.secondPointPrivacyCourses.first")}</li>
            <li>{tLecture("points.secondPointPrivacyCourses.second")}</li>
            <li>{tLecture("points.secondPointPrivacyCourses.third")}</li>
            <li>{tLecture("points.secondPointPrivacyCourses.fourth")}</li>
          </ul>
        </ol>
        <div className="flex gap-6 justify-center items-center">
          <Link
            href="/lectures/online-lecture-subscription"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tLecture("subscribeToRemoteCourse")}
          </Link>
          <Link
            href="/lectures/private-lecture-request"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tLecture("subscribeToPrivateCourse")}
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
