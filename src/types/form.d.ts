export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SubscriptionFormValues {
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscriptionType: string;
  organizationName?: string;
  subscriptionDuration: string;
  jobRole?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar?: any;
  preferredContactMethod: string;
  confirmDataAccuracy: boolean;
  acceptTerms: boolean;
  notifyEvents?: boolean;
}

export interface SignupFormValues {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
  jobRole?: string;
  confirmDataAccuracy: boolean;
  acceptTerms: boolean;
  notifyEvents?: boolean;
}

export interface ConsultingRequestFormValues {
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  jobPosition: string;
  phone: string;
  organizationName: string;
  establishmentDate: string;
  ownershipType: string;
  wayType: string;
  country: string;
  numberOfEmployees: string;
  numberOfOffices: string;
  institutionChallenges?: string;
  estimatedBudget: string;
  additionalInfo?: string;
}
