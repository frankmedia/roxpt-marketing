'use client';

import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand & Description */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFCC00]" />
              <span className="text-lg sm:text-xl font-bold">Rox</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
              Your complete fitness and performance ecosystem. Four powerful apps designed to elevate your training.
            </p>
            <p className="text-gray-500 text-xs">
              Developed by <span className="text-gray-400">Kettlebells Apps</span>
            </p>
          </div>

          {/* Apps */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 text-white">Apps</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="/roxsim" className="hover:text-[#FFCC00] transition-colors block">RoxSIM</a>
              </li>
              <li>
                <a href="/roxcycle" className="hover:text-[#FFCC00] transition-colors block">RoxCycle</a>
              </li>
              <li>
                <a href="/oxyrox" className="hover:text-[#FFCC00] transition-colors block">OxyROX</a>
              </li>
              <li>
                <a href="/roxelevate" className="hover:text-[#FFCC00] transition-colors block">RoxElevate</a>
              </li>
            </ul>
          </div>

          {/* RoxPT */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 text-white">RoxPT</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="/science" className="hover:text-[#FFCC00] transition-colors block">Science</a>
              </li>
              <li>
                <a href="/team" className="hover:text-[#FFCC00] transition-colors block">Team</a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#FFCC00] transition-colors block">Pricing</a>
              </li>
              <li>
                <a href="/join-team" className="hover:text-[#FFCC00] transition-colors block">Join Our Team</a>
              </li>
              <li>
                <a href="https://my.roxpt.app/login" className="hover:text-[#FFCC00] transition-colors block">Login</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 mt-4 sm:mt-0">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4 text-white">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="/privacy" className="hover:text-[#FFCC00] transition-colors block">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-[#FFCC00] transition-colors block">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-4 sm:pt-6">
          <p className="text-center text-gray-500 text-xs sm:text-sm px-4">
            &copy; {new Date().getFullYear()} Rox by Kettlebells Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
