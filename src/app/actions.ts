'use server';

import { contactFormSchema, type ContactFormValues } from '@/lib/schema';

type FormState = {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>> & { _form?: string[] };
}

export async function handleContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data.entries());
  const validationResult = contactFormSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    // The AI functionality was here. Now we just return a static message.
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you shortly.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      errors: { _form: ['An unexpected error occurred. Please try again.'] },
    };
  }
}
