import NewsDetails from "@/components/News/NewsDetails";

export default function NewsDetailsPage({
  params: { id }
}: {
  params: { id: string };
}) {
  return <NewsDetails id={id}/>;
}
