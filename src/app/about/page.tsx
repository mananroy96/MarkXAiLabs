'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

type NavLink = {
  href: string;
  label: string;
};

const aboutNavLinks: NavLink[] = [
  { href: '/edith', label: 'Edith' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white font-body">
      <Header navLinks={aboutNavLinks} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{ textShadow: '0 0 20px rgba(13, 228, 239, 0.7)' }}
          >
            About AI Labs
          </h1>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center text-lg sm:text-xl text-gray-300 leading-relaxed">
            {/* Text Section */}
            <div className="text-center md:text-left">
              <p className="mb-6">
                AI Labs was founded on the principle that research, innovation, and execution are the cornerstones of progress. We are a collective of thinkers, creators, and strategists dedicated to pushing the boundaries of what's possible in the digital asset space.
              </p>
              <p className="mb-6">
                Our mission is to build institutional-grade tools for serious traders, providing an ecosystem that is secure, efficient, and free from the noise of mainstream platforms. We believe in empowering our members with deep market insights and cutting-edge technology.
              </p>
              <p>
                We operate with a forward-thinking mindset, constantly exploring new horizons and anticipating the needs of tomorrow's financial landscape. At AI Labs, we don't just follow the curve—we define it.
              </p>
            </div>

            {/* Image Section */}
            <div>
              <Image
                src="https://placehold.co/600x600.png"
                alt="AI Labs Team"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl shadow-cyan-500/20 w-full h-auto"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
