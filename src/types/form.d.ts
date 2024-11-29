export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SubscriptionFormValues {
  name: string;
  // firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirmation: string;
  type: string;
  organization?: string;
  duration: string;
  job?: string;
  photo?: string;
  resident_country: string;
  contact_type: string;
  confirmData_accuracy: boolean;
  accept_terms: boolean;
  notify_events?: boolean;
  phone: string;
}

export interface SignupFormValues {
  name: string;
  second_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  job?: string;
  confirm_data_accuracy: boolean;
  accept_terms: boolean;
  notify_events?: boolean;
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

export interface UploadMaterialFormValues {
  materialType: string;
  authorName: string;
  mobileNumber: string;
  email: string;
  materialSpecialization: string;
  materialSummary: string;
  firstPublicationDate: string;
  upload?: string;
  otherAuthors?: string;
}
