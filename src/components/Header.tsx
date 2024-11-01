import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex gap-4 justify-between items-center mt-4">
        <div className="md:w-3/4 bg-gray-300 py-2 px-3 rounded-md">
          <p>أخبار المركز....</p>
        </div>
        <div className="md:w-1/4 flex gap-2 items-center">
          <div className="flex-1">
            <Input placeholder="بحث" className="py-2" />
          </div>

          <Button
            icon={<SearchOutlined style={{ fontSize: "22px" }} rotate={90} />}
            type="text"
          />
        </div>
      </div>
    </header>
  );
}
