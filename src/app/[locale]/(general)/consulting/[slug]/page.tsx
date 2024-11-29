import ConsultingDetails from "@/components/consulting/ConsultingDetails";

 function ConsultingDetailsPage({
  params: { slug }
}: {
  params: { slug: string };
}) {
  return <ConsultingDetails slug={slug} />;
}
export default ConsultingDetailsPage;