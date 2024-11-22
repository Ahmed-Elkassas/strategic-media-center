import { Link } from "@/i18n/routing";
import {  DatePicker } from "antd";


interface TableRow {
  id: number;
  lectureTitle: string;
  lecturer: string;
  duration: string;
  timing: string;
  date: string;
  fees: string;
}

export const lecturesColumns = [
  {
    title: "عنوان المحاضرة",
    dataIndex: "lectureTitle",
    key: "lectureTitle",
    render: (_: unknown, record: TableRow) => (
        <Link
            href={`/lectures/lecture-details/${record.id}`}
            className="underline underline-offset-4 hover:underline-offset-2"
        >
          {record.lectureTitle}
        </Link>
    )
  },
  {
    title: "المحاضر",
    dataIndex: "lecturer",
    key: "lecturer"
  },
  {
    title: "المدة",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "التوقيت",
    dataIndex: "timing",
    key: "timing"
  },
  {
    title: "التاريخ",
    dataIndex: "date",
    key: "date",
    render: () => <DatePicker placeholder="اختر" style={{ width: "100px" }} />
  },
  {
    title: "الرسوم",
    dataIndex: "fees",
    key: "fees"
  },
  {
    title: "الاشتراك",
    dataIndex: "subscribe",
    key: "subscribe",
    render: (_: unknown, record: TableRow) => (
        <input
            type="checkbox"
            onChange={() => console.log(`Subscribed to: ${record.lectureTitle}`)}
        />
    )
  }
];

export const lecturesData = [
  {
    id: 1,
    lectureTitle: "أهمية التخطيط الإستراتيجي للإعلام",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  },
  {
    id: 2,
    lectureTitle: "استراتيجيات نجاح العمل الإعلامي",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  },
  {
    id: 3,
    lectureTitle: "التخطيط الإعلامي لتحقيق التوازن",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  },
  {
    id: 4,
    lectureTitle: "مهارات القيادة الإعلامية",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  },
  {
    id: 5,
    lectureTitle: "إدارة الصورة الذهنية في الإعلام",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  },
  {
    id: 6,
    lectureTitle: "الظهور الإعلامي المتميز في وسائل الإعلام",
    lecturer: "........",
    duration: "ساعتان",
    timing: "19-21 م - مكة",
    date: "",
    fees: "$10"
  }
];
