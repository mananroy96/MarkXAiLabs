'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type NavLink = {
  href: string;
  label: string;
};

const defaultNavLinks: NavLink[] = [
  { href: '/edith', label: 'Edith' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

interface HeaderProps {
  navLinks?: NavLink[];
}

export function Header({ navLinks = defaultNavLinks }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<header
  className={cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
    isScrolled
      ? 'bg-black/80 backdrop-blur-lg shadow-md'
      : 'bg-transparent'
  )}
>
  <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between py-6 md:py-7">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/image/logo/Logo.svg"
          alt="AI Labs Logo"
          width={160}
          height={50}
          className="w-auto h-auto"
          quality={100}
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-white/80 hover:text-white transition-colors duration-200 text-sm md:text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80 focus:outline-none w-10 h-10"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/90 backdrop-blur-lg border-l border-gray-800 text-white p-6"
          >
            <div className="flex flex-col items-start space-y-6 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </div>
</header>

  );
}
