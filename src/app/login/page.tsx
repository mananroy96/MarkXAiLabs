
'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const EthereumCoin = () => (
    <div className="w-24 h-24">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#1C1C1C" stroke="#333" strokeWidth="2"/>
            <path d="M50 25.5L28 50l22 9.5 22-9.5L50 25.5z" fill="#3C3C3C"/>
            <path d="M50 74.5L28 59.5l22 9.5V74.5z" fill="#3C3C3C"/>
            <path d="M50 74.5L72 59.5 50 69v5.5z" fill="#2E2E2E"/>
            <path d="M28 50l22-10v29.5L28 50z" fill="#3C3C3C"/>
            <path d="M72 50L50 40v29.5L72 50z" fill="#2E2E2E"/>
        </svg>
    </div>
);

const BitcoinCoin = () => (
    <div className="w-24 h-24">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="bitcoin-gradient-login" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: '#F7931A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FBB954', stopOpacity: 1 }} />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="#F7931A" />
            <circle cx="50" cy="50" r="42" fill="url(#bitcoin-gradient-login)" />
            <path d="M 50,50 m -25,0 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0" fill="none" stroke="#FBB954" strokeWidth="2" />
            <text x="50" y="68" fontSize="45" fontWeight="bold" fill="white" textAnchor="middle" >B</text>
        </svg>
    </div>
)

const ApeCoin = () => (
    <div className="w-24 h-24">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="apecoin-gradient-login" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="#2563EB" />
            <circle cx="50" cy="50" r="42" fill="url(#apecoin-gradient-login)" />
            <path d="M35 65 Q 50 80, 65 65 M 40 55 Q 50 70, 60 55 M 30 45 Q 50 60, 70 45" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M 45 40 Q 50 30, 55 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M 50 35 L 50 30 M 45 32 L 42 30 M 55 32 L 58 30" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M 40,60 A 10 10 0 0 0 60 60" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
    </div>
)


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white font-body flex">
      <div className="hidden md:flex flex-col items-center justify-center w-1/3 bg-gradient-to-b from-cyan-900/50 to-gray-900/50 rounded-r-3xl">
        <Link href="/" className="text-5xl font-bold">AI Labs</Link>
      </div>

      <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full">
            <div className="md:hidden text-center mb-12">
                 <Link href="/" className="text-4xl font-bold">AI Labs</Link>
            </div>
          <h1 className="text-5xl font-bold mb-12 text-center">Sign In</h1>
          
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email Address</label>
              <Input id="email" type="email" className="bg-transparent border-0 border-b rounded-none px-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-white" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-gray-500 data-[state=checked]:bg-gray-700 data-[state=checked]:border-gray-600" />
                <label htmlFor="remember" className="text-sm text-gray-400">Remember Me</label>
              </div>
              <Button type="submit" className="bg-gray-300 hover:bg-gray-400 text-black font-bold px-8">Next</Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center space-y-6">
             <Link href="#" className="text-sm text-gray-400 hover:text-white">&gt; Forgot Your Password?</Link>
             <div className="pt-6 border-t border-gray-700">
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Need help signing in?</Link>
             </div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-4">
            <EthereumCoin />
            <BitcoinCoin />
            <ApeCoin />
          </div>
        </div>
      </div>
    </div>
  );
}
