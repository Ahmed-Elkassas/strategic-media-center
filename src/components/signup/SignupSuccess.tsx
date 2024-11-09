"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import SuccessMessage from "../shared/SuccessMessage";

export default function SignupSuccess() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tMessage = useTranslations("auth.signup");

  const message = (
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
              href="/signup"
              className="hover:!bg-transparent hover:underline"
            >
              {tBreadcrumb("signup.title")}
            </Link>
          )
        },
        {
          title: tBreadcrumb("signup.signupSuccess")
        }
      ]}
      message={message}
    >
      <div className="flex justify-center gap-6 mt-8 mb-4">
        <Link
          href="/login"
          className="underline underline-offset-4 text-blue-600 hover:underline-offset-2 hover:text-blue-900"
        >
          {tMessage("success.login")}
        </Link>
        <Link
          href="/service-subscription"
          className="underline underline-offset-4 text-blue-600 hover:underline-offset-2 hover:text-blue-900"
        >
          {tMessage("success.subscribe")}
        </Link>
      </div>
    </SuccessMessage>
  );
}
