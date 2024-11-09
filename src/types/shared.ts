import { ReactNode } from "react";

export interface Option {
  value: string;
  label: string;
}

export type SuccessMessagePageProps = {
  breadcrumbItems: { title: ReactNode }[];
  message: ReactNode;
  additionalMessage?: ReactNode;
  children?: ReactNode;
};
