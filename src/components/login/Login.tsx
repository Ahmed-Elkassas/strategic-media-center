"use client";

import { useTranslations } from "next-intl";
import { Button, Form, Input, message } from "antd";
import { Link, useRouter } from "@/i18n/routing";

import ReCAPTCHA from "react-google-recaptcha";

import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { LoginFormValues } from "@/types/form";
import {useLogin} from "@/hooks/useLogin";

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
  const tAuth = useTranslations("auth");
  const t = useTranslations("auth.login");

  const router = useRouter();

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const {mutate: login, isPending}  = useLogin()

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const onFinish = async (values: LoginFormValues) => {
    if (!recaptchaValue) {
      alert(tAuth("validationMsg.recaptchaRequired"));
      return;
    }

    login(values, {
      onSuccess: () => {
        message.success("مرحبا بعودتك!!");
        router.push("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, onError: (error: any) => {
        const serverMessage = error.response?.data?.response?.message;
        if (serverMessage) {
          message.error(serverMessage);
        } else {
          message.error("حدث خطأ");
        }
      }
    })

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
                rules={[{message: t("emailRequired"), required: true}]}
            >
              <Input type="email" placeholder="البريد الألكتروني"/>
            </Form.Item>
            <Form.Item
                name="password"
                label={t("passwordLabel")}
                rules={[{message: t("passwordRequired"), required: true}]}
            >
              <Input.Password placeholder="كلمة المرور"/>
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
            <div className="mt-3 flex gap-5 items-center justify-center mb-4">
              <Link
                  href="/forget-password"
                  className="font-medium text-sm text-gray-500  underline underline-offset-4 hover:underline-offset-2"
              >
                {tAuth("forgotPassword.title")}
              </Link>
              <Link
                  href="/reset-password"
                  className="font-medium text-sm text-gray-500  underline underline-offset-4 hover:underline-offset-2"
              >
                {tAuth("resetPassword.title")}
              </Link>
            </div>
            <Button htmlType="submit" type="primary" loading={isPending}>
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
