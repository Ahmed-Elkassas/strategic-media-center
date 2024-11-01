"use client";

import Consulting from "@/components/consulting/Consluting";
import PageWrapper from "@/components/PageWrapper";

export default function ConsultingPage() {
  return (
    <PageWrapper
      sidebarContent={<h1>ConsultingPage</h1>}
      sidebarTitle={undefined}
    >
      <Consulting />
    </PageWrapper>
  );
}
