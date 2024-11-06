import ConsultingDetails from "@/components/consulting/ConsultingDetails";

export default function ConsultingDetailsPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  return <ConsultingDetails slug={slug} />;
}
