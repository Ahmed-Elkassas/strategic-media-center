import { LeftOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import InfoCard from "./ui/InfoCard";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "270px",
  color: "#fff",
  lineHeight: "270px",
  textAlign: "center",
  background: "#364d79"
};

export default function MainContent() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-col md:flex-row gap-4">
        <article className="w-full md:w-4/5 bg-gray-100 p-4 border border-gray-300 flex flex-col">
          <Carousel className="h-[270px]" autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </article>
        <article className="w-full md:w-1/5 bg-gray-200 rounded-tr-2xl">
          {/* //TODO: Missing Shape  */}
          <h2 className="w-full text-xl font-bold bg-primary text-white p-2 rounded-tr-2xl">
            أخبار المركز
          </h2>
          <div className="mt-4 p-4">
            <span className="block mb-1 text-sm">
              تدشين موقع مركز الإعلام الاستراتيجي
            </span>
            <div className="bg-gray-300 h-32 mb-2" />
            <button className="text-primary hover:underline w-full flex items-center justify-end gap-1">
              <span>التفاصيل</span>
              <LeftOutlined />
            </button>
          </div>
        </article>
      </section>
      {/* cards */}
      <section className="flex flex-col md:flex-row gap-4 mt-8">
        {/* Section Title */}
        <div className="w-full md:w-4/5 order-2 md:order-1">
          <div className="flex justify-between items-center border-b-2 pb-2 mb-4">
            <h2 className="text-xl font-bold">خدمات مختارة</h2>
            <button className="flex items-center gap-1 text-primary hover:underline">
              <span> الكشف الكامل </span>
              <LeftOutlined />
            </button>
          </div>
          <InfoCard title="استشارات" content="" imageSrc="" />
        </div>
        <aside className="w-full md:w-1/5 order-1 md:order-2">
          <div className="h-28 md:h-[360px] flex place-content-center items-center bg-neutral-200 border-2 border-gray-500 mb-4">
            <span className="text-lg font-medium tracking-wide text-">
              مساحات مقترحة
            </span>
          </div>
          <div className="h-28 md:h-[360px] flex place-content-center items-center bg-neutral-200 border-2 border-gray-500">
            <span className="text-lg font-medium tracking-wide text-">
              مساحات مقترحة
            </span>
          </div>
        </aside>
      </section>
    </main>
  );
}
