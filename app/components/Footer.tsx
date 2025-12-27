'use client';

import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-[#FFCC00]" />
              <span className="text-xl font-bold">Rox</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Your complete fitness and performance ecosystem. Four powerful apps designed to elevate your training.
            </p>
            <p className="text-gray-500 text-xs">
              Developed by <span className="text-gray-400">Kettlebells Apps</span>
            </p>
          </div>

          {/* Apps */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white">Apps</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/roxsim" className="hover:text-[#FFCC00] transition-colors">RoxSIM</a>
              </li>
              <li>
                <a href="/roxcycle" className="hover:text-[#FFCC00] transition-colors">RoxCycle</a>
              </li>
              <li>
                <a href="/oxyrox" className="hover:text-[#FFCC00] transition-colors">OxyROX</a>
              </li>
              <li>
                <a href="/roxelevate" className="hover:text-[#FFCC00] transition-colors">RoxElevate</a>
              </li>
            </ul>
          </div>

          {/* RoxPT */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white">RoxPT</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/science" className="hover:text-[#FFCC00] transition-colors">Science</a>
              </li>
              <li>
                <a href="/team" className="hover:text-[#FFCC00] transition-colors">Team</a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#FFCC00] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="/join-team" className="hover:text-[#FFCC00] transition-colors">Join Our Team</a>
              </li>
              <li>
                <a href="https://my.roxpt.app/login" className="hover:text-[#FFCC00] transition-colors">Login</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/privacy" className="hover:text-[#FFCC00] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-[#FFCC00] transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rox by Kettlebells Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
