import { Link } from "@/i18n/routing";
import {Button, message} from "antd";

interface TableRow {
  id: number;
  type: string;
  expert: {
    name: string;
  };
  page_numbers: number;
  publication_date: string;
  file: string
}

export const studiesColumns = [
  {
    title: "العنوان",
    dataIndex: "type",
    key: "type",
    render: (_: unknown, record: TableRow) => (
      <Link
        href={`/studies/list/${record.id}`}
        className="underline underline-offset-4 hover:underline-offset-2"
      >
        {record.type}
      </Link>
    )
  },
  {
    title: "المؤلف/الباحث",
    dataIndex: "expert",
    key: "author",
    render: (expert: { name: string }) => expert?.name || "غير متوفر",
  },
  {
    title: "عدد الصفحات",
    dataIndex: "page_numbers",
    key: "pages"
  },
  {
    title: "تاريخ النشر",
    dataIndex: "publication_date",
    key: "publishDate"
  },
  {
    title: "تنزيل الملخص",
    dataIndex: "file",
    key: "file",
    render: (_: unknown, record: TableRow) => (
        <Button
            type="link"
            onClick={() => {
              if (record?.file) {
                window.open(record?.file, "_blank");
              } else {
                message.error("حدت خطأ")
              }
            }}
        >
          تنزيل
        </Button>
    )
  }
];


