'use client';

import { Flame } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: '/science', label: 'Science' },
    { href: '/team', label: 'Team' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/join-team', label: 'Join Team' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-[#FFCC00]" />
          <span className="text-2xl font-bold">RoxPT</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`transition-colors ${
                pathname === item.href 
                  ? 'text-[#FFCC00] font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://my.roxpt.app/login"
            className="px-6 py-2 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
          >
            Sign In
          </a>
        </nav>
        {/* Mobile: Just Sign In button */}
        <a 
          href="https://my.roxpt.app/login"
          className="md:hidden px-6 py-2 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
        >
          Sign In
        </a>
      </div>
    </header>
  );
}
