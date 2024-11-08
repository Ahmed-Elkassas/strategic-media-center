"use client";

import {
  Breadcrumb,
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Space
} from "antd";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import PageWrapper from "../PageWrapper";
import { getCountryOptions } from "@/lib/helpers";
import { COUNTRY_OPTIONS } from "@/constants/formOptions";
import {
  budgetOptions,
  employeeOptions,
  institutionChallenges,
  jobPositionOptions,
  officeOptions,
  ownershipTypeOptions,
  wayTypeOptions
} from "@/constants/consultingOptions";
import { ConsultingRequestFormValues } from "@/types/form";

export default function ConsultingRequest() {
  const tBreadcrumb = useTranslations("common.breadcrumb.consulting");
  const tConsulting = useTranslations("consulting");
  const tConsultingForm = useTranslations("consulting.form");
  const tAuth = useTranslations("auth");

  const [form] = Form.useForm();
  const router = useRouter(); // Use the router hook for navigation

  const countryList = getCountryOptions(COUNTRY_OPTIONS, tAuth);

  const onFinish = (values: ConsultingRequestFormValues) => {
    console.log("Form Submitted:", values);
    router.push("/consulting/consulting-received");
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/consulting"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("title")}
              </Link>
            )
          },

          {
            title: tBreadcrumb("consultingRequest")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <div className="mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
        {/* Highlight Banner */}
        <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 px-4 py-2 mb-6 rounded-md shadow">
          <p className="text-center font-semibold">
            {tConsulting("confidentialityStatement")}
          </p>
        </div>

        <Form layout="horizontal" onFinish={onFinish}>
          {/* Name Fields */}
          <Space.Compact size="middle" className="w-full">
            <Form.Item
              label={tAuth("subscriptionForm.name.firstName")}
              name="firstName"
              rules={[
                {
                  message: `${tAuth("validationMsg.firstNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={tAuth("subscriptionForm.name.placeholder")} />
            </Form.Item>

            <Form.Item
              label={tAuth("subscriptionForm.name.secondName")}
              name="secondName"
              rules={[
                {
                  message: `${tAuth("validationMsg.secondNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={tAuth("subscriptionForm.name.placeholder")} />
            </Form.Item>

            <Form.Item
              label={tAuth("subscriptionForm.name.lastName")}
              name="lastName"
              rules={[
                {
                  message: `${tAuth("validationMsg.lastNameRequired")}`,
                  required: true
                }
              ]}
              className="flex-1"
            >
              <Input placeholder={tAuth("subscriptionForm.name.placeholder")} />
            </Form.Item>
          </Space.Compact>
          <Form.Item
            name="jobPosition"
            label="الموقع الوظيفي"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر الموقع الوظيفي">
              {jobPositionOptions.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* Email Field */}
          <Form.Item
            label={tAuth("subscriptionForm.email.label")}
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: `${tAuth("validationMsg.emailRequired")}`
              }
            ]}
          >
            <Input placeholder={tAuth("subscriptionForm.email.placeholder")} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="رقم الموبايل"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Input placeholder="أدخل رقم الموبايل" />
          </Form.Item>
          {/* Organization Details Section */}
          <h2 className="text-lg font-semibold mt-6 mb-4">تفاصيل المؤسسة</h2>
          <div className="flex gap-4">
            <Form.Item
              name="organizationName"
              label="اسم المؤسسة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Input placeholder="أدخل اسم المؤسسة" />
            </Form.Item>

            <Form.Item
              name="establishmentDate"
              label="تاريخ التأسيس"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <DatePicker placeholder="اختر تاريخ التأسيس" className="w-full" />
            </Form.Item>
          </div>
          <div className="flex gap-4">
            <Form.Item
              name="ownershipType"
              label="نوع المؤسسة من حيث الملكية"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Select placeholder="اختر نوع المؤسسة من حيث الملكية">
                {ownershipTypeOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="wayType"
              label="نوع المؤسسة من حیث الوسیلة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Select placeholder="اختر نوع المؤسسة من حیث الوسیلة">
                {wayTypeOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          {/* Country of Residence */}
          <Form.Item
            label={tAuth("subscriptionForm.country.label")}
            name="country"
            rules={[
              {
                required: true,
                message: tAuth("validationMsg.countryRequired")
              }
            ]}
          >
            <Select placeholder={tAuth("subscriptionForm.country.placeholder")}>
              {countryList.map((country) => (
                <Select.Option key={country.value} value={country.value}>
                  {country.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className="flex gap-4">
            {/* Number of Employees Field */}
            <Form.Item
              name="numberOfEmployees"
              label={tConsultingForm("numberOfEmployees.label")}
              rules={[
                {
                  required: true,
                  message: tConsultingForm("validationMsg.numberOfEmployees")
                }
              ]}
              className="flex-1"
            >
              <Select
                placeholder={tConsultingForm("numberOfEmployees.placeholder")}
              >
                {employeeOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* Number of External Offices Field */}
            <Form.Item
              name="numberOfOffices"
              label={tConsultingForm("numberOfOffices.label")}
              rules={[
                {
                  required: true,
                  message: tConsultingForm("validationMsg.numberOfOffices")
                }
              ]}
              className="flex-1"
            >
              <Select
                placeholder={tConsultingForm("numberOfOffices.placeholder")}
              >
                {officeOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="estimatedBudget"
            label="الـموازنـة الـسنویـة الـتقدیـریـة"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر الـموازنـة الـسنویـة الـتقدیـریـة">
              {budgetOptions.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="institutionChallenges"
            label="إذا كانت الاستشارة تطویریة، ما المجالات التي تعاني منھا المؤسسة"
          >
            <Select
              placeholder="اختر المجالات التي تعاني منھا المؤسسة"
              mode="multiple" // Allows selecting multiple options
            >
              {institutionChallenges.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="additionalInfo" label="معلومات إضافية">
            <Input.TextArea placeholder="أدخل أي ملاحظات إضافية" />
          </Form.Item>

          <div className="flex gap-4">
            <Button htmlType="submit">ارسال</Button>
            <Button htmlType="reset" onClick={onReset} danger>
              مسح
            </Button>
          </div>
        </Form>
      </div>
    </PageWrapper>
  );
}
