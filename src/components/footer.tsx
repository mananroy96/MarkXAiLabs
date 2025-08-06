import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const footerSections = [
  {
    title: 'Links',
    links: [
      { href: '/', label: 'Home' },
      { href: '/edith', label: 'Edith' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: ' ',
    links: [
      { href: '#', label: ' ' },
      { href: '#', label: ' ' },
      { href: '#', label: ' ' },
    ],
  },
];

const legalLinks = [
  { href: '#', label: 'Term and Conditions' },
  { href: '#', label: 'Privacy Policy' },
];

export function Footer() {
  return (
    <footer className="pt-16 bg-gray-900 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 pb-16">
          {/* Logo & Social */}
          <div className="sm:col-span-6 lg:col-span-4">
            <Link href="/" aria-label="AI Labs Homepage">
              <Image
                src="/image/logo/Logo.svg"
                alt="AI Labs Logo"
                width={150}
                height={40}
                priority
                className="h-auto w-auto"
              />
            </Link>
            <div className="flex gap-6 mt-8">
              {/* {[
                { icon: 'fa6-brands:facebook-f', hover: 'hover:text-blue-500' },
                { icon: 'fa6-brands:instagram', hover: 'hover:text-pink-500' },
                { icon: 'fa6-brands:x-twitter', hover: 'hover:text-blue-400' },
              ].map(({ icon, hover }) => (
                <Link
                  key={icon}
                  href="#"
                  className={`text-white transition-colors duration-300 ${hover}`}
                  aria-label={icon.split(':')[1].replace(/-/g, ' ')}
                >
                  <Icon icon={icon} width={24} height={24} />
                </Link>
              ))} */}
            </div>
            <p className="mt-12 text-white text-xl font-medium select-none">2025 © | AI Labs</p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="sm:col-span-3 lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe Section */}
          <div className="sm:col-span-6 lg:col-span-4">
            <h3 className="text-xl font-semibold text-white">Subscribe</h3>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Subscribe to get the latest <br /> news from us.
            </p>
            <form className="relative mt-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="w-full rounded-lg border border-gray-700 bg-transparent py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-500 transition"
                aria-label="Subscribe"
              >
                <Icon icon="tabler:send" width={24} height={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 border-t border-gray-800 pt-6 text-gray-400 text-xs">
          {legalLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
