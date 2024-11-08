import { Option } from "@/types/shared";

export const employeeOptions: Option[] = [
  { value: "lessThan50", label: "أقل من ٥٠" },
  { value: "50-100", label: "٥٠-١٠٠" },
  { value: "101-200", label: "١٠١-٢٠٠" },
  { value: "201-500", label: "٢٠١-٥٠٠" },
  { value: "501-1000", label: "٥٠١-١٠٠٠" },
  { value: "1001-2000", label: "١٠٠١-٢٠٠٠" },
  { value: "moreThan2000", label: "أكثر من ٢٠٠٠" }
];

export const officeOptions: Option[] = [
  { value: "none", label: "لا یوجد" },
  { value: "1-5", label: "١-٥" },
  { value: "6-10", label: "٦-١٠" },
  { value: "11-20", label: "١١-٢٠" },
  { value: "moreThan20", label: "أكثر من ٢٠" }
];

export const ownershipTypeOptions: Option[] = [
  { value: "governmental", label: "حكومية" },
  { value: "private", label: "خاصة" },
  { value: "nonprofit", label: "خيْريّة" }
];

export const wayTypeOptions: Option[] = [
  { value: "tv", label: "قناة تلفزیونیة" },
  { value: "listen", label: "إذاعة مسموعة" },
  { value: "websites", label: "موقع إلكتروني" },
  { value: "socials", label: "منصات تواصل اجتماعي" },
  { value: "multi", label: "متعددة" }
];

export const jobPositionOptions: Option[] = [
  { value: "ceo", label: "رئيس مجلس إدارة" },
  { value: "manager", label: "مدير عام" },
  { value: "executiveManager", label: "مدير تنفيذي" },
  { value: "other", label: "أخرى" }
];

export const budgetOptions: Option[] = [
  { value: "lessThan1M", label: "أقل من مليون $" },
  { value: "1To5M", label: "١-٥ مليون $" },
  { value: "6To10M", label: "٦-١٠ مليون $" },
  { value: "11To20M", label: "١١-٢٠ مليون $" },
  { value: "21To50M", label: "٢١-٥٠ مليون $" },
  { value: "51To100M", label: "٥١-١٠٠ مليون $" },
  { value: "101To200M", label: "١٠١-٢٠٠ مليون $" },
  { value: "201To500M", label: "٢٠١-٥٠٠ مليون $" },
  { value: "moreThan500M", label: "أكثر من ٥٠٠ مليون $" }
];

export const institutionChallenges: Option[] = [
  { value: "editorial", label: "تحریریة" },
  { value: "administrative", label: "إداریة" },
  { value: "financial", label: "مالیة" },
  { value: "marketing", label: "تسویقیة" },
  { value: "other", label: "أخرى" }
];
