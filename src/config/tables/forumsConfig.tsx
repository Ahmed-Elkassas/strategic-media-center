import { Link } from "@/i18n/routing";
import {Button, Modal} from "antd";

interface TableRow {
    id: number;
    forumTitle: string;
    creationDate: string;
    participants: number;
}

const handleViewResults = () => {

    // Show modal for non-subscribers
    Modal.warning({
        title: "الرجاء الاشتراك أو تسجيل الدخول",
        content: "المشاركة في المنتدیات متاحة للأعضاء" +
            "المشتركین في المركز، فإذا كنت مشتركا"  +
            " یرجى تسجیل الدخول، وإذا لم تكن مشتركا یمكنكم التصفح فقط بعد تسجیل الدخول",
        okText: "موافق",
    });

};

export const forumsColumns = [
    {
        title: "عنوان المنتدى",
        dataIndex: "forumTitle",
        key: "forumTitle",
        render: (_: unknown, record: TableRow) => (
            <Link
                href={`/forums/dialogue-details/${record.id}`}
                className="underline underline-offset-4 hover:underline-offset-2"
            >
                {record.forumTitle}
            </Link>
        )
    },
    {
        title: "تاريخ الإنشاء",
        dataIndex: "creationDate",
        key: "creationDate"
    },
    {
        title: "المشاركين",
        dataIndex: "participants",
        key: "participants"
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

export const forumsData = [
    {
        id: 1,
        forumTitle: "أهمية التخطيط الاستراتيجي للمؤسسات الإعلامية",
        creationDate: ".../.../....",
        participants: 39
    },
    {
        id: 2,
        forumTitle: "دور الإعلام في تعزيز الاستقرار والتنمية",
        creationDate: ".../.../....",
        participants: 24
    },
    {
        id: 3,
        forumTitle: "دور الإعلام الحكومي في المحافظة على الهوية الوطنية وثوابتها",
        creationDate: ".../.../....",
        participants: 14
    },
    {
        id: 4,
        forumTitle: "أسباب غياب التخطيط الاستراتيجي للمحتوى الإعلامي، والآثار الناتجة عليه",
        creationDate: ".../.../....",
        participants: 26
    },
    {
        id: 5,
        forumTitle: "المهارة السياسية والاقتصادية وأثرها على الأمة والدولة والمجتمع والفرد",
        creationDate: ".../.../....",
        participants: 7
    },
    {
        id: 6,
        forumTitle: "التأثير الإعلامي بين الغموض والفوضى",
        creationDate: ".../.../....",
        participants: 7
    },
    {
        id: 7,
        forumTitle: "المسؤولية الإعلامية بين الجهات المالكة للمؤسسات الإعلامية والجمهور المستقل",
        creationDate: ".../.../....",
        participants: 45
    },
    {
        id: 8,
        forumTitle: "دور الصورة الذهنية في المحافظة على سمعة المؤسسة وتحقيق أهدافها",
        creationDate: ".../.../....",
        participants: 45
    }
];
