import { Link } from "@/i18n/routing";
import { consultingServices } from "@/lib/data/consultingData";
import { useTranslations } from "next-intl";

export default function Consulting() {
  const tConsulting = useTranslations("consulting");
  const tCommon = useTranslations("common");

  return (
    <section className="w-full">
      <h1 className="text-xl mb-4 font-bold">{tCommon("links.consulting")}</h1>
      <article className="w-full h-[520px]">
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
              {tConsulting("heroText.main")}
            </p>
            <p className="text-white text-xl underline underline-offset-8 leading-relaxed">
              {tConsulting("heroText.sub")}
            </p>
          </div>
        </div>
      </article>
      <article>
        <h3 className="mt-4">{tConsulting("servicesTitle")}</h3>
        <h4 className="mt-4 mb-3">{tConsulting("linksTitle")}</h4>
        <ul className="list-disc list-inside space-y-2">
          {consultingServices.map((service) => (
            <li key={service.slug} className="my-2">
              <Link href={`/consulting/${service.slug}`}>
                <span className="text-blue-600 underline underline-offset-4 hover:underline-offset-2">
                  {service.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
