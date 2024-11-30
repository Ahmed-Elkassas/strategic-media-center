"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {withAuth} from "@/components/withAuth";

 function CourseTypes() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tCourses = useTranslations("training.coursesTypes");

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
            title: tBreadcrumb("training.coursesTypes")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <section>
        <p className="my-4">{tCourses("heroParagraph")}</p>
        <p className="my-4">{tCourses("secondParagraph")}</p>
        <p>{tCourses("points.headTitle")}</p>
        <ol className=" list-decimal list-inside ms-4 mb-10 *:my-2">
          <li className="">
            {tCourses("points.firstPointRemoteCoursesTitle")}
          </li>
          <li className="">
            {tCourses("points.secondPointPrivacyCourses.title")}
          </li>
          <ul className="list-disc list-inside ms-8 *:my-1">
            <li>{tCourses("points.secondPointPrivacyCourses.first")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.second")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.third")}</li>
            <li>{tCourses("points.secondPointPrivacyCourses.fourth")}</li>
          </ul>
        </ol>
        <div className="flex gap-6 justify-center items-center">
          <Link
            href="/training/courses/online-course-subscription"
            className="underline underline-offset-4 hover:underline-offset-2"
          >
            {tCourses("subscribeToRemoteCourse")}
          </Link>
          {/*<Link*/}
          {/*  href="/training/courses/private-course-request"*/}
          {/*  className="underline underline-offset-4 hover:underline-offset-2"*/}
          {/*   >*/}
          {/*  {tCourses("subscribeToPrivateCourse")}*/}
          {/*</Link>*/}
        </div>
      </section>
    </PageWrapper>
  );
}

export default  withAuth(CourseTypes)
