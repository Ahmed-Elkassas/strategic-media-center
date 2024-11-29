"use client";

import PageWrapper from "../PageWrapper";
import { withAuth } from "@/components/withAuth";

function Aboutus() {
  return (
    <PageWrapper
      sidebarContent={
        <ul className="mt-4">
          <li className="mb-2">أخبار المركز</li>
          <li className="mb-2">أخبار المركز</li>
        </ul>
      }
      sidebarTitle="Subscription Agreement"
    >
      <p>من نحن</p>
    </PageWrapper>
  );
}

export default withAuth(Aboutus);
