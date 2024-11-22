import { Link } from "@/i18n/routing";
import {Button, Modal} from "antd";

interface TableRow {
    id: number;
    topic: string;
    date: string;
    participants: number;
}


// Function to handle "عرض" click
const handleViewResults = () => {
    // if (isUserSubscribed) {
    //     // Redirect to results page if subscribed
    //     window.location.href = `/polls/open-opinion-polls/results/${id}`;
    // }

        // Show modal for non-subscribers
        Modal.warning({
            title: "الرجاء الاشتراك أو تسجيل الدخول",
            content: "لعرض النتائج يرجى الاشتراك في المركز أو تسجيل الدخول.",
            okText: "موافق",
        });

};

export const openOpinionPollsColumns = [
    {
        title: "موضوع قياس الرأي",
        dataIndex: "topic",
        key: "topic",
        render: (_: unknown, record: TableRow) => (
            <Link
                href={`/opinion-polls/opinion-details/${record.id}`}
                className="underline underline-offset-4 hover:underline-offset-2"
            >
                {record.topic}
            </Link>
        ),
    },
    {
        title: "تاريخ إجرائه",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "عدد المشاركين",
        dataIndex: "participants",
        key: "participants",
    },
    {
        title: "النتائج",
        dataIndex: "results",
        key: "results",
        render: () => (
            <Button
                type="link"
                onClick={() => handleViewResults()}
                className="underline underline-offset-4 hover:underline-offset-2"
            >
                عرض
            </Button>
        ),
    },
];

export const openOpinionPollsData = [
    {
        id: 1,
        topic: "أهمية التخطيط الاستراتيجي للمؤسسات الإعلامية",
        date: ".../../....",
        participants: 39,
    },
    {
        id: 2,
        topic: "دور الإعلام في تعزيز الاستثمار والتنمية",
        date: ".../../....",
        participants: 24,
    },
    {
        id: 3,
        topic: "دور الإعلام الحكومي في المحافظة على الهوية الوطنية",
        date: ".../../....",
        participants: 14,
    },
    {
        id: 4,
        topic: "مهارات التخطيط الإعلامي الاستراتيجي وآثاره المرتبة عليه",
        date: ".../../....",
        participants: 26,
    },
    {
        id: 5,
        topic: "التربية السياسية والاقتصادية على إعلام وتنشئتها",
        date: ".../../....",
        participants: 7,
    },
    {
        id: 6,
        topic: "الدور الإعلامي في دعم الشباب والنوادي",
        date: ".../../....",
        participants: 7,
    },
];
