import { Link } from "@/i18n/routing";


interface TableRow {
  id: number;
  title: string;
  specialization: string;
  duration: number;
  duration_type: string;
  price: number;
  from_date: string;
  to_date: string;
  presentation_format: string
}
export const lecturesColumns = [
  {
    title: "اسم الدورة",
    dataIndex: "title",
    key: "title",
    render: (_: unknown, record: TableRow) => (
        <Link href={`/lectures/${record.id}`} className="underline underline-offset-4 hover:underline-offset-2">
          {record.title}
        </Link>
    )
  },
  {
    title: "عدد الساعات",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "تاريخ الدورة من",
    dataIndex: "from_date",
    key: "from_date",
    render: (_: unknown, record: TableRow) => {return record?.from_date ? record?.from_date : <p>-----</p>}
  },
  {
    title: "تاريخ الدورة إلي",
    dataIndex: "to_date",
    key: "to_date",
    render: (_: unknown, record: TableRow) => {return record?.to_date ? record?.to_date : <p>-----</p>}
  },
  {
    title: "الرسوم",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "الاشتراك",
    dataIndex: "subscribe",
    key: "subscribe",
    render: (_: unknown, record: TableRow) => (
        <div className="flex gap-1 items-center justify-center">
          <input
              type="checkbox"
              onChange={() => console.log(`Subscribed to: ${record.title}`)}
          />
        </div>
    )
  }
];
