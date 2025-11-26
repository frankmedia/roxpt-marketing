'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Play, Clock, BarChart3, Headphones, Target, Sparkles } from 'lucide-react';

export default function RoxSIM() {
  const shots = [
    '/images/roxsim-1.png',
    '/images/roxsim-2.png',
    '/images/roxsim-3.png',
    '/images/roxsim-4.png',
    '/images/roxsim-5.png',
  ];
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-6">
            <Flame className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-sm font-semibold text-[#FFCC00]">Introducing</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            RoxSIM – Race Simulation Training
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Prepare smarter. Train harder. Perform stronger. Built for HYROX, ATHX, DEKA, Spartan and functional fitness athletes.
          </p>

          {/* Store CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-6">
            <div className="flex justify-center items-center px-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all">
              <a href="https://apps.apple.com/gb/app/roxsim/id6755498664" target="_blank" rel="noopener noreferrer" title="Download on the App Store" className="block">
                <img 
                  width="220" 
                  src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/00f3d09f-0db5-49ce-b063-159e4ec36a58.svg" 
                  alt="Apple App Store Logo" 
                  className="w-[220px]" 
                />
              </a>
            </div>
            <div className="flex justify-center items-center px-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all">
              <a href="https://play.google.com/store/apps/details?id=com.roxsims.app" target="_blank" rel="noopener noreferrer" title="Get it on Google Play" className="block">
                <img 
                  width="220" 
                  src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9b92921f-27ed-4beb-831b-e91058b0cdfb.svg" 
                  alt="Google Play App Logo" 
                  className="w-[220px]" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots carousel */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Phone frame + carousel */}
            <Carousel shots={shots} />

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Simulate the race. Train like it matters.</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3 justify-center lg:justify-start">
                  <Play className="w-5 h-5 text-[#FFCC00] mt-1 shrink-0" />
                  Real race-style simulations: timing splits, transitions, and pacing.
                </li>
                <li className="flex items-start gap-3 justify-center lg:justify-start">
                  <Headphones className="w-5 h-5 text-[#FFCC00] mt-1 shrink-0" />
                  Real‑time audio coaching to adjust pace and conserve energy.
                </li>
                <li className="flex items-start gap-3 justify-center lg:justify-start">
                  <BarChart3 className="w-5 h-5 text-[#FFCC00] mt-1 shrink-0" />
                  Detailed analytics: splits, estimated finish, movement efficiency.
                </li>
                <li className="flex items-start gap-3 justify-center lg:justify-start">
                  <Target className="w-5 h-5 text-[#FFCC00] mt-1 shrink-0" />
                  Covers running, sled push/pull, burpees, row, SkiErg, wall balls and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold">Why Athletes Love RoxSIM</h3>
            <p className="text-gray-400 mt-2">Pacing, accountability and race‑day confidence – in every session.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Clock, title: 'Accurate Splits', desc: 'Track every station, transition and total time with precision.' },
              { icon: Headphones, title: 'Audio Coaching', desc: 'Real‑time cues keep you on pace and under control.' },
              { icon: Sparkles, title: 'Efficiency Scores', desc: 'See where you leak energy and get actionable fixes.' },
              { icon: BarChart3, title: 'Race Predictions', desc: 'Estimate finish time and target weak segments.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 bg-black hover:border-[#FFCC00]/50 transition-colors">
                <Icon className="w-6 h-6 text-[#FFCC00] mb-3" />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Carousel({ shots }: { shots: string[] }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % shots.length), 3000);
    return () => clearInterval(id);
  }, [shots.length]);
  return (
    <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
      <div className="relative rounded-[28px] border border-zinc-700 bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-0.5 h-4 w-24 rounded-b-2xl bg-zinc-800" />
        <div className="relative rounded-[22px] overflow-hidden bg-black aspect-[390/844]">
          {shots.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt="RoxSIM screenshot"
              fill
              sizes="(min-width: 1024px) 420px, 360px"
              className={`absolute inset-0 m-auto object-contain transition-opacity duration-700 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {shots.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ${i === idx ? 'bg-[#FFCC00]' : 'bg-zinc-700'}`}
          />
        ))}
      </div>
    </div>
  );
}


