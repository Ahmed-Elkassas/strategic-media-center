"use client";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { HighlightSection } from "../shared/HighlightSection";
import {withAuth} from "@/components/withAuth";

 function Training() {
  const tBreadcrumb = useTranslations("common");
  const tTraining = useTranslations("training");
  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <HighlightSection
        title={tBreadcrumb("links.training")}
        linkHref="/training/courses/types"
        linkText={tTraining("coursesTypes.link")}
        content={
          <>
            <span className="text-lg font-semibold underline underline-offset-4">
              اختصر الطريق،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              واقطع مسافة
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              الألف ميل بخطوة
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              واحدة، نحو
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              العارف والهارات
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              التي تحتاجها،
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              للتميز والنافسة
            </span>
            <span className="text-lg font-semibold underline underline-offset-4">
              والوصول.
            </span>
          </>
        }
      />
    </PageWrapper>
  );
}

export default  withAuth(Training)