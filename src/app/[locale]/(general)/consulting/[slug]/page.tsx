"use client";

import PageWrapper from "@/components/PageWrapper";
import { consultingServices } from "@/lib/data/consultingData";
import { notFound } from "next/navigation";

export default function ConsultingDetailsPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  const service = consultingServices?.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
      <h1 className="text-2xl font-bold mb-4">{service?.title}</h1>
    </PageWrapper>
  );
}
