"use client";

import { Header } from "@/components/header";
import  ContactForm  from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Have a question, feedback, or want to collaborate? We'd love to hear
          from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-10 md:p-14 shadow-lg shadow-cyan-700/30 text-white">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
