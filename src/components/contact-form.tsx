"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Assuming these are available from your project's UI library
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Loader2 } from "lucide-react"; // For loading spinner
import { motion } from "framer-motion"; // For animations
import Image from "next/image"; // For Next.js Image component

// ✅ Validation Schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  businessEmail: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required (at least 10 digits)"),
  query: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Exporting as default to align with common Next.js patterns for components
// that are the primary export of a file.
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error messages

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      phone: "",
      query: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null); // Clear any previous error messages

    try {
      // IMPORTANT: Replace 'YOUR_SHEETDB_API_URL' with your actual SheetDB.io API URL.
      // You will get this URL after setting up your Google Sheet with SheetDB.io.
      // Example: https://sheetdb.io/api/v1/YOUR_API_ID
      const sheetDBApiUrl = "https://sheetdb.io/api/v1/i2pzp58gubuoq"; // <<<--- REPLACE THIS!

      // Data to be sent to SheetDB.io.
      // The keys here should match your Google Sheet column headers exactly.
      const payload = {
        "First Name": data.firstName,
        "Last Name": data.lastName,
        "Email": data.businessEmail,
        "Phone": data.phone,
        "Message": data.query,
        // You can add more fields if your spreadsheet has more columns, e.g.:
        // "Submission Date": new Date().toLocaleString(),
      };

      const response = await fetch(sheetDBApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // SheetDB.io expects JSON for POST requests
        },
        body: JSON.stringify(payload), // Convert the payload to a JSON string
      });

      if (response.ok) {
        form.reset();
        setShowThankYou(true);
        console.log("✅ Form submission sent successfully to SheetDB.io");
      } else {
        const errorText = await response.text();
        console.error("❌ Failed to send form to SheetDB.io:", response.status, errorText);
        setErrorMessage("Failed to send your message. Please try again later.");
      }
    } catch (err) {
      console.error("❌ Network error submitting form:", err);
      setErrorMessage("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-12 md:py-16 bg-darkmode" id="contact">
      {/* ✅ Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-full max-w-sm text-center">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="mb-4">Your message has been sent successfully.</p>
            <Button
              onClick={() => setShowThankYou(false)}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* ✅ Error Message Modal */}
      {errorMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-red-100 text-red-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center border border-red-400">
            <h3 className="text-xl font-bold mb-2">Submission Error</h3>
            <p className="mb-4">{errorMessage}</p>
            <Button
              onClick={() => setErrorMessage(null)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* ✅ Contact Form */}
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-2xl font-semibold mb-3">Contact Us</p>
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-5 leading-tight">
              Get in Touch with Us
            </h2>
            <p className="text-muted text-opacity-70 mb-10 text-white max-w-lg">
              We’d love to hear from you! Send us a message and we’ll respond as soon as possible.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-6 w-full max-w-lg"
                noValidate
              >
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First Name"
                          className="bg-transparent border border-muted rounded-md p-3 text-white placeholder-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last Name"
                          className="bg-transparent border border-muted rounded-md p-3 text-white placeholder-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Phone Number"
                          type="tel"
                          className="bg-transparent border border-muted rounded-md p-3 text-white placeholder-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="businessEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Your Email"
                          className="bg-transparent border border-muted rounded-md p-3 text-white placeholder-gray-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Query */}
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your Message"
                          rows={5}
                          className="bg-transparent border border-muted rounded-md p-3 text-white placeholder-gray-500 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-3 font-semibold rounded-md flex items-center justify-center"
                >
                  {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Image
              src="/image/contact/img-upgrade.png" // Ensure this path is correct
              alt="Contact Illustration"
              width={625}
              height={580}
              className="object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
