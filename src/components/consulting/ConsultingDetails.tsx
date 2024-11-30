"use client";

import { notFound } from "next/navigation";
import {Breadcrumb, Spin} from "antd";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";


interface Consultation {
    id: number;
    name: string;
    scope_of_work: string;
    goal: string;
    summary: string;
    duration: string;
    related_consultation?: {
        id: number;
        name: string;
        scope_of_work: string;
        goal: string;
        summary: string;
        duration: string;
    }[];
    events?: string[];
}

interface related_consultation {
    id: number;
    name: string;
    scope_of_work: string;
    goal: string;
    summary: string;
    duration: string;
}

 function ConsultingDetails({ id }: { id: string }) {

  const t = useTranslations("common.breadcrumb.consulting");

     const { data, error, isPending } = useGet<Consultation>({
         endpoint: `/user/v1/consultations/${id}`,
     });

     // Handle loading state
     if (isPending) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <Spin size="large" tip="جاري التحميل..." />
                 </div>
             </PageWrapper>
         );
     }

     // Handle error state
     if (error) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <p>خطأ: {error.message}</p>
                 </div>
             </PageWrapper>
         );
     }


     // Check if data exists
     if (!data || !data.response || !data.response.data) {
         notFound();
     }

     const item = data.response.data;

  return (
    <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/consulting"
                className="hover:!bg-transparent hover:underline"
              >
                {t("title")}
              </Link>
            )
          },
          {
            title: t("consultingDetails")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <div className="mt-3 mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Consultation Title */}
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          {item.name}
        </h1>

        {/* Consultation Field */}
        <p className="text-lg text-gray-700 mb-4">
          <strong className="font-semibold text-gray-900">
            مجال عمل الاستشارة:
          </strong>{" "}
          {item.scope_of_work}
        </p>

          {item.goal ? (
              <p className="text-lg text-gray-700 mb-4">
                  <strong className="font-semibold text-gray-900">
                      الهدف العام من الاستشارة:
                  </strong>{" "}
                  {item.goal}
              </p>
          ) : null}

        {/* Consultation Summary */}
        <p className="text-lg text-gray-700 mb-6">
          <strong className="font-semibold text-gray-900">
            ملخص الاستشارة:
          </strong>{" "}
          {item.summary}
        </p>

          {item?.related_consultation &&
              item?.related_consultation?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            استشارات ذات صلة:
          </h2>

            <div className=" p-4 rounded-md  mb-4">
              <ul className="list-disc list-inside mb-2 text-gray-700">
                  {item?.related_consultation?.map((related: related_consultation) => (
                          <li key={related.id}  className="pl-2 hover:text-cyan-700">
                              <Link href={`/consulting/${related.id}`}>
                                  <span className="text-blue-600 underline underline-offset-4 hover:underline-offset-2">
                                    {related.name}
                                  </span>
                              </Link>
                          </li>
                  ))}
              </ul>
            </div>
        </div>
         )}
        {/* Other Related Services */}
        {item.events && item.events.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            خدمات أخرى ذات صلة:
          </h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            {item.events.map((otherService, index) => (
              <li key={index} className="p-2 hover:text-gray-800">
                {otherService}
              </li>
            ))}
          </ul>
        </div> )}
      </div>
      <Link
        href="/consulting/consulting-request"
        className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
      >
        طلب إستشارة
      </Link>
    </PageWrapper>
  );
}

export default  withAuth(ConsultingDetails)