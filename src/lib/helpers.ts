export function getCountryOptions(
  options: { code: string; labelKey: string }[],
  t: (key: string) => string
) {
  return options.map((country) => ({
    label: t(`subscriptionForm.${country.labelKey}`),
    value: country.code
  }));
}

type DirectionType = "ltr" | "rtl";

const localeDirection: Record<string, DirectionType> = {
  ar: "rtl", // Arabic
  en: "ltr" // English
};

export const getDirection = (locale: string): DirectionType =>
  localeDirection[locale] || "ltr";
