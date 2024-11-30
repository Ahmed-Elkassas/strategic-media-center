import CoursesExpertDetails from "@/components/training/CoursesExpertDetails";

export default function ExpertDetailsPage({
params: { id }
}: {
    params: { id: string };
}) {
    return (
        <CoursesExpertDetails id={id} />
    )
}