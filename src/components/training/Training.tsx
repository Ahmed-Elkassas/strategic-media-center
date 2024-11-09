"use client";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";

export default function Training() {
  const tBreadcrumb = useTranslations("common");
  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <section className="w-full">
        <h1 className="text-lg mb-4 font-bold">
          {tBreadcrumb("links.training")}
        </h1>
        <article className="w-full h-[520px]">
          {/* // TODO: PLEASE ADD THE 'EN' TRANSLATION */}
          <div className="bg-cyan-500 flex items-end justify-center h-full p-2 py-6 ">
            <div className="bg-cyan-800 p-2 text-center">
              <p className="text-white text-2xl underline underline-offset-8">
                التدريب
              </p>
            </div>
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}
