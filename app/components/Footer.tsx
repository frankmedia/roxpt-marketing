'use client';

import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 items-start mb-4">
          <div className="sm:max-w-md">
            <a href="/" className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-[#FFCC00]" />
              <span className="text-lg font-bold">RoxPT</span>
            </a>
            <p className="text-gray-500 text-sm mb-3">
              Professional training programs designed for athletes of all levels
            </p>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">Product</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li><a href="/science" className="hover:text-white transition-colors">Science</a></li>
                <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://my.roxpt.app/login" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
          </div>

          <div className="sm:justify-self-end sm:text-right">
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/join-team" className="hover:text-white transition-colors">Join Our Team</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RoxPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
