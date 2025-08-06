import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  businessEmail: z.string().email('Invalid email address.'),
  companyName: z.string().min(1, 'Company name is required.'),
  country: z.string().min(1, 'Country is required.'),
  state: z.string().min(1, 'State is required.'),
  phone: z.string().min(1, 'Phone number is required.').regex(/^\+?[0-9\s-()]+$/, 'Invalid phone number format.'),
  organizationType: z.string().min(1, 'Organization type is required.'),
  query: z.string().min(10, 'Query must be at least 10 characters.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
