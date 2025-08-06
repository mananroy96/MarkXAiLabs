
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Edith - AI Labs',
  description: 'Research, Innovation & Execution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="starfield-background">
          <div className="stars stars-sm"></div>
          <div className="stars stars-md"></div>
          <div className="stars stars-lg"></div>
        </div>
        <main className="relative z-10">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
