"use client";
import {Form, Input, Select, Button, Space, Checkbox, message} from "antd";
import ReCAPTCHA from "react-google-recaptcha";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { useState } from "react";
import { SubscriptionFormValues } from "@/types/form";
import {Link, useRouter} from "@/i18n/routing";
import { getCountryOptions } from "@/lib/helpers";
import { COUNTRY_CODES, COUNTRY_OPTIONS } from "@/constants/formOptions";
import {useCreateSubscription} from "@/hooks/useCreateSubscription";

const { Option } = Select;

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function SubscriptionForm() {
  const t = useTranslations("auth");
  const router = useRouter();

  const {mutate: subscriptionMutate, isPending} = useCreateSubscription()

  const [isOrganization, setIsOrganization] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleSubscriptionTypeChange = (value: string) => {
    setIsOrganization(value === "organization");
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const countryList = getCountryOptions(COUNTRY_OPTIONS, t);
  const countryCodeList = getCountryOptions(COUNTRY_CODES, t);

  const onFinish = (values: SubscriptionFormValues) => {
    if (!recaptchaValue) {
      alert(t("validationMsg.recaptchaRequired"));
      return;
    }

    subscriptionMutate(values, {
      onSuccess: () => {
        router.push("/subscription-success");
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

    })
  };

  return (
    <PageWrapper
      sidebarContent={
        <ul className="mt-4">
          <li className="mb-2">أخبار المركز</li>
          <li className="mb-2">أخبار المركز</li>
        </ul>
      }
      sidebarTitle={undefined}
    >
      <div className="w-full md:w-3/4 mx-auto p-4 rounded-lg shadow-lg bg-slate-50">
        <Form
          layout="horizontal"
          variant="filled"
          onValuesChange={(changedValues) => {
            if (changedValues.type) {
              handleSubscriptionTypeChange(changedValues.type);
            }
          }}
          onFinish={onFinish}
        >
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
              name="secondName"
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

            <Form.Item
              label={t("subscriptionForm.name.lastName")}
              name="lastName"
              rules={[
                {
                  message: `${t("validationMsg.lastNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={t("subscriptionForm.name.placeholder")} />
            </Form.Item>
          </Space.Compact>

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
          {/* Mobile Number Field with Country Code */}
          <Form.Item label={t("subscriptionForm.mobileNumber.label")}>
            <Space.Compact size="middle" className="w-full">
              <Form.Item
                name="country_code"
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

          {/* Country of Residence */}
          <Form.Item
            label={t("subscriptionForm.country.label")}
            name="resident_country"
            rules={[
              { required: true, message: t("validationMsg.countryRequired") }
            ]}
          >
            <Select placeholder={t("subscriptionForm.country.placeholder")}>
              {countryList.map((country) => (
                <Select.Option key={country.value} value={country.value}>
                  {country.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <div className="flex gap-2">
            {/* Subscription Type */}
            <Form.Item
              label={t("subscriptionForm.subscriptionType.label")}
              name="type"
              rules={[
                {
                  required: true,
                  message: t("validationMsg.subscriptionTypeRequired")
                }
              ]}
              className="flex-1"
            >
              <Select
                placeholder={t("subscriptionForm.subscriptionType.placeholder")}
                onChange={handleSubscriptionTypeChange}
              >
                <Select.Option value="individual">
                  {t("subscriptionForm.subscriptionType.individual")}
                </Select.Option>
                <Select.Option value="organization">
                  {t("subscriptionForm.subscriptionType.organization")}
                </Select.Option>
              </Select>
            </Form.Item>
            {/* Organization Name (conditional) */}
            {isOrganization && (
              <Form.Item
                label={t("subscriptionForm.organizationName.label")}
                name="organization"
                rules={[
                  {
                    required: true,
                    message: `${t("validationMsg.organizationNameRequired")}`
                  }
                ]}
                className="flex-1"
              >
                <Input
                  placeholder={t(
                    "subscriptionForm.organizationName.placeholder"
                  )}
                />
              </Form.Item>
            )}
          </div>
          {/* Subscription Duration */}
          <Form.Item
            label={t("subscriptionForm.subscriptionDuration.label")}
            name="duration"
            rules={[
              {
                required: true,
                message: t("validationMsg.subscriptionDurationRequired")
              }
            ]}
          >
            <Select
              placeholder={t(
                "subscriptionForm.subscriptionDuration.placeholder"
              )}
            >
              <Select.Option value="1-year">
                {t("subscriptionForm.subscriptionDuration.1year")}
              </Select.Option>
              <Select.Option value="2-year">
                {t("subscriptionForm.subscriptionDuration.2years")}
              </Select.Option>
            </Select>
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

          {/* Nationality Field (Optional) */}
          <Form.Item
            label={t("subscriptionForm.nationality.label")}
            name="nationality"
          >
            <Select placeholder={t("subscriptionForm.nationality.placeholder")}>
              {countryList.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>



          {/* Preferred Contact Method Field */}
          <Form.Item
            label={t("subscriptionForm.preferredContactMethod.label")}
            name="contact_type"
            rules={[
              {
                required: true,
                message: `${t("validationMsg.preferredContactMethodRequired")}`
              }
            ]}
          >
            <Select
              placeholder={t(
                "subscriptionForm.preferredContactMethod.placeholder"
              )}
            >
              <Option value="email">
                {t("subscriptionForm.preferredContactMethod.email")}
              </Option>
              {/*<Option value="mobile">*/}
              {/*  {t("subscriptionForm.preferredContactMethod.mobile")}*/}
              {/*</Option>*/}
              {/*<Option value="whatsapp">*/}
              {/*  {t("subscriptionForm.preferredContactMethod.whatsapp")}*/}
              {/*</Option>*/}
            </Select>
          </Form.Item>

          {/* Agreement Checkboxes */}
          <Form.Item
            name="confirmData_accuracy"
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
            name="acceptTerms"
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
