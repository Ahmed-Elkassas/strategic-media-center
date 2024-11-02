"use client";

import { useTranslations } from "next-intl";
import { Button, Form, Input } from "antd";
import { Link } from "@/i18n/routing";

import ReCAPTCHA from "react-google-recaptcha";

import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { LoginFormValues } from "@/types/form";

const keys = [
  "plan",
  "define",
  "enhance",
  "Understand",
  "influence",
  "develop",
  "strategicDirection"
];

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function Login() {
  const t = useTranslations("auth.login");

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const onFinish = (values: LoginFormValues) => {
    if (!recaptchaValue) {
      alert(t("validationMsg.recaptchaRequired"));
      return;
    }

    console.log("Form values:", values);
    // Submit form data here
  };

  const sidebarTitle = <h2>{t("sidebarTitle")}</h2>;
  const sidebarContent = (
    <ul>
      {keys.map((key) => (
        <li key={key} className="px-1 mb-3">
          <span className="inline">- </span>
          <span className="inline text-base ">
            {t(`sidebarContent.${key}.main`)}
          </span>
          <span className="block text-base ">
            {t(`sidebarContent.${key}.sub`)}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    // TODO: DON'T FORGET TO ADD THE BACKGROUND IMAGE
    <PageWrapper sidebarTitle={sidebarTitle} sidebarContent={sidebarContent}>
      <div className="h-full flex items-end justify-start">
        <div className="">
          <Form
            className="bg-slate-100 shadow-lg p-3 rounded-md"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              label={t("emailLabel")}
              rules={[{ message: t("emailRequired"), required: true }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="password"
              label={t("passwordLabel")}
              rules={[{ message: t("passwordRequired"), required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            {/* reCAPTCHA */}
            <Form.Item>
              {recaptchaSiteKey ? (
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={handleRecaptchaChange}
                />
              ) : (
                <p>Error: reCAPTCHA site key is missing</p>
              )}
            </Form.Item>
            <Button htmlType="submit" type="primary">
              {t("submit")}
            </Button>
          </Form>
          <div className="mt-3 flex gap-5 items-center justify-center">
            <Link
              href="/service-subscription"
              className="font-medium underline underline-offset-4 hover:underline-offset-2"
            >
              {t("newSubscriber")}
            </Link>
            <Link
              href="/signup"
              className="font-medium underline underline-offset-4 hover:underline-offset-2"
            >
              {t("newUser")}
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
