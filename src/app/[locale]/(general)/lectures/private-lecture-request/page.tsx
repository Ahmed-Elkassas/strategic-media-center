import PrivateTypeSubscription from "@/components/shared/PrivateTypeSubscription";
import {useTranslations} from "next-intl";

export default function PrivateLectureRequestPage() {

  const tBreadcrumb = useTranslations("common.breadcrumb");

  const breadcrumbItems = [
    {
      title: tBreadcrumb("lectures.title"),
      href: "/lectures",
    },
    {
      title: tBreadcrumb("lectures.subscribeToPrivateLecture"),
    },
  ];


  return <PrivateTypeSubscription breadcrumbItems={breadcrumbItems} />;
}
