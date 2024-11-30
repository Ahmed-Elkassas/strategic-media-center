import LecturesExpertDetails from '@/components/lectures/LecturesExpertDetails'
export default function ExpertDetailsPage({
    params: { id }
    }: {
    params: { id: string };
}) {
    return (
        <LecturesExpertDetails  id={id}/>
    )
}