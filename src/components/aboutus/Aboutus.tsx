"use client";

import PageWrapper from "../PageWrapper";
import { withAuth } from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import {Spin} from "antd";
import {notFound} from "next/navigation";

interface About {
id: number;
name: string;
slug: string;
content: string;
}

function Aboutus() {

    const { data, error, isPending } = useGet<About>({
        endpoint: "/user/v1/page/about",
    })

    if (isPending) {
        return (
            <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                <div className="flex justify-center my-4">
                    <Spin size="large" />
                </div>
            </PageWrapper>
        );
    }

    // Handle error state
    if (error) {
        return (
            <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                <div className="flex justify-center my-4">
                    <p>خطأ: {error.message}</p>
                </div>
            </PageWrapper>
        );
    }

    // Check if data exists
    if (!data || !data.response || !data.response.data) {
        notFound();
    }

    const item = data.response.data;


    return (
    <PageWrapper
      sidebarContent={
       undefined
      }
      sidebarTitle={undefined}
    >
      <div>{item?.content}</div>
    </PageWrapper>
  );
}

export default withAuth(Aboutus);
