import MaterialDetails  from "@/components/studies/MaterialDetails";

export default function ConsultingDetailsPage({
    params: { id }
  }: {
  params: { id: string };
}) {
  return <MaterialDetails id={id}  />;
}
