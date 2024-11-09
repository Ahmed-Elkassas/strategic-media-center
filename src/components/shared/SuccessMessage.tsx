"use client";

import { Breadcrumb } from "antd";
import PageWrapper from "../PageWrapper";
import { SuccessMessagePageProps } from "@/types/shared";
import { CheckCircleTwoTone } from "@ant-design/icons";

export default function SuccessMessage({
  breadcrumbItems,
  message,
  additionalMessage,
  children
}: SuccessMessagePageProps) {
  return (
    <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
      <section className="flex flex-col h-full justify-between">
        <Breadcrumb
          items={breadcrumbItems}
          separator=">"
          className="mb-4 text-gray-600 text-lg font-bold"
        />
        {/* Confirmation Message */}
        <div className="mt-4 mx-auto max-w-3xl bg-[rgba(83,196,26,0.75)] p-6 rounded-lg shadow-md">
          <span className="block text-center">
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ fontSize: "25px" }}
            />
          </span>
          {message}
          {additionalMessage && additionalMessage}
        </div>
        <>{children}</>
      </section>
    </PageWrapper>
  );
}
