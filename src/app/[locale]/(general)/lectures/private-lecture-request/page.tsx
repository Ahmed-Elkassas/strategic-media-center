"use client"

import PrivateTypeSubscription from "@/components/shared/PrivateTypeSubscription";
import {useTranslations} from "next-intl";
import {withAuth} from "@/components/withAuth";

 function PrivateLectureRequestPage() {

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

  return <PrivateTypeSubscription breadcrumbItems={breadcrumbItems}  event_id={15}/>;
}

export default withAuth(PrivateLectureRequestPage)