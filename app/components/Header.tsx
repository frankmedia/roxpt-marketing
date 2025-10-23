"use client";

import { Flame, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-lg ${
                  pathname === item.href ? 'text-[#FFCC00] font-semibold' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://my.roxpt.app/login"
              className="inline-block px-6 py-3 bg-[#FFCC00] text-black font-bold rounded-full"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
