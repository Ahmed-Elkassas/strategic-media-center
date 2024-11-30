"use client";

import {
    Breadcrumb,
    Form,
    Space,
    Input,
    Select,
    Button,
    Checkbox,
    DatePicker, message
} from "antd";
import {Link} from "@/i18n/routing";
import dayjs from "dayjs";

import PageWrapper from "../PageWrapper";
import {useTranslations} from "next-intl";

import {
    eventTypeOptions,
    requestEntityOptions
} from "@/constants/trainingOptions";

import { PrivateCourseSubscriptionFormValues} from "@/types/form";
import {useDropdownData} from "@/hooks/useDropDownData";
import {useEffect, useState} from "react";
import {eventDropdownKeys} from "@/lib/constants";
import {useCreate} from "@/hooks/useCreate";
import {AxiosError} from "axios";

interface Props {
    breadcrumbItems: {
        title: string;
        href?: string
    }[];
    event_id: number
}

export default function PrivateTypeSubscription({breadcrumbItems, event_id}: Props) {
    const tConsulting = useTranslations("consulting");
    const tAuth = useTranslations("auth");

    const [form] = Form.useForm();


    const {mutate: fetchDropdownData, isPending: isDropdownPending} = useDropdownData();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { mutate, isPending } = useCreate<any, PrivateCourseSubscriptionFormValues>({
        endpoint: '/user/v1/event-request'});

    const [dropdownOptions, setDropdownOptions] = useState<Record<string, string[]>>({});


    useEffect(() => {
        fetchDropdownData({keys: eventDropdownKeys}, {
            onSuccess: (response) => {
                const dropdownData = response?.data?.response?.data || {};
                setDropdownOptions(dropdownData);
            },
            onError: () => {
                console.error("Failed to fetch dropdown data.");
            },
        });
    }, []);


    const onFinish = (values: PrivateCourseSubscriptionFormValues & {
        secondName: string; lastName: string;
        event_date: dayjs.Dayjs;
        request_date: dayjs.Dayjs
    }) => {


        // Remove secondName and lastName from values and replace with the combined name
        const {secondName, lastName, event_date, request_date, ...restValues} = values;
        // Format the date using dayjs
        const formattedEventDate = event_date ? dayjs(event_date).format('YYYY-MM-DD') : '';
        const formattedRequestDate = request_date ? dayjs(request_date).format('YYYY-MM-DD') : '';

        // Combine name fields
        const fullName = `${values.name} ${secondName} ${lastName}`;
        const payload = {
            ...restValues,
            event_id,
            name: fullName,
            event_date: formattedEventDate,
            request_date: formattedRequestDate,
            headquarter_country: values.event_country
        };
        mutate(payload , {
                onSuccess: () => {
                    message.success('تم إرسال الفعالية بنجاح');
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
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>

            <Breadcrumb
                items={breadcrumbItems?.map((item) => ({
                    title: item.href ? (
                        <Link
                            href={item.href}
                            className="hover:!bg-transparent hover:underline"
                        >
                            {item.title}
                        </Link>
                    ) : (
                        item.title
                    ),
                }))}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />
            <div className="mx-auto max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg">
                {/* Highlight Banner */}
                <div
                    className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 px-4 py-2 mb-6 rounded-md shadow">
                    <p className="text-center font-semibold">
                        {tConsulting("confidentialityStatement")}
                    </p>
                </div>

                <Form layout="horizontal" onFinish={onFinish}>
                    <div className="flex gap-4 ">
                        <Form.Item
                            name="event_type"
                            label="نوع الفعالیة "
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
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
                            name="event_presentation"
                            label="شكل تقدیم الفعالیة"
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                            className="w-full"
                        >
                            <Select placeholder="شكل تقدیم الفعالیة">
                                {dropdownOptions["event.presentation_format"]?.map((option) => (
                                    <Select.Option key={option} value={option}>
                                        {option}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
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
                            <Input placeholder={tAuth("subscriptionForm.name.placeholder")}/>
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
                            <Input placeholder={tAuth("subscriptionForm.name.placeholder")}/>
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
                            <Input placeholder={tAuth("subscriptionForm.name.placeholder")}/>
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
                        <Input placeholder={tAuth("subscriptionForm.email.placeholder")}/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="رقم الموبايل"
                        rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                    >
                        <Input placeholder="أدخل رقم الموبايل"/>
                    </Form.Item>
                    <Form.Item
                        name="custom_event"
                        label="عنوان الفعالیة المطلوبة إذا كانت لیست في القائمة"
                    >
                        <Input placeholder="أدخل عنوان الفعالیة"/>
                    </Form.Item>

                    <div className="flex gap-4 ">
                        {/* Job Title */}
                        <Form.Item
                            name="job"
                            label="الوظیفة"
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                            className="w-full"
                        >
                            <Input placeholder="أدخل الوظیفة"/>
                        </Form.Item>

                        {/* Request Entity */}
                        <Form.Item
                            name="request_entity"
                            label="جھة الطلب"
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
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
                            name="org_name"
                            label="اسم المؤسسة"
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                            className="w-full"
                        >
                            <Input placeholder="أدخل اسم المؤسسة"/>
                        </Form.Item>

                        {/* Organization Nature */}
                        <Form.Item
                            name="org_type"
                            label="طبیعة عمل المؤسسة"
                            rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                            className="w-full"
                        >
                            <Select placeholder="اختر طبیعة عمل المؤسسة" loading={isDropdownPending}>
                                {dropdownOptions["event.org_type"]?.map((option) => (
                                    <Select.Option key={option} value={option}>
                                        {option}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>

                    {/* Course Title */}
                    <Form.Item
                        name="event_title"
                        label="عنوان الفعالیة المطلوبة"
                        // rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                    >
                        <Select placeholder="اختر عنوان الفعالیة المطلوبة">
                            {/* Add course titles as options */}
                        </Select>
                    </Form.Item>

                    {/* Country of Event */}
                    <Form.Item
                        name="event_country"
                        label="دولة انعقاد الفعالیة"
                        rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                    >
                        <Select placeholder="اختر دولة انعقاد الفعالية">
                            {dropdownOptions["country"]?.map((country) => (
                                <Select.Option key={country} value={country}>
                                    {country}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* Preferred Date */}
                    <Form.Item
                        name="event_date"
                        label="التاریخ المفضل لانعقاد الفعالیة"
                        rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                    >
                        <DatePicker placeholder="اختر التاریخ المفضل" className="w-full"/>
                    </Form.Item>

                    {/* Additional Info */}
                    <Form.Item name="notes" label="معلومات إضافیة">
                        <Input.TextArea placeholder="أدخل أي معلومات إضافیة"/>
                    </Form.Item>

                    {/* Request Date (Auto-filled) */}
                    <Form.Item
                        label="تاریخ الطلب"
                        name="request_date"
                        className="w-full"
                        // rules={[{required: true, message: "هذا الحقل مطلوب"}]}
                    >
                        <DatePicker
                            className="w-full"
                            disabled
                            // value={dayjs().format('YYYY-MM-DD')} // Format the date
                            defaultValue={dayjs()}
                            format="DD/MM/YYYY" // Customize the date format
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
