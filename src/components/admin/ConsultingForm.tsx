"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import PageWrapper from "../PageWrapper";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Select
} from "antd";

export default function AdminConsultingForm() {
  const tConsulting = useTranslations("consulting.admin");
  const tBreadcrumb = useTranslations("common.breadcrumb");

  const onFinish = (values: any) => {
    // Check if the 'reviewed' checkbox is selected
    if (!values.reviewed) {
      message.error(tConsulting("fields.reviewed.reviewedRequired"));
      return;
    }

    console.log("Form Submitted:", values);
    message.success(tConsulting("fields.reviewed.savedSuccessfully"));
    // Proceed with save logic here (e.g., API call)
  };

  return (
    <PageWrapper
      sidebarContent={<h1>ConsultingPage</h1>}
      sidebarTitle={undefined}
    >
      <Breadcrumb
        items={[
          {
            title: (
              <Link href="/consulting">{tBreadcrumb("consulting.title")}</Link>
            )
          },
          {
            title: tBreadcrumb("consulting.admin.adminConsultingForm")
          }
        ]}
        separator=">"
        className="mb-4 text-gray-600 text-lg font-bold"
      />

      <div className="mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
        <Form layout="vertical" onFinish={onFinish}>
          {/* Consultation Title */}
          <Form.Item
            label={tConsulting("fields.consultationTitle.label")}
            name="consultationTitle"
            rules={[
              {
                required: true,
                message: tConsulting("fields.consultationTitle.validationMsg")
              }
            ]}
          >
            <Input
              placeholder={tConsulting("fields.consultationTitle.placeholder")}
            />
          </Form.Item>
          {/* Consultation Field */}
          <Form.Item
            label={tConsulting("fields.consultationField.label")}
            name="consultationField"
            rules={[
              {
                required: true,
                message: tConsulting("fields.consultationField.validationMsg")
              }
            ]}
          >
            <Select
              placeholder={tConsulting("fields.consultationField.placeholder")}
            >
              <Select.Option value="foundation">
                {tConsulting("fields.consultationField.options.foundation")}
              </Select.Option>
              <Select.Option value="development">
                {tConsulting("fields.consultationField.options.development")}
              </Select.Option>
              <Select.Option value="analysis">
                {tConsulting("fields.consultationField.options.analysis")}
              </Select.Option>
              <Select.Option value="evaluation">
                {tConsulting("fields.consultationField.options.evaluation")}
              </Select.Option>
              <Select.Option value="supervision">
                {tConsulting("fields.consultationField.options.supervision")}
              </Select.Option>
              <Select.Option value="other">
                {tConsulting("fields.consultationField.options.other")}
              </Select.Option>
            </Select>
          </Form.Item>

          {/* General Goal */}
          <Form.Item
            label={tConsulting("fields.generalGoal.label")}
            name="generalGoal"
            rules={[
              {
                required: true,
                message: tConsulting("fields.generalGoal.validationMsg")
              }
            ]}
          >
            <Input
              placeholder={tConsulting("fields.generalGoal.placeholder")}
            />
          </Form.Item>

          {/* Summary */}
          <Form.Item
            label={tConsulting("fields.summary.label")}
            name="summary"
            rules={[
              {
                required: true,
                message: tConsulting("fields.summary.validationMsg")
              }
            ]}
          >
            <Input.TextArea
              maxLength={50}
              placeholder={tConsulting("fields.summary.placeholder")}
              rows={3}
            />
          </Form.Item>

          {/* Work Phases */}
          <Form.Item
            label={tConsulting("fields.workPhases.label")}
            name="workPhases"
            rules={[
              {
                required: true,
                message: tConsulting("fields.workPhases.validationMsg")
              }
            ]}
          >
            <Input.TextArea
              placeholder={tConsulting("fields.workPhases.placeholder")}
              rows={3}
            />
          </Form.Item>

          {/* Approximate Duration */}
          <Form.Item
            label={tConsulting("fields.approximateDuration.label")}
            name="approximateDuration"
            rules={[
              {
                required: true,
                message: tConsulting("fields.approximateDuration.validationMsg")
              }
            ]}
          >
            <Input
              placeholder={tConsulting(
                "fields.approximateDuration.placeholder"
              )}
            />
          </Form.Item>

          {/* Related Consultations */}
          <Form.Item
            label={tConsulting("fields.relatedConsultations.label")}
            name="relatedConsultations"
            rules={[
              {
                required: true,
                message: tConsulting(
                  "fields.relatedConsultations.validationMsg"
                )
              }
            ]}
          >
            <Select
              placeholder={tConsulting(
                "fields.relatedConsultations.placeholder"
              )}
              mode="multiple"
            >
              <Select.Option value="consultation1">
                Consultation 1
              </Select.Option>
              <Select.Option value="consultation2">
                Consultation 2
              </Select.Option>
            </Select>
          </Form.Item>

          {/* Other Related Services */}
          <Form.Item
            label={tConsulting("fields.otherRelatedServices.label")}
            name="otherRelatedServices"
          >
            <Select
              placeholder={tConsulting(
                "fields.otherRelatedServices.placeholder"
              )}
              mode="multiple"
            >
              <Select.Option value="service1">Service 1</Select.Option>
              <Select.Option value="service2">Service 2</Select.Option>
            </Select>
          </Form.Item>

          {/* Reviewed Checkbox */}
          <Form.Item name="reviewed" valuePropName="checked">
            <Checkbox>{tConsulting("fields.reviewed.label")}</Checkbox>
          </Form.Item>

          <Button htmlType="submit" type="primary">
            {tConsulting("buttons.save")}
          </Button>
        </Form>
      </div>
    </PageWrapper>
  );
}
