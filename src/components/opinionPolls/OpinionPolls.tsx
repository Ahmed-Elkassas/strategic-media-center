"use client";
import {useTranslations} from "next-intl";
import PageWrapper from "../PageWrapper";
import {HighlightSection} from "@/components/shared/HighlightSection";

export default function OpinionPolls() {
    const tBreadcrumb = useTranslations("common");
    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            <HighlightSection
                title={tBreadcrumb("breadcrumb.opinionPolls.title")}
                linkHref="/opinion-polls/types"
                linkText={tBreadcrumb("breadcrumb.opinionPolls.opinionPollsTypes")}
                backgroundColor={"bg-orange-300"}
                content={
                    <>
            <span className="text-lg font-semibold underline underline-offset-4">
              لكي يكون
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
         رأيك مسموعا،
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
وموقفك واضحا،

            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
وتساهم في
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
معرفة الحقيقة
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
وتصحيح
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
              للتميز والنافسة
            </span>
                        <span className="text-lg font-semibold underline underline-offset-4">
المسار.            </span>
                    </>
                }
            />

        </PageWrapper>
    );
}
