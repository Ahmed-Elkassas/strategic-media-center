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

export interface PrivateCourseSubscriptionFormValues {
  type: string; // Type of the event (e.g., course, lecture)
  shape: string; // Presentation format of the event
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  phone: string;
  customEventTitle?: string; // Optional field for custom event titles
  jobTitle: string;
  requestEntity: string; // Individual or organization
  organizationName: string;
  organizationNature: string; // Media-related or non-media
  courseTitle: string;
  eventCountry: string;
  preferredDate: string; // Use `string` to handle the date as a formatted string
  additionalInfo?: string; // Optional additional information
  requestDate: string; // Auto-filled date
  confirmDataAccuracy: boolean; // Checkbox for data accuracy confirmation
}
