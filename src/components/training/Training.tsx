"use client";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { Link } from "@/i18n/routing";

export default function Training() {
  const tBreadcrumb = useTranslations("common");
  const tTraining = useTranslations("training");
  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <section className="w-full">
        <div className="flex justify-between">
          <h1 className="text-lg mb-4 font-bold">
            {tBreadcrumb("links.training")}
          </h1>
          <Link
            href="/training/courses/types"
            className="font-semibold underline underline-offset-8 hover:underline-offset-4"
          >
            {tTraining("coursesTypes.link")}
          </Link>
        </div>
        <article className="w-full h-[520px]">
          {/* // TODO: PLEASE ADD THE 'EN' TRANSLATION */}
          <div className="bg-cyan-500 flex items-center justify-end w-full h-full p-6">
            <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}
