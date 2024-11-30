"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {Button, Spin} from "antd";
import {useState} from "react";


interface Consultation {
  id: number;
  name: string;
  scope_of_work: string;
  goal: string;
  summary: string;
  duration: string
}

 function Consulting() {
  const tConsulting = useTranslations("consulting");
  const tCommon = useTranslations("common");
  const [currentPage, setCurrentPage] = useState<number>(1);

    const { data, error , status: dataStatus, isPending } = useGet<Consultation[]>({
      endpoint: "/user/v1/consultations",
      params: { page: currentPage },
    })

   const {  data: consultations, meta } = !error  && data?.response || {};

   // Assign default values
   const currentPageNumber = meta?.current_page ?? 1;
   const totalPages = meta?.pages ?? 1;

   const handlePageChange = (page: number) => {
     setCurrentPage(page);
   };

  return (
    <PageWrapper
      sidebarContent={<h1>ConsultingPage</h1>}
      sidebarTitle={undefined}
    >
      <section className="w-full">
        <h1 className="text-lg mb-4 font-bold">
          {tCommon("links.consulting")}
        </h1>
        <article className="w-full h-[520px]">
          {/* <Image
          src="https://placehold.co/955x420"
          alt="placeholder"
          className="w-full h-auto"
          width="955"
          height="420"
          priority={false}
        /> */}

          {/* // TODO: PLEASE ADD THE 'EN' TRANSLATION */}
          <div className="bg-cyan-500 flex items-end justify-center h-full p-2 py-6 ">
            <div className="bg-cyan-800 p-2 text-center">
              <p className="text-white text-2xl underline underline-offset-8">
                {tConsulting("heroText.main")}
              </p>
              <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
                {tConsulting("heroText.sub")}
              </p>
            </div>
          </div>
        </article>
        <article>
          <h3 className="mt-4">{tConsulting("servicesTitle")}</h3>
          <h4 className="mt-4 mb-3">{tConsulting("linksTitle")}</h4>
          {/* Loading Spinner */}
          {dataStatus === "pending" && (
              <div className="flex justify-center my-4">
                <Spin size="large" />
              </div>
          )}

          {/* Error Message */}
          {error && (
              <div className="flex justify-center my-4">
                <p> حدث خطأ </p>
              </div>
          )}

          {/* Consultations List */}
          {!isPending && !error && consultations && (
              <>
                <ul className="list-disc list-inside space-y-2">
                  {consultations.map((item: Consultation) => (
                      <li key={item.id}>
                        <Link href={`/consulting/${item.id}`}>
                              <span className="text-blue-600 underline underline-offset-4 hover:underline-offset-2">
                                {item.name}
                              </span>
                        </Link>
                      </li>
                  ))}
                </ul>


                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                  <Button
                      disabled={currentPageNumber === 1}
                      type="default"
                      onClick={() => handlePageChange(currentPageNumber - 1)}
                  >
                    السابق
                  </Button>
                  <span className="mx-2" dir={"rtl"}>
                  {"صفحة"} {currentPageNumber} {"من"} {totalPages}
                </span>
                  <Button
                      disabled={currentPageNumber === totalPages}
                      type="default"
                      onClick={() => handlePageChange(currentPageNumber + 1)}
                  >
                    التالي
                  </Button>
                </div>
              </>
          )}

          {/* No Consultations Available */}
          {!isPending  && !error && (!consultations || consultations.length === 0) && (
              <p>لا يوجد استشارات</p>
          )}


          <Link
            href="/consulting/consulting-request"
            className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
          >
            طلب إستشارة
          </Link>
        </article>
      </section>
    </PageWrapper>
  );
}

export default withAuth(Consulting)