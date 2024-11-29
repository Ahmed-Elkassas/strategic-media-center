"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import PageWrapper from "../PageWrapper";
import {forumsColumns, forumsData} from "@/config/tables/forumsConfig";
import ReusableTable from "../shared/Table";
import {withAuth} from "@/components/withAuth";


 function Forums() {
    const tCommon = useTranslations("common");

    return (
        <PageWrapper
            sidebarContent={<h1>ConsultingPage</h1>}
            sidebarTitle={undefined}
        >
            <section className="w-full">
                <div className="flex gap-2 items-center justify-between">
                    <h1 className="text-lg mb-4 font-bold">
                        {tCommon("breadcrumb.forums.title")}
                    </h1>
                    <Link href={"/forums"}   className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2">المشاركة</Link>
                </div>
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
                    <div className="bg-orange-400 flex items-end justify-center h-full p-2 py-6 ">
                        <div className="bg-orange-700 p-2 text-center">
                            <p className="text-white text-xl font-medium underline underline-offset-8">
                                تواصل بحرص، وشارك بحماس، وناقش بموضوعية،تأمل بعمق، وتفاعل بحرارة، لعالجة
                            </p>
                            <p className="text-white text-xl font-medium underline underline-offset-8 leading-relaxed">
                                الخلل، ومواجهة التحديات، نحو أداء إعلمي واتصالي قادر على التأثير والتغيير.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="my-8">
                    <p>ھـذه الـمنتدیـات مـفتوحـة لـلمشاركـة الحـرة بـالـمعلومـة والـرأي الـموضـوعـي والـنقد الـعلمي والاقـتراح المحـدد، حـول الـقضایـا الـرئیسـیة
                        الخاصة بتخطیط وإدارة العمل الإعلامي على أسس استراتیجیة، وما یتعلق بھا من إشكالات وظواھر وتحدیات.
                        والـمشاركـة فـي الـمنتدیـات مـفتوحـة لـلأعـضاء المشـتركـین فـي الـمركـز فـقط، وھـي تـعّبر عـن آراء أصـحابـھا ولا تـعّبر بـالـضرورة عـن
                        رأي المركز.</p>
                </article>
                <ReusableTable dataSource={forumsData} columns={forumsColumns} />
            </section>
        </PageWrapper>
    );
}

export default withAuth(Forums)