"use client";

import { Link } from "@/i18n/routing";
import { ReactNode } from "react";

interface HighlightSectionProps {
  title: string;
  linkHref?: string;
  linkText?: string;
  content: ReactNode;
  imageSrc?: string; // Optional background image
  backgroundColor?: string; // Optional background color
}

export const HighlightSection = ({
  title,
  linkHref,
  linkText,
  content,
  imageSrc,
  backgroundColor = "bg-cyan-500"
}: HighlightSectionProps) => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h1 className="text-lg mb-4 font-bold">{title}</h1>
        {linkHref && linkText && (
          <Link
            href={linkHref}
            className="font-semibold underline underline-offset-8 hover:underline-offset-4"
          >
            {linkText}
          </Link>
        )}
      </div>
      <article
        className={`w-full h-[520px] flex items-center justify-end p-6 ${
          imageSrc ? "bg-cover bg-center" : backgroundColor
        }`}
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      >
        <div className="flex flex-col gap-2">{content}</div>
      </article>
    </section>
  );
};
