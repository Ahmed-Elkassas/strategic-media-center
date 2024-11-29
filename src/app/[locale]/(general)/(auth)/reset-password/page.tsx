"use client";

import { useTranslations } from "next-intl";
import { Button, Form, Input, message } from "antd";

import { resetPassword } from "@/services/authService";
import PageWrapper from "@/components/PageWrapper";

export default function ResetPasswordPage() {
    const t = useTranslations("auth.resetPassword");

    const onFinish = async (values: { password: string; confirmPassword: string }) => {
       console.log('values', values)
    };

    return (
        <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
            <div className="h-full flex items-center justify-center">
                <Form
                    className="bg-slate-100 shadow-lg p-5 rounded-md"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="password"
                        label={t("newPasswordLabel")}
                        rules={[{ required: true, message: t("passwordRequired") }]}
                        hasFeedback
                    >
                        <Input.Password placeholder={t("newPasswordPlaceholder")} />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label={t("confirmPasswordLabel")}
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                            { required: true, message: t("confirmPasswordRequired") },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error(t("passwordsMustMatch")));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder={t("confirmPasswordPlaceholder")} />
                    </Form.Item>
                    <Button htmlType="submit" type="primary">
                        {t("submit")}
                    </Button>
                </Form>
            </div>
        </PageWrapper>
    );
}
