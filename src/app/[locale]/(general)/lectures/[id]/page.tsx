import LectureDetails from "@/components/lectures/LectureDetails";

export default function LectureDetailsPage({
   params: { id }
 }: {
  params: { id: string };
}) {
  return <LectureDetails id={id} />;
}
