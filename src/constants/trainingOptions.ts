import { Option } from "@/types/shared";

export const eventTypeOptions: Option[] = [
  { value: "course", label: "دورة" },
  { value: "lecture", label: "محاضرة" },
  { value: "other", label: "أخري" }
];

export const requestEntityOptions: Option[] = [
  { value: "individual", label: "فرد" },
  { value: "organization", label: "مؤسسة" }
];
