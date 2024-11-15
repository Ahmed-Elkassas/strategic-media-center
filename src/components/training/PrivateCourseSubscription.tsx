"use client";

import {
  Breadcrumb,
  Form,
  Space,
  Input,
  Select,
  Button,
  Checkbox,
  DatePicker
} from "antd";
import { Link, useRouter } from "@/i18n/routing";
import dayjs from "dayjs";

import PageWrapper from "../PageWrapper";
import { useTranslations } from "next-intl";
import { getCountryOptions } from "@/lib/helpers";
import { COUNTRY_OPTIONS } from "@/constants/formOptions";
import {
  eventPresentationForm,
  eventTypeOptions,
  organizationNatureOptions,
  requestEntityOptions
} from "@/constants/trainingOptions";
import { PrivateCourseSubscriptionFormValues } from "@/types/form";

export default function PrivateCourseSubscription() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  const tConsulting = useTranslations("consulting");
  const tAuth = useTranslations("auth");

  const [form] = Form.useForm();
  const router = useRouter(); // Use the router hook for navigation

  const countryList = getCountryOptions(COUNTRY_OPTIONS, tAuth);

  const onFinish = (values: PrivateCourseSubscriptionFormValues) => {
    console.log("Form Submitted:", values);
    router.push("/consulting/consulting-received");
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/training"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("training.title")}
              </Link>
            )
          },
          {
            title: tBreadcrumb("training.subscribeToPrivateCourse")
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
          <div className="flex gap-4 ">
            <Form.Item
              name="type"
              label="نوع الفعالیة "
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Select placeholder="اختر نوع الفعالية">
                {eventTypeOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="shape"
              label="شكل تقدیم الفعالیة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Select placeholder="شكل تقدیم الفعالیة">
                {eventPresentationForm.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
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
          <Form.Item
            name="customEventTitle"
            label="عنوان الفعالیة المطلوبة إذا كانت لیست في القائمة"
          >
            <Input placeholder="أدخل عنوان الفعالیة" />
          </Form.Item>

          <div className="flex gap-4 ">
            {/* Job Title */}
            <Form.Item
              name="jobTitle"
              label="الوظیفة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Input placeholder="أدخل الوظیفة" />
            </Form.Item>

            {/* Request Entity */}
            <Form.Item
              name="requestEntity"
              label="جھة الطلب"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Select placeholder="اختر جھة الطلب">
                {requestEntityOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="flex gap-4 ">
            {/* Organization Name */}
            <Form.Item
              name="organizationName"
              label="اسم المؤسسة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Input placeholder="أدخل اسم المؤسسة" />
            </Form.Item>

            {/* Organization Nature */}
            <Form.Item
              name="organizationNature"
              label="طبیعة عمل المؤسسة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="w-full"
            >
              <Select placeholder="اختر طبیعة عمل المؤسسة">
                {organizationNatureOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Course Title */}
          <Form.Item
            name="courseTitle"
            label="عنوان الفعالیة المطلوبة"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر عنوان الفعالیة المطلوبة">
              {/* Add course titles as options */}
            </Select>
          </Form.Item>

          {/* Country of Event */}
          <Form.Item
            name="eventCountry"
            label="دولة انعقاد الفعالیة"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر دولة انعقاد الفعالية">
              {countryList.map((country) => (
                <Select.Option key={country.value} value={country.value}>
                  {country.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Preferred Date */}
          <Form.Item
            name="preferredDate"
            label="التاریخ المفضل لانعقاد الفعالیة"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <DatePicker placeholder="اختر التاریخ المفضل" className="w-full" />
          </Form.Item>

          {/* Additional Info */}
          <Form.Item name="additionalInfo" label="معلومات إضافیة">
            <Input.TextArea placeholder="أدخل أي معلومات إضافیة" />
          </Form.Item>

          {/* Request Date (Auto-filled) */}
          <Form.Item
            label="تاریخ الطلب"
            name="requestDate"
            className="w-full"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <DatePicker
              className="w-full"
              disabled
              defaultValue={dayjs()} // Set default value as today's date
              format="DD/MM/YYYY" // Customize the date format
            />
          </Form.Item>
          {/* Agreement Checkboxes */}
          <Form.Item
            name="confirmDataAccuracy"
            valuePropName="checked"
            required={true}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(tAuth("validationMsg.confirmDataRequired"))
                      )
              }
            ]}
          >
            <Checkbox>
              {tAuth("subscriptionForm.agreements.confirmDataAccuracy")}
            </Checkbox>
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
