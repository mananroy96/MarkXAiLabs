'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import Image from 'next/image';

const ResearchSection = () => (
  <section className="w-full">
    <div className="card-glow-hover rounded-3xl p-8 md:p-12 bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-primary mb-3">Research</h2>
          <p className="text-2xl font-semibold text-white mb-8 italic">
            "Informed decisions begin with deep understanding."
          </p>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>We track emerging trends, on-chain data, and macro signals before they become headlines.</p>
            <p>Our team applies quantitative research, risk modeling, and sector intelligence to guide platform strategy.</p>
            <p>Members gain access to curated insights, not noise.</p>
            <p>Every coin listed, every feature released—driven by research, not hype.</p>
          </div>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Abstract white geometric structure"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
            data-ai-hint="white abstract"
          />
        </div>
      </div>
    </div>
  </section>
);

const InnovationSection = () => (
  <section className="w-full">
    <div className="card-glow-hover rounded-3xl p-8 md:p-12 bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-last md:order-first">
          <Image
            src="https://placehold.co/600x800.png"
            alt="AI Brain illustration"
            width={600}
            height={800}
            className="rounded-2xl shadow-lg"
            data-ai-hint="ai brain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-primary mb-3">Innovation</h2>
          <p className="text-2xl font-semibold text-white mb-8 italic">"We build beyond what's standard."</p>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>From custom-built engines to proprietary trading tools—innovation is baked into our infrastructure.</p>
            <p>We can’t imitate existing platforms—we rethink what trading should feel like in a decentralized future.</p>
            <p>Every interaction on our platform is designed with efficiency, clarity, and intention.</p>
            <p>We’re creating tools for tomorrow’s finance, not today’s status quo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExecutionSection = () => (
  <section className="w-full">
    <div className="card-glow-hover rounded-3xl p-8 md:p-12 bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-primary mb-3">Execution</h2>
          <p className="text-2xl font-semibold text-white mb-8 italic">
            "Because timing is nothing without precision."
          </p>
          <h3 className="text-xl font-bold text-white mb-4">Key Pointers:</h3>
          <ul className="space-y-3 text-gray-300 list-disc list-inside text-lg leading-relaxed">
            <li>Ultra-fast execution, institutional-grade latency.</li>
            <li>Private, Secure, Optimized.</li>
            <li>Trade with confidence, knowing that every order is backed by high-performance architecture.</li>
            <li>Execution is more than speed—it’s accuracy, stability, and discretion.</li>
            <li>On our platform, you don’t just trade—you operate with conviction.</li>
          </ul>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x800.png"
            alt="Footprints on a path"
            width={600}
            height={800}
            className="rounded-2xl shadow-lg"
            data-ai-hint="footprints path"
          />
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-body">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center space-y-16">
        <ResearchSection />
        <InnovationSection />
        <ExecutionSection />
        {/* Uncomment below if you want to add ContactForm */}
        {/* 
        <section id="contact" className="max-w-6xl w-full scroll-m-20">
          <div className="text-card-glow rounded-3xl p-8 md:p-12">
            <ContactForm />
          </div>
        </section> 
        */}
      </main>
      <Footer />
    </div>
  );
}
