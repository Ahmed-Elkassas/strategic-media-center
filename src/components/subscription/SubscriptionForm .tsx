"use client";
import { Form, Input, Select, Button, Space } from "antd";

import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import { useState } from "react";

const { Option } = Select;

export default function SubscriptionForm() {
  const t = useTranslations("auth");
  const [isOrganization, setIsOrganization] = useState(false);

  const handleSubscriptionTypeChange = (value: string) => {
    setIsOrganization(value === "organization");
  };

  return (
    <PageWrapper
      sidebarContent={<h1>subscription</h1>}
      sidebarTitle={undefined}
    >
      <div className="w-full md:w-3/4 mx-auto p-4 rounded-lg shadow-lg bg-slate-50">
        <Form
          layout="horizontal"
          variant="filled"
          onValuesChange={(changedValues) => {
            if (changedValues.subscriptionType) {
              handleSubscriptionTypeChange(changedValues.subscriptionType);
            }
          }}
          onFinish={(values) => console.log("values", values)}
        >
          {/* Name Fields */}
          <Space.Compact size="middle" className="w-full">
            <Form.Item
              label={t("subscriptionForm.name.firstName")}
              name="firstName"
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

          <div className="flex gap-2">
            {/* Subscription Type */}
            <Form.Item
              label={t("subscriptionForm.subscriptionType.label")}
              name="subscriptionType"
              rules={[{ required: true }]}
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
                name="organizationName"
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
            name="subscriptionDuration"
            rules={[{ required: true }]}
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
          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {t("subscriptionForm.submit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageWrapper>
  );
}
