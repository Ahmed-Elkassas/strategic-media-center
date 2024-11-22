import { Button, DatePicker } from "antd";
import { Link } from "@/i18n/routing";

// ! Please move this to shared
interface TableRow {
    id: number;
    lectureTitle: string;
    lecturer: string;
    duration: string;
    timing: string;
    date: string;
    fees: string;
}

export const lecturesPaymentColumns = [
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
    key: "lecturer",
},
{
    title: "المدة",
        dataIndex: "duration",
    key: "duration",
},
{
    title: "التوقيت",
        dataIndex: "timing",
    key: "timing",
},
{
    title: "التاريخ",
        dataIndex: "date",
    key: "date",
    render: () => <DatePicker placeholder="اختر" style={{ width: "100px" }} />,
},
{
    title: "قيمة الرسوم",
        dataIndex: "fees",
    key: "fees",
},
{
    title: "الاشتراك",
        dataIndex: "subscribe",
    key: "subscribe",
    render: (_: unknown, record: TableRow) => (
    <Button onClick={() => console.log(`Subscribe to lecture ID: ${record.id}`)}>
    اشترك
    </Button>
),
},
];

export const lecturesFeePaymentData = [
    {
        id: 1,
        lectureTitle: "أهمية التخطيط الاستراتيجي للمؤسسات الإعلامية",
        lecturer: "محاضر 1",
        duration: "2 ساعات",
        timing: "9-7 مساء - مكة",
        fees: "$10",
        date: "",
    },
    {
        id: 2,
        lectureTitle: "استراتيجيات تحليل نجاح العمل الإعلامي",
        lecturer: "محاضر 2",
        duration: "2 ساعات",
        timing: "9-7 مساء - مكة",
        date: "",
        fees: "$10",
    },
    // Add other rows as needed...
];
