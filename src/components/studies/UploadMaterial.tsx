"use client";

import {Breadcrumb, Button, Checkbox, DatePicker, Form, Input, Select, Upload} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PageWrapper from "../PageWrapper";
import { useTranslations } from "next-intl";
import {Link, useRouter} from "@/i18n/routing";
import {UploadMaterialFormValues} from "@/types/form";
import {withAuth} from "@/components/withAuth";

function UploadMaterial() {
  const tBreadcrumb = useTranslations("common.breadcrumb");
  // const tUpload = useTranslations("studies.uploadMaterial");

  const [form] = Form.useForm();
  const router = useRouter(); // Use the router hook for navigation


  const onFinish = (values: UploadMaterialFormValues) => {
    console.log("Form Submitted:", values);
    // Add the logic to handle the form submission
    router.push("/studies/upload-material/material-received");

  };

  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link
                href="/studies"
                className="hover:!bg-transparent hover:underline"
              >
                {tBreadcrumb("studies.title")}
              </Link>
            ),
          },
          {
            title: tBreadcrumb("studies.uploadMaterial"),
          },
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />
      <div className="mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
        <Form form={form} layout="horizontal" onFinish={onFinish}>
          <Form.Item
            label="نوع المادة"
            name="materialType"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر نوع المادة">
              <Select.Option value="research">بحث</Select.Option>
              <Select.Option value="book">كتاب</Select.Option>
              <Select.Option value="other">أخرى</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="اسم المؤلف"
            name="authorName"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Input placeholder="أدخل اسم المؤلف" />
          </Form.Item>

          <Form.Item
            label="رقم الموبايل"
            name="mobileNumber"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Input placeholder="أدخل رقم الموبايل" />
          </Form.Item>

          <Form.Item
            label="البريد الإلكتروني"
            name="email"
            rules={[
              { required: true, message: "هذا الحقل مطلوب" },
              { type: "email", message: "يرجى إدخال بريد إلكتروني صحيح" },
            ]}
          >
            <Input placeholder="أدخل البريد الإلكتروني" />
          </Form.Item>

          <Form.Item
            label="تخصص المادة"
            name="materialSpecialization"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Select placeholder="اختر تخصص المادة">
              <Select.Option value="media">إعلام</Select.Option>
              <Select.Option value="institutional">
                اتصال مؤسسي
              </Select.Option>
              <Select.Option value="other">أخرى</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="ملخص المادة"
            name="materialSummary"
            rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Input.TextArea
              placeholder="أدخل ملخص المادة (نص في حدود 70 كلمة)"
              maxLength={70}
            />
          </Form.Item>

          <Form.Item
              name="firstPublicationDate"
              label="تاريخ النشر لأول مرة"
              rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
              className="flex-1"
          >
            <DatePicker placeholder="اختر تاريخ التأسيس" className="w-full" />
          </Form.Item>

          <Form.Item
            label="تحميل المادة"
            name="upload"
            valuePropName="fileList"
            // rules={[{ required: true, message: "هذا الحقل مطلوب" }]}
          >
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>رفع المادة</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="مؤلفين آخرين" name="otherAuthors">
            <Input.TextArea placeholder="أدخل أسماء المؤلفين الآخرين (إن وجد)" />
          </Form.Item>

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
                              new Error("يجب عليك تأكيد صحة البيانات.")
                          )
                }
              ]}
          >
            <Checkbox>
              يرجى التأكد من صحة البيانات الدخلة قبل الحفظ
            </Checkbox>
          </Form.Item>
          <div className="flex justify-between items-center mt-6">
            <Button type="primary" htmlType="submit">
              حفظ
            </Button>
            <Button type="default" htmlType="reset">تحميل مادة أخرى</Button>
          </div>
        </Form>
      </div>
    </PageWrapper>
  );
}

export default withAuth(UploadMaterial)