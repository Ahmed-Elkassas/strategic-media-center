"use client";
import { Form, Input, Select, Button, Space, Checkbox, message } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { useState } from "react";
import { SignupFormValues } from "@/types/form";
import { getCountryOptions } from "@/lib/helpers";
import { COUNTRY_CODES } from "@/constants/formOptions";
import { Link, useRouter } from "@/i18n/routing";
import {useSignup} from "@/hooks/useSignup";

const { Option } = Select;

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function SignupForm() {
  const t = useTranslations("auth");
  const router = useRouter();
  const { mutate: signupMutate, isPending } = useSignup();
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const countryCodeList = getCountryOptions(COUNTRY_CODES, t);

  const onFinish = async (values: SignupFormValues) => {
    if (!recaptchaValue) {
      alert(t("validationMsg.recaptchaRequired"));
      return;
    }
    signupMutate(values,
        {
          onSuccess: () => {
            message.success("تمت عملية التسجيل بنجاح")
            router.push("/signup-success");
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: (error: any) => {
            if (error && error?.response) {
              const serverMessage = error?.response?.data?.response?.error;
              if (serverMessage) {
                message.error(serverMessage); // Display server error message
              } else {
                message.error("حدث خطأ ما أثناء التسجيل");
              }
            } else {
              message.error("حدث خطأ ما أثناء التسجيل");
            }
          },
        });
  };

  return (
    <PageWrapper
      sidebarContent={<h1>أخبار المركز</h1>}
      sidebarTitle={undefined}
    >
      <div className="w-full md:w-3/4 mx-auto p-4 rounded-lg shadow-lg bg-slate-50">
        <Form layout="horizontal" variant="filled" onFinish={onFinish}>
          {/* Name Fields */}
          <Space.Compact size="middle" className="w-full">
            <Form.Item
              label={t("subscriptionForm.name.firstName")}
              name="name"
              rules={[
                {
                  message: `${t("validationMsg.firstNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={t("subscriptionForm.name.placeholder")} />
            </Form.Item>

            <Form.Item
              label={t("subscriptionForm.name.secondName")}
              name="second_name"
              rules={[
                {
                  message: `${t("validationMsg.secondNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={t("subscriptionForm.name.placeholder")} />
            </Form.Item>
          </Space.Compact>
          {/* Mobile Number Field with Country Code */}
          <Form.Item label={t("subscriptionForm.mobileNumber.label")}>
            <Space.Compact size="middle" className="w-full">
              <Form.Item
                noStyle
                initialValue="+20"
                rules={[
                  {
                    required: true,
                    message: t("validationMsg.mobileNumberRequired")
                  }
                ]}
              >
                <Select style={{ width: "20%" }}>
                  {countryCodeList.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t("validationMsg.phoneNumberRequired")
                  }
                ]}
                noStyle
              >
                <Input
                  placeholder={t("subscriptionForm.mobileNumber.placeholder")}
                  style={{ width: "80%" }}
                />
              </Form.Item>
            </Space.Compact>
          </Form.Item>

          {/* Job Role */}
          <Form.Item
            label={t("subscriptionForm.jobType.jobRole")}
            required={false}
            name="job"
          >
            <Select placeholder={t("subscriptionForm.jobType.selectJobRole")}>
              <Option value="engineering">
                {t("subscriptionForm.jobType.jobs")}
              </Option>
              <Option value="none">{t("subscriptionForm.jobType.none")}</Option>
              <Option value="other">
                {t("subscriptionForm.jobType.other")}
              </Option>
            </Select>
          </Form.Item>
          {/* // TODO: Mobile Number Field with Country Code */}

          {/* Email Field */}
          <Form.Item
            label={t("subscriptionForm.email.label")}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: `${t("validationMsg.emailRequired")}`
              }
            ]}
          >
            <Input placeholder={t("subscriptionForm.email.placeholder")} />
          </Form.Item>
          {/* Password Field */}
          <Form.Item
            label={t("subscriptionForm.password.label")}
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: `${t("validationMsg.passwordRequired")}`
              }
            ]}
          >
            <Input.Password
              placeholder={t("subscriptionForm.password.placeholder")}
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label={t("subscriptionForm.confirmPassword.label")}
            name="password_confirmation"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: `${t("validationMsg.confirmPasswordRequired")}`
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(t("validationMsg.passwordsMustMatch"))
                  );
                }
              })
            ]}
          >
            <Input.Password
              placeholder={t("subscriptionForm.confirmPassword.placeholder")}
            />
          </Form.Item>
          {/* Agreement Checkboxes */}
          <Form.Item
            name="confirm_data_accuracy"
            valuePropName="checked"
            required={true}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(t("validationMsg.confirmDataRequired"))
                      )
              }
            ]}
          >
            <Checkbox>
              {t("subscriptionForm.agreements.confirmDataAccuracy")}
            </Checkbox>
          </Form.Item>

          <Form.Item
            name="accept_terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(t("validationMsg.acceptTermsRequired"))
                      )
              }
            ]}
          >
            <Checkbox>
              {t("subscriptionForm.agreements.read")}
              <Link
                href="/subscription-agreement"
                target="_blank"
                className="underline underline-offset-4"
              >
                {t("subscriptionForm.agreements.subscriptionTerms")}
              </Link>
              {t("subscriptionForm.agreements.acceptTerms")}
              &nbsp;
            </Checkbox>
          </Form.Item>

          <Form.Item name="notify_events" valuePropName="checked">
            <Checkbox>{t("subscriptionForm.agreements.notifyEvents")}</Checkbox>
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

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              {t("subscriptionForm.submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageWrapper>
  );
}
