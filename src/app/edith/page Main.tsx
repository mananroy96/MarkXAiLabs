"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { KeyRound } from "lucide-react";

const EdithHeader = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo/Logo.svg"
            alt="AI Labs Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
            quality={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}

          {/* Login Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsLoginVisible(!isLoginVisible)}
              aria-label="Toggle login menu"
              className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <KeyRound className="h-6 w-6 text-cyan-400 animate-pulse" />
            </button>

            {isLoginVisible && (
              <a
                href="/login"
                className="absolute top-full right-0 mt-2 py-2 px-4 bg-gray-800/90 backdrop-blur-lg rounded-md text-white shadow-lg text-sm whitespace-nowrap z-30"
              >
                Client Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

const EthereumIcon = () => (
  <div className="absolute top-24 right-10 opacity-50">
    <svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#1C1C1C"
        stroke="#333"
        strokeWidth="2"
      />
      <path d="M50 25.5L28 50l22 9.5 22-9.5L50 25.5z" fill="#3C3C3C" />
      <path d="M50 74.5L28 59.5l22 9.5V74.5z" fill="#3C3C3C" />
      <path d="M50 74.5L72 59.5 50 69v5.5z" fill="#2E2E2E" />
      <path d="M28 50l22-10v29.5L28 50z" fill="#3C3C3C" />
      <path d="M72 50L50 40v29.5L72 50z" fill="#2E2E2E" />
    </svg>
  </div>
);

const BitcoinCoin = () => (
  <div className="absolute -top-12 -left-16 w-32 h-32">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient
          id="bitcoin-gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: "#F7931A", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FBB954", stopOpacity: 1 }}
          />
        </radialGradient>
        <filter
          id="bitcoin-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="4"
            dy="4"
            stdDeviation="4"
            floodColor="#000"
            floodOpacity="0.4"
          />
        </filter>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="#F7931A"
        filter="url(#bitcoin-shadow)"
      />
      <circle cx="50" cy="50" r="42" fill="url(#bitcoin-gradient)" />
      <path
        d="M 50,50 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0"
        fill="none"
        stroke="#FBB954"
        strokeWidth="2"
      />
      <text
        x="50"
        y="68"
        fontSize="45"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        B
      </text>
    </svg>
  </div>
);

const ApeCoin = () => (
  <div className="absolute -bottom-12 -right-0 w-32 h-32">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient
          id="apecoin-gradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: "#2563EB", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
          />
        </radialGradient>
        <filter
          id="apecoin-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="4"
            dy="4"
            stdDeviation="4"
            floodColor="#000"
            floodOpacity="0.4"
          />
        </filter>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="#2563EB"
        filter="url(#apecoin-shadow)"
      />
      <circle cx="50" cy="50" r="42" fill="url(#apecoin-gradient)" />
      <path
        d="M35 65 Q 50 80, 65 65 M 40 55 Q 50 70, 60 55 M 30 45 Q 50 60, 70 45"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 45 40 Q 50 30, 55 40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 50 35 L 50 30 M 45 32 L 42 30 M 55 32 L 58 30"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 40,60 A 10 10 0 0 0 60 60"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const AtomCoin = () => (
  <div className="absolute -top-12 -left-16 w-40 h-40">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="atom-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="5"
            dy="5"
            stdDeviation="5"
            floodColor="#000"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="#2E3148"
        filter="url(#atom-shadow)"
      />
      <circle cx="50" cy="50" r="42" fill="#1C1E2E" />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="#4A4E6C"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="10" fill="#4A4E6C" />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        fill="none"
        stroke="#B0B3D1"
        strokeWidth="1.5"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        transform="rotate(60 50 50)"
        fill="none"
        stroke="#B0B3D1"
        strokeWidth="1.5"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        transform="rotate(120 50 50)"
        fill="none"
        stroke="#B0B3D1"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

const EosCoin = () => (
  <div className="absolute -bottom-16 -right-0 w-40 h-40">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="eos-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="5"
            dy="5"
            stdDeviation="5"
            floodColor="#000"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="45" fill="#2C2F48" filter="url(#eos-shadow)" />
      <circle cx="50" cy="50" r="42" fill="#1A1C2A" />
      <path
        d="M50 25 L68 38 L68 62 L50 75 L32 62 L32 38 Z M50 31 L63 38 L50 45 L37 38 Z M36 42 L50 50 L50 69 L36 61 Z M64 42 L50 50 L50 69 L64 61 Z"
        fill="#EAEAEA"
      />
    </svg>
  </div>
);

const TradingOpportunitySection = () => {
  const coins = [
    {
      name: "Bitcoin",
      ticker: "BTC",
      price: "103,600.00",
      change: "+0.38%",
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c258d5/svg/color/btc.svg",
      iconBg: "bg-orange-500",
    },
    {
      name: "Ethereum",
      ticker: "ETH",
      price: "2,354.43",
      change: "+4.56%",
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c258d5/svg/color/eth.svg",
      iconBg: "bg-indigo-500",
    },
    {
      name: "BNB",
      ticker: "BNB",
      price: "661.33",
      change: "+4.95%",
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c258d5/svg/color/bnb.svg",
      iconBg: "bg-yellow-500",
    },
    {
      name: "XRP",
      ticker: "XRP",
      price: "2.38",
      change: "+2.94%",
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c258d5/svg/color/xrp.svg",
      iconBg: "bg-gray-800",
    },
    {
      name: "Solana",
      ticker: "SOL",
      price: "171.34",
      change: "+4.50%",
      icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c258d5/svg/color/sol.svg",
      iconBg: "bg-purple-500",
    },
  ];


  return (
    <section className="py-24 relative">
      <BitcoinCoin />
      <ApeCoin />
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl font-bold text-center mb-12 text-white"
          style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
        >
          Catch Your Next Trading <br /> Opportunity
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">

        {/* New Code In This Start */}
        
        {/* New Code In This End */}

        {/* --------------- */}
          {/* <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <button className="text-white text-lg font-semibold relative">
                Popular
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400"></span>
              </button>
              <button className="text-gray-400 text-lg hover:text-white">
                New Listing
              </button>
            </div>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              View All 350+ Coins &gt;
            </Link>
          </div>
          <div className="space-y-4">
            {coins.map((coin) => (
              <div
                key={coin.ticker}
                className="grid grid-cols-3 md:grid-cols-4 items-center p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-4 col-span-2 md:col-span-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${coin.iconBg} p-2`}
                  >
                    <Image
                      src={coin.icon}
                      alt={`${coin.name} logo`}
                      width={24}
                      height={24}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-white text-lg">
                      {coin.ticker}
                    </span>
                    <span className="text-gray-400">{coin.name}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold text-lg">
                    ${coin.price}
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-green-400 font-semibold">{coin.change}</p>
                </div>
              </div>
            ))}
          </div> */}
        {/* --------------- */}

        </div>
      </div>
    </section>
  );
};

