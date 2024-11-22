import { Link } from "@/i18n/routing";
import { Button } from "antd";

interface TableRow {
  id: number;
  studyTitle: string;
  author: string;
  pages: number;
  publishDate: string;
  download: string;
}

export const studiesColumns = [
  {
    title: "العنوان",
    dataIndex: "studyTitle",
    key: "studyTitle",
    render: (_: unknown, record: TableRow) => (
      <Link
        href={`/studies/list/${record.id}`}
        className="underline underline-offset-4 hover:underline-offset-2"
      >
        {record.studyTitle}
      </Link>
    )
  },
  {
    title: "المؤلف/الباحث",
    dataIndex: "author",
    key: "author"
  },
  {
    title: "عدد الصفحات",
    dataIndex: "pages",
    key: "pages"
  },
  {
    title: "تاريخ النشر",
    dataIndex: "publishDate",
    key: "publishDate"
  },
  {
    title: "تنزيل الملخص",
    dataIndex: "download",
    key: "download",
    render: (_: unknown, record: TableRow) => (
      <Button
        type="link"
        onClick={() => console.log(`Downloading: ${record.studyTitle}`)}
      >
        تنزيل
      </Button>
    )
  }
];

export const studiesData = [
  {
    id: 1,
    studyTitle: "أهمية التخطيط الإستراتيجي للمؤسسات الإعلامية",
    author: "........",
    pages: 110,
    publishDate: "2011",
    download: "تنزيل"
  },
  {
    id: 2,
    studyTitle: "إدارة المخاطر في المؤسسات الإعلامية",
    author: "........",
    pages: 95,
    publishDate: "2012",
    download: "تنزيل"
  },
  {
    id: 3,
    studyTitle: "تحليل استراتيجيات التسويق الإعلامي",
    author: "........",
    pages: 120,
    publishDate: "2010",
    download: "تنزيل"
  },
  {
    id: 4,
    studyTitle: "التخطيط الإعلامي لتحسين الصورة الذهنية",
    author: "........",
    pages: 105,
    publishDate: "2013",
    download: "تنزيل"
  }
];
