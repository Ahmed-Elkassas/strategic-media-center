"use client";

import {useTranslations} from "next-intl";
import {Button, Form, Input, message} from "antd";
import {useState} from "react";
import {forgotPassword} from "@/services/authService";
import ReCAPTCHA from "react-google-recaptcha";
import PageWrapper from "@/components/PageWrapper";

export default function ForgotPasswordPage() {
    const t = useTranslations("auth.forgotPassword");


    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    const onFinish =  () => {
        if (!recaptchaValue) {
            alert(t("validationMsg.recaptchaRequired"));
            return;
        }
    };

    return (
        <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
            <div className="h-full flex items-center justify-center">
                <Form
                    className="bg-slate-100 shadow-lg p-5 rounded-md"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label={t("emailLabel")}
                        rules={[{required: true, message: t("emailRequired")}]}
                    >
                        <Input type="email" placeholder={t("emailPlaceholder")}/>
                    </Form.Item>
                    <Form.Item>
                        {recaptchaSiteKey ? (
                            <ReCAPTCHA
                                sitekey={recaptchaSiteKey}
                                onChange={(value) => setRecaptchaValue(value)}
                            />
                        ) : (
                            <p>{t("recaptchaMissing")}</p>
                        )}
                    </Form.Item>
                    <Button htmlType="submit" type="primary">
                        {t("submit")}
                    </Button>
                </Form>
            </div>
        </PageWrapper>
    );
}
