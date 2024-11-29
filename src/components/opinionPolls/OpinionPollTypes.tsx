"use client";
import {useTranslations} from "next-intl";
import PageWrapper from "../PageWrapper";
import {Link} from "@/i18n/routing";
import {Breadcrumb} from "antd";
import {withAuth} from "@/components/withAuth";

 function OpinionPollTypes() {
    const tBreadcrumb = useTranslations("common");
    const tOpinionPolls = useTranslations("opinionPolls");
    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link
                                href="/opinion-polls"
                                className="hover:!bg-transparent hover:underline"
                            >
                                {tBreadcrumb("breadcrumb.opinionPolls.title")}
                            </Link>
                        ),
                    },
                    {
                        title: tBreadcrumb("breadcrumb.opinionPolls.opinionPollsTypes"),
                    },
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            <article>
                <p className="mt-8 text-base font-normal">أحـد الأعـمال الـحیویـة الـتي یـقوم بـھا الـمركـز قـیاس رأي الجـمھور حـول الـعمل الإعـلامـي ومـؤسـساتـھ، ومـحتواه، وظـواھـره،
                    وإنـجازاتـھ وإخـفاقـاتـھ، ومـدى قـدرتـھ عـلى الـوصـول إلـى الجـمھور والـتأثـیر فـیھ؛ وذلـك مـن أجـل الـوقـوف عـلى رأي الجـمھور ونـظرتـھ
                    لھـذه الـمؤسـسات والـمحتوى الـصادر عـنھا، بـاعـتباره نـقطة الارتـكاز الـثانـیة فـي الـعملیة الاتـصالـیة. وھـذا بـدوره یـساعـد الـمؤسـسات
                    الإعـلامـیة عـلى مـعرفـة مـوقـعھا فـي المشھـد الإعـلامـي، ومـدى نـجاحـھا فـي الـوصـول إلـى الجـمھور والـتأثـیر فـیھ، ومـدى نـجاحـھا فـي
                    تحقیق مقاصدھا وأھدافھا.
                </p>

                <h4 className="mt-6 mb-2 text-base font-medium">ویقدم المركز نوعین من قیاسات الرأي على النحو التالي:
                </h4>
                <ol className="list-decimal list-inside ms-6 *:mb-2">
                    <li> (قـیاسـات رأي مـفتوحـة) یـقوم بـھا الـمركـز انـطلاقا من رسالته وأهدافه. ونتائج هذه القياس متاحة كاملة للمشتركين في المركز، ومتاحة جزئيا لغير المشتركين. </li>
                    <li>(قـیاسـات خـاصـة) تـطلبھا الـجھات المسـتفیدة، بـما یخـدم احـتیاجـاتـھا الـتأسـیسیة والـتطویـریـة، ونـتائـجھا لیسـت للنشـر إلا بـموافـقة
                        الجھة المستفیدة.
                    </li>
                </ol>
                <p className="my-4">ویقوم بإعداد ورصد وتحلیل قیاسات الرأي فریق من الخبراء المختصین في المركز</p>
            </article>
            {/* Actions */}
            <div className="flex gap-2 justify-center items-center">
                <Link href="/opinion-polls/open-opinion-polls"            className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
                >
                    {tOpinionPolls("measurementsOfOpinionConquest")}
                </Link>
                <Link href={"/opinion-polls"}             className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
                >
                    {tOpinionPolls("requestForMeasurementOfPrivateOpinion")}
                </Link>
            </div>
        </PageWrapper>
    );
}

export default withAuth(OpinionPollTypes)