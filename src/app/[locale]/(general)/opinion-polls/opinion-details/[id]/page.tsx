"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "@/components/PageWrapper";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function OpinionDetailsPage() {
    // const router = useRouter();
    // const { id } = router.query; // Retrieve the dynamic ID
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tOpinionDetails = useTranslations("opinionPolls.opinionDetails");
    const tOpinion = useTranslations("opinionPolls");

    // Placeholder for dynamic data (replace with API fetch in real use case)
    const opinionDetails = {
        title: "أهمية التخطيط الاستراتيجي وإدارة المؤسسات الإعلامية",
        topic: "التخطيط الإعلامي",
        field: "إعلام",
        targetGroup: "الشباب المهتمين بالإعلام",
        geographicScope: "المملكة العربية السعودية",
        participants: 50,
        duration: {
            from: "01/01/2024",
            to: "01/02/2024",
        },
        relatedPolls: ["قياس رأي حول الإعلام الشبابي", "قياس رأي حول الإعلام الحديث"],
        relatedServices: ["تدريب إعلامي", "استشارات إعلامية"],
    };

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
                                {tBreadcrumb("opinionPolls.title")}
                            </Link>
                        ),
                    },

                    {
                        title: tBreadcrumb("opinionPolls.openOpinionPolls"),
                    },
                ]}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Page Content */}
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Opinion Details */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">{tOpinionDetails("title")}</h2>
                    <ul className="list-disc ps-6 space-y-2 text-gray-700 font-medium">
                        <li>
                            <strong>{tOpinionDetails("topic")}: </strong> {opinionDetails.topic}
                        </li>
                        <li>
                            <strong>{tOpinionDetails("field")}: </strong> {opinionDetails.field}
                        </li>
                        <li>
                            <strong>{tOpinionDetails("targetGroup")}: </strong>{" "}
                            {opinionDetails.targetGroup}
                        </li>
                        <li>
                            <strong>{tOpinionDetails("geographicScope")}: </strong>{" "}
                            {opinionDetails.geographicScope}
                        </li>
                        <li>
                            <strong>{tOpinionDetails("participants")}: </strong>{" "}
                            {opinionDetails.participants}
                        </li>
                        <li>
                            <strong>{tOpinionDetails("duration")}: </strong> {opinionDetails.duration.from} -{" "}
                            {opinionDetails.duration.to}
                        </li>
                    </ul>
                </div>

                {/* Related Polls */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">
                        {tOpinionDetails("relatedPolls")}
                    </h3>
                    <ul className="list-disc ps-6 space-y-2 text-gray-700">
                        {opinionDetails.relatedPolls.map((poll, index) => (
                            <li key={index}>{poll}</li>
                        ))}
                    </ul>
                </div>

                {/* Related Services */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">
                        {tOpinionDetails("relatedServices")}
                    </h3>
                    <ul className="list-disc ps-6 space-y-2 text-gray-700">
                        {opinionDetails.relatedServices.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <Link href="/opinion-polls/open-opinion-polls"
                      className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
                >
                    {tOpinion("measurementsOfOpinionConquest")}
                </Link>
                <Link href={"/opinion-polls"}
                      className="px-6 py-3 flex justify-end underline underline-offset-4 hover:underline-offset-2"
                >
                    {tOpinion("requestForMeasurementOfPrivateOpinion")}
                </Link>
            </div>
        </PageWrapper>
    );
}
