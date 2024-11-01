import { useTranslations } from "next-intl";

export default function Consulting() {
  const t = useTranslations("consulting");

  return (
    <section className="w-full">
      <article className="w-full h-[420px]">
        {/* <Image
          src="https://placehold.co/955x420"
          alt="placeholder"
          className="w-full h-auto"
          width="955"
          height="420"
          priority={false}
        /> */}

        {/* // TODO: PLEASE ADD THE 'EN' TRANSLATION */}
        <div className="bg-cyan-500 flex items-end justify-center h-full p-2 py-6 ">
          <div className="bg-cyan-800 p-2 text-center">
            <p className="text-white text-2xl underline underline-offset-8">
              {t("heroText.main")}
            </p>
            <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
              {t("heroText.sub")}
            </p>
          </div>
        </div>
      </article>
      <article>
        <h2></h2>
      </article>
    </section>
  );
}
