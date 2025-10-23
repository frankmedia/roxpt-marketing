
'use client';

import { useState, useEffect } from 'react';
import { Flame, Target, LineChart, Clock, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const carouselImages = [
    '/images/home.png',
    '/images/day1.png',
    '/images/day1a.png',
    '/images/circuit1.png',
    '/images/calf.png',
    '/images/score.png'
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [carouselImages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call - replace with actual email capture service
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
              <Flame className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">BUILT FOR HYROX • TUNED FOR YOU</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            The Smart Way to<br />
            <span className="text-[#FFCC00]">Crush Your <span className="underline">Next Race</span></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            The Precision Plan: Fueling Your Race Ambition
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-semibold">Thanks! We&apos;ll notify you at launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-700 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' : 'Notify Me'}
                </button>
              </form>
            )}
            <p className="text-sm text-gray-500 mt-3">Stay updated with our latest features and training tips</p>
          </div>

          {/* App Store Badges */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-6">
            <div className="flex justify-center items-center px-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all">
              <a href="#" title="Go to Apple Store" className="block">
                <img 
                  width="220" 
                  src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/00f3d09f-0db5-49ce-b063-159e4ec36a58.svg" 
                  alt="Apple App Store Logo"
                  className="w-[220px]"
                />
              </a>
            </div>
            <div className="flex justify-center items-center px-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all">
              <a href="#" title="Go to Google Play" className="block">
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

      {/* Features Preview */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to <span className="text-[#FFCC00]">dominate HYROX</span>
            </h2>
            <p className="text-xl text-gray-400">Built by athletes, for athletes</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-8 xl:gap-12 items-start px-4 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)_220px] xl:grid-cols-[260px_minmax(0,1fr)_260px]">
            <div className="space-y-6 text-center md:text-right">
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-right">
                <Target className="w-12 h-12 mb-4 text-[#FFCC00] mx-auto md:ml-auto" />
                <h3 className="text-xl font-bold mb-2">Personalized Plans</h3>
                <p className="text-gray-400">Training programs tailored to your fitness level and goals</p>
              </div>
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-right">
                <Flame className="w-12 h-12 mb-4 text-[#FFCC00] mx-auto md:ml-auto" />
                <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                <p className="text-gray-400">Log every workout and watch your performance improve</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
              {/* Phone frame */}
              <div className="relative rounded-[32px] border border-zinc-700 bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                {/* Notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-0.5 h-5 w-28 rounded-b-2xl bg-zinc-800" />
                {/* Screen */}
                <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[390/844]">
                  {carouselImages.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt="App preview"
                      fill
                      sizes="(min-width: 1024px) 420px, 360px"
                      className={`absolute inset-0 m-auto object-contain transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
                      priority={i === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-left">
                <LineChart className="w-12 h-12 mb-4 text-[#FFCC00] mx-auto md:mx-0" />
                <h3 className="text-xl font-bold mb-2">PT Check-Ins</h3>
                <p className="text-gray-400">Get proactive feedback on form and pacing adjustments weekly, ensuring zero wasted effort and a perfect race peak.</p>
              </div>
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-left">
                <Clock className="w-12 h-12 mb-4 text-[#FFCC00] mx-auto md:mx-0" />
                <h3 className="text-xl font-bold mb-2">Hybrid Race Ready</h3>
                <p className="text-gray-400">Training designed to mimic the exact fatigue and transition demands of a HYROX event, so you eliminate surprises on the course.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Athletes Training' },
              { value: '10K+', label: 'Workouts Completed' },
              { value: '4.9/5', label: 'User Rating' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FFCC00] mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your training?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your personalized HYROX training today
          </p>
          <a
            href="/pricing#inquiry"
            className="inline-block px-12 py-4 bg-[#FFCC00] text-black text-lg font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

    </main>
  );
}
