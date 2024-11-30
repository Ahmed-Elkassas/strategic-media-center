"use client";

import {
  Breadcrumb,
  Button,
  DatePicker,
  Form,
  Input, message,
  Select,
  Space
} from "antd";
import dayjs from 'dayjs';
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import PageWrapper from "../PageWrapper";

import { AxiosError } from 'axios';
import { ConsultingRequestFormValues } from "@/types/form";
import { withAuth } from "@/components/withAuth";
import {useCreate} from "@/hooks/useCreate";
import {useDropdownData} from "@/hooks/useDropDownData";
import {useEffect, useState} from "react";
import {dropdownKeys} from "@/lib/constants";

function ConsultingRequest() {
  const tBreadcrumb = useTranslations("common.breadcrumb.consulting");
  const tConsulting = useTranslations("consulting");
  const tConsultingForm = useTranslations("consulting.form");
  const tAuth = useTranslations("auth");

  const [form] = Form.useForm();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mutate, isPending } = useCreate<any, ConsultingRequestFormValues>({
    endpoint: '/user/v1/consultation-request'});

  const { mutate: fetchDropdownData, isPending: isDropdownPending } = useDropdownData();

  const [dropdownOptions, setDropdownOptions] = useState<Record<string, string[]>>({});

  useEffect(() => {
    fetchDropdownData({ keys: dropdownKeys }, {
      onSuccess: (response) => {
        const dropdownData = response?.data?.response?.data || {};
        setDropdownOptions(dropdownData);
      },
      onError: () => {
        console.error("Failed to fetch dropdown data.");
      },
    });
  }, []);


  const onFinish = (values: ConsultingRequestFormValues & { secondName: string; lastName: string; establishment_date: dayjs.Dayjs } ) => {

    // Remove secondName and lastName from values and replace with the combined name
    const { secondName, lastName, establishment_date,...restValues } = values;
    // Format the date using dayjs
    const formattedDate = establishment_date ? dayjs(establishment_date).format('YYYY-MM-DD') : '';

    // Combine name fields
    const fullName = `${values.name} ${secondName} ${lastName}`;
    const payload = { ...restValues, name: fullName, establishment_date: formattedDate };

    mutate(payload , {
      onSuccess: () => {
        message.success('Organization created successfully');
        router.push("/consulting/consulting-received");
      },
      onError: (error: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        message.error(`Error: ${error?.response?.data?.response?.error || error.message}`);
      },
    },
    )
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
                name="name"
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
            name="job_position"
            label="الموقع الوظيفي"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر الموقع الوظيفي" loading={isDropdownPending}>
              {dropdownOptions["consultation.job_position"]?.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
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
              name="org_name"
              label="اسم المؤسسة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Input placeholder="أدخل اسم المؤسسة" />
            </Form.Item>

            <Form.Item
              name="establishment_date"
              label="تاريخ التأسيس"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <DatePicker placeholder="اختر تاريخ التأسيس" className="w-full"  format={"('YYYY-MM-DD')"}/>
            </Form.Item>
          </div>
          <Form.Item
              name="org_type"
              label="حالة المؤسسة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
          >
            <Select placeholder="اختر حالة المؤسسة" loading={isDropdownPending}>
              {dropdownOptions["consultation.org_type"]?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className="flex gap-4">
            <Form.Item
              name="org_status"
              label="نوع المؤسسة من حيث الملكية"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Select placeholder="اختر نوع المؤسسة من حيث الملكية" loading={isDropdownPending}>
                {dropdownOptions["consultation.org_status"]?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="means_type"
              label="نوع المؤسسة من حیث الوسیلة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
            >
              <Select placeholder="اختر نوع المؤسسة من حیث الوسیلة" loading={isDropdownPending}>
                {dropdownOptions["consultation.means_type"]?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Country of Residence */}
          <Form.Item
            label={tAuth("subscriptionForm.country.label")}
            name="headquarter_country"
            rules={[
              {
                required: true,
                message: tAuth("validationMsg.countryRequired")
              }
            ]}
          >
            <Select placeholder={tAuth("subscriptionForm.country.placeholder")} loading={isDropdownPending} showSearch={true}>
              {dropdownOptions["country"]?.map((country) => (
                <Select.Option key={country} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className="flex gap-4">
            {/* Number of Employees Field */}
            <Form.Item
              name="employees_number"
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
                {dropdownOptions["consultation.employees_number"]?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* Number of External Offices Field */}
            <Form.Item
              name="external_offices_number"
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
                {dropdownOptions["consultation.external_offices_number"]?.map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="annual_budget"
            label="الـموازنـة الـسنویـة الـتقدیـریـة"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر الـموازنـة الـسنویـة الـتقدیـریـة" loading={isDropdownPending}>
              {dropdownOptions["consultation.annual_budget"]?.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="suffers_area"
            label="إذا كانت الاستشارة تطویریة، ما المجالات التي تعاني منھا المؤسسة"
          >
            <Select
              placeholder="اختر المجالات التي تعاني منھا المؤسسة"
            >
              {dropdownOptions["consultation.suffers_area"]?.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="notes" label="معلومات إضافية">
            <Input.TextArea placeholder="أدخل أي ملاحظات إضافية" />
          </Form.Item>

          <div className="flex gap-4">
            <Button htmlType="submit" loading={isPending}>ارسال</Button>
            <Button htmlType="reset" onClick={onReset} danger>
              مسح
            </Button>
          </div>
        </Form>
      </div>
    </PageWrapper>
  );
}

export default withAuth(ConsultingRequest);
