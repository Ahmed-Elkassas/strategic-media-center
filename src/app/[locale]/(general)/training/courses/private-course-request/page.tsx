import PrivateTypeSubscription from "@/components/shared/PrivateTypeSubscription";
import {useTranslations} from "next-intl";


export default function PrivateCourseRequestPage() {

  const tBreadcrumb = useTranslations("common.breadcrumb");

  const breadcrumbItems = [
    {
      title: tBreadcrumb("training.title"),
      href: "/training",
    },
    {
      title: tBreadcrumb("training.subscribeToPrivateCourse"),
    },
  ];


  return <PrivateTypeSubscription breadcrumbItems={breadcrumbItems}  event_id={14} />;
}
