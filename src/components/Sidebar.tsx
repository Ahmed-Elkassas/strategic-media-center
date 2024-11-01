import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

interface SidebarProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function Sidebar({ title, content }: SidebarProps) {
  return (
    <div className="md:w-1/4">
      {/* //Todo: Check this socials with better one and replace 'Twitter' with 'X' */}
      <div className="flex gap-2 mb-4 justify-end">
        <FacebookOutlined style={{ fontSize: "22px" }} />
        <YoutubeOutlined style={{ fontSize: "22px" }} />
        <TwitterOutlined style={{ fontSize: "22px" }} />
      </div>
      <aside className=" bg-gray-300 py-4 px-2 mb-5">
        {title ? (
          title
        ) : (
          <div className="flex gap-2 items-center">
            <div className="bg-white p-[2px] border-2 border-red-700 rounded-full flex justify-center items-center">
              <span className="w-[7px] h-[7px] rounded-full bg-red-700" />
            </div>
            <h3 className="font-medium">فعالیات الشھر القادم</h3>
          </div>
        )}
        <article>{content}</article>
      </aside>
    </div>
  );
}
