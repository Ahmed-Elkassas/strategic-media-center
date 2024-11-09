"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import SuccessMessage from "../shared/SuccessMessage";

export default function SubscriptionSuccess() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tMessage = useTranslations("auth.subscriptionForm");

  const message = (
    <p className="text-white text-center text-base">
      {tMessage("success.message")}
    </p>
  );

  const additionalMessage = (
    <div className="flex justify-center gap-2">
      <p className="text-white">{tMessage("success.messageWithAction")}</p>
      <Link
        href="/subscription-agreement"
        className="underline underline-offset-4 text-blue-600 hover:underline-offset-2 hover:text-blue-900"
      >
        {tMessage("success.subscriptionAgreementAction")}
      </Link>
    </div>
  );

  return (
    <SuccessMessage
      breadcrumbItems={[
        {
          title: (
            <Link
              href="/service-subscription"
              className="hover:!bg-transparent hover:underline"
            >
              {tBreadcrumb("subscribe.title")}
            </Link>
          )
        },
        {
          title: tBreadcrumb("subscribe.subscribeSuccess")
        }
      ]}
      message={message}
      additionalMessage={additionalMessage}
    >
      <div className="flex justify-center gap-6 mt-8 mb-4">
        <Link
          href="/login"
          className="underline underline-offset-4 text-blue-600 hover:underline-offset-2 hover:text-blue-900"
        >
          {tMessage("success.login")}
        </Link>
        <Link
          href="/signup"
          className="underline underline-offset-4 text-blue-600 hover:underline-offset-2 hover:text-blue-900"
        >
          {tMessage("success.register")}
        </Link>
      </div>
    </SuccessMessage>
  );
}
