import Image from "next/image";

interface InfoCardProps {
  title: string;
  imageSrc: string;
  content: string;
}

export default function InfoCard({ title, imageSrc, content }: InfoCardProps) {
  return (
    <article>
      <h2 className="bg-primary text-white text-2xl text-center tracking-wider font-medium p-2 rounded-tr-2xl">
        {title}
      </h2>
      <Image
        src={imageSrc || "https://placehold.co/990x200"}
        className="w-full h-auto"
        width={990}
        height={200}
        alt="placeholder banner"
      />
      {/* // TODO: ADD Slider */}
      <div className="mt-4 ">{content}</div>
    </article>
  );
}
