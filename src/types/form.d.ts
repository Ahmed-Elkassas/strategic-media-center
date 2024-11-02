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
  avatar?: any; // Refine based on your requirements
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
