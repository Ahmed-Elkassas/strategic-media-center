import { Link } from "@/i18n/routing";
import {Button, Modal} from "antd";

interface TableRow {
    id: number;
    title: string;
    start_date: string;
    forum_ids: number[];
}

const handleViewResults = () => {

    // Show modal for non-subscribers
    Modal.warning({
        title: "الرجاء الاشتراك ",
        content: "المشاركة في المنتدیات متاحة للأعضاء" +
            "المشتركین في المركز، فإذا كنت مشتركا"  +
            " یرجى تسجیل الدخول، وإذا لم تكن مشتركا یمكنكم التصفح فقط بعد تسجیل الدخول",
        okText: "موافق",
    });

};

export const forumsColumns = [
    {
        title: "عنوان المنتدى",
        dataIndex: "title",
        key: "title",
        render: (_: unknown, record: TableRow) => (
            <Link
                href={`/forums/dialogue-details/${record.id}`}
                className="underline underline-offset-4 hover:underline-offset-2"
            >
                {record.title}
            </Link>
        )
    },
    {
        title: "تاريخ الإنشاء",
        dataIndex: "start_date",
        key: "start_date"
    },
    {
        title: "المشاركين",
        dataIndex: "forum_ids",
        key: "forum_ids",
        render: (_: unknown, record: TableRow) => (
           record?.forum_ids?.length > 0 ? record?.forum_ids?.length : 0
        )
    },
    {
        title: "المشاركة",
        dataIndex: "participate",
        key: "participate",
        render: () => (
            <Button
                type="text"
                onClick={() => handleViewResults()}
            >
                شارك
            </Button>
        )
    }
];
