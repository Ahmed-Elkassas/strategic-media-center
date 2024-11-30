import CourseDetails from "@/components/training/CourseDetails";

 function CourseDetailsPage({
  params: { id }
}: {
  params: { id: string };
}) {
  return <CourseDetails id={id}/>;
}
export default CourseDetailsPage;