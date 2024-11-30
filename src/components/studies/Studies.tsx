"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";

 function Studies() {
  const tStudies = useTranslations("studies");
  const tCommon = useTranslations("common");

   return (
    <PageWrapper
      sidebarContent={<h1>ConsultingPage</h1>}
      sidebarTitle={undefined}
    >
      <section className="w-full ">
        <div className="flex justify-between">
          <h1 className="text-lg mb-4 font-bold">{tCommon("links.studies")}</h1>
          <Link
            href="/studies/list"
            className="font-semibold underline underline-offset-8 hover:underline-offset-4"
          >
            {tCommon("breadcrumb.studies.studiesList")}
          </Link>
        </div>
        <article className=" h-[520px] bg-cyan-500">
          {/* <Image
          src="https://placehold.co/955x420"
          alt="placeholder"
          className="w-full h-auto"
          width="955"
          height="420"
          priority={false}
        /> */}

          {/* // TODO: PLEASE ADD THE 'EN' TRANSLATION */}
          <div className="w-4/5 mx-auto">
            <div className=" w-full  flex items-start justify-start h-full p-2 py-6 ">
              <div className="bg-cyan-800 p-2 text-center mt-10">
                <p className="text-white text-2xl underline underline-offset-8">
                  {tStudies("heroContent.line1")}
                </p>
                <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
                  {tStudies("heroContent.line2")}
                </p>{" "}
                <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
                  {tStudies("heroContent.line3")}
                </p>{" "}
                <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
                  {tStudies("heroContent.line4")}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}

export default withAuth(Studies)