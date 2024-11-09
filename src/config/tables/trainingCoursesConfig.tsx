import { Button } from "antd";

interface TableRow {
  id: number;
  courseName: string;
  duration: string;
}

// TODO: DON'T Forget to add the name for the fetching APIs

export const trainingCoursesColumns = [
  {
    title: "اسم الدورة",
    dataIndex: "courseName",
    key: "courseName"
  },
  {
    title: "المدة",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "عدد الساعات",
    dataIndex: "hours",
    key: "hours"
  },
  {
    title: "تاريخ الدورة",
    dataIndex: "courseDate",
    key: "courseDate",
    render: () => <Button type="text">اختر</Button>
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
      <Button onClick={() => console.log(record.courseName)}>اشترك</Button>
    )
  }
];

export const trainingCoursesData = [
  {
    id: 1,
    courseName: "الإدارة الإستراتيجية",
    duration: "5 أيام",
    hours: "20 ساعة",
    courseDate: "",
    fees: "$150"
  },
  {
    id: 2,
    courseName: "التخطيط الإستراتيجي",
    duration: "3 أيام",
    hours: "12 ساعة",
    courseDate: "",
    fees: "$100"
  },
  {
    id: 3,
    courseName: "استراتيجيات تخطيط وإدارة الصورة الذهنية",
    duration: "5 أيام",
    hours: "25 ساعة",
    courseDate: "",
    fees: "$250"
  }
  // Add more rows here...
];