const KeyFeaturesSection = () => {
  const features = [
    {
      title: "Invite-Only Access",
      description: "A curated network of verified, high-trust traders",
    },
    {
      title: "Wide Asset Coverage",
      description:
        "Trade across a vast range of top and emerging cryptocurrencies",
    },
    {
      title: "Ultra-Fast Trade Execution",
      description:
        "Built on low-latency infrastructure for real-time performance",
    },
    {
      title: "Advanced Charting & Analytics",
      description: "Pro-grade tools for technical analysis and market tracking",
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, cold wallet storage, and multi-layered authentication",
    },
  ];

  return (
    <section className="py-24 relative">
      <AtomCoin />
      <EosCoin />
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl font-bold text-center mb-20 text-white"
          style={{ textShadow: "0 0 20px rgba(13, 228, 239, 0.7)" }}
        >
          Key Features & Technology
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-2 border-gray-700/50 rounded-full animate-spin-slow"></div>
              <div className="absolute w-3/4 h-3/4 border-2 border-gray-700/50 rounded-full animate-spin-medium"></div>
              <div className="absolute w-1/2 h-1/2 border-2 border-gray-700/50 rounded-full animate-spin-fast"></div>
            </div>

            <div className="absolute top-[10%] left-[42%]">
              <Image
                src="https://placehold.co/64x64.png"
                data-ai-hint="dollar coin"
                alt="dollar coin"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="absolute top-[42%] right-[5%]">
              <Image
                src="https://placehold.co/64x64.png"
                data-ai-hint="safe vault"
                alt="safe vault"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="absolute bottom-[15%] right-[25%]">
              <Image
                src="https://placehold.co/64x64.png"
                data-ai-hint="bitcoin coin"
                alt="bitcoin coin"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="absolute bottom-[42%] left-[5%]">
              <Image
                src="https://placehold.co/64x64.png"
                data-ai-hint="password lock"
                alt="password lock"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="absolute top-[25%] right-[20%]">
              <Image
                src="https://placehold.co/64x64.png"
                data-ai-hint="pie chart"
                alt="pie chart"
                width={64}
                height={64}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div>
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function EdithPage() {
  return (
    <div className="bg-black min-h-screen text-white font-body">
      <EdithHeader />
      <div className="relative isolate min-h-screen flex items-center justify-center pt-24 md:pt-32">
        <EthereumIcon />

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6BDECA] to-[#1C2527] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <main className="container mx-auto px-4 sm:px-6 lg:px-10 z-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Left text content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                AI Labs is an invite-only crypto trading platform built for
                serious traders.
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-4">
                We offer access to a vast range of coins, from top tokens to
                emerging assets—all on a secure, high-performance interface.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-4">
                Our curated membership ensures a noise-free, premium trading
                environment. Whether you're scaling volume or exploring new
                markets, we give you the tools, speed, and precision to trade
                ahead of the curve.
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Welcome to the next level of crypto.
              </p>
            </div>

            {/* Right image */}
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Modern architecture"
                width={500}
                height={700}
                className="rounded-3xl shadow-2xl shadow-cyan-500/20 object-cover"
                data-ai-hint="architecture building"
              />
            </div>
          </div>
        </main>
      </div>
      <TradingOpportunitySection />
      <KeyFeaturesSection />
      {/* <section id="contact" className="max-w-6xl w-full mx-auto scroll-m-24" >
              <div className="text-card-glow rounded-3xl p-8 md:p-12 mb-6">
                <ContactForm />
              </div>
            </section> */}
      <Footer />
    </div>
  );
}
