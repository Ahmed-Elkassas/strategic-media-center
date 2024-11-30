import ConsultingDetails from "@/components/consulting/ConsultingDetails";

 function ConsultingDetailsPage({
  params: { id }
}: {
  params: { id: string };
}) {
  return <ConsultingDetails id={id} />;
}
export default ConsultingDetailsPage;