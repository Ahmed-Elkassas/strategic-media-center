export const feePaymentCoursesDataSource = [
  {
    key: "1",
    courseName: "التخطيط الاستراتيجي للاتصال المؤسسي",
    duration: "٥ أيام",
    hours: "٢٠ ساعة",
    date: "اختر",
    fee: "$150"
  },
  {
    key: "2",
    courseName: "استراتيجيات إدارة الصورة الذهنية",
    duration: "٥ أيام",
    hours: "٢٠ ساعة",
    date: "اختر",
    fee: "$150"
  },
  {
    key: "3",
    courseName: "التخطيط الاستراتيجي للهيئة المؤسسية",
    duration: "٢ أيام",
    hours: "١٢ ساعة",
    date: "اختر",
    fee: "$100"
  }
];

export const feePaymentCoursesColumns = [
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
    dataIndex: "date",
    key: "date",
    render: () => <span>اختر</span>
  },
  {
    title: "قيمة الرسوم",
    dataIndex: "fee",
    key: "fee"
  }
];
