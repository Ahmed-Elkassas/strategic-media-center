export function getCountryOptions(
  options: { code: string; labelKey: string }[],
  t: (key: string) => string
) {
  return options.map((country) => ({
    label: t(`subscriptionForm.${country.labelKey}`),
    value: country.code
  }));
}
