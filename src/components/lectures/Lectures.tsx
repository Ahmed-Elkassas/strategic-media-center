"use client";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { HighlightSection } from "../shared/HighlightSection";
import {withAuth} from "@/components/withAuth";

function Lectures() {
  const tBreadcrumb = useTranslations("common");
  const tLectures = useTranslations("lectures");
  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <HighlightSection
        title={tBreadcrumb("links.lectures")}
        linkHref="/lectures/types"
        linkText={tLectures("lectureTyps.link")}
        content={
          <>
            <span className="text-lg font-semibold underline underline-offset-4">
              نحو
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              فهم أعمق
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              لحتياجات
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              العلم
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              والإتصال،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              وأدوار كل
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              منهما،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              وظواهره،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              ونتائجه،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              وآثاره،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              لتصحيح
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              السار، وتحقيق
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              الغايات.
            </span>
          </>
        }
      />
    </PageWrapper>
  );
}

export default withAuth(Lectures);