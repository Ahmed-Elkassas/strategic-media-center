import { Option } from "@/types/shared";

export const eventTypeOptions: Option[] = [
  { value: "course", label: "دورة" },
  { value: "lecture", label: "محاضرة" },
  { value: "other", label: "أخري" }
];

export const eventPresentationForm: Option[] = [
  { value: "remote", label: "عن بعد" },
  { value: "lecture", label: "حضوریة" },
  { value: "individual", label: "فردیة" },
  { value: "additional", label: "إضافیة" }
];

export const requestEntityOptions: Option[] = [
  { value: "individual", label: "فرد" },
  { value: "organization", label: "مؤسسة" }
];

export const organizationNatureOptions: Option[] = [
  { value: "media", label: "إعلامیة" },
  { value: "nonMedia", label: "غیر إعلامیة" }
];
