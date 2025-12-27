
'use client';

import { useState, useEffect } from 'react';
import { Flame, Clock, Mail, CheckCircle2, Heart, Wind, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [appEmail, setAppEmail] = useState<{ [key: string]: string }>({});
  const [appStatus, setAppStatus] = useState<{ [key: string]: 'idle' | 'loading' | 'success' | 'error' }>({});

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

  const handleSubmit = async (e: React.FormEvent, appName: string) => {
    e.preventDefault();
    setAppStatus({ ...appStatus, [appName]: 'loading' });
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: appEmail[appName],
          app: appName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAppStatus({ ...appStatus, [appName]: 'success' });
        setAppEmail({ ...appEmail, [appName]: '' });
      } else {
        setAppStatus({ ...appStatus, [appName]: 'error' });
        console.error('Error:', data.error);
      }
    } catch (error) {
      setAppStatus({ ...appStatus, [appName]: 'error' });
      console.error('Network error:', error);
    }
  };

  const apps = [
    {
      id: 'roxsim',
      name: 'RoxSIM',
      tagline: 'Race Simulation Training',
      description: 'Transform your workouts into real race-style simulations with timing splits, pacing feedback, audio coaching, and detailed analytics.',
      status: 'live',
      icon: Flame,
      href: '/roxsim',
      appStoreUrl: 'https://apps.apple.com/gb/app/roxsim/id6755498664',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.roxsims.app',
      color: 'text-[#FFCC00]'
    },
    {
      id: 'roxcycle',
      name: 'RoxCycle',
      tagline: 'Cycle Tracking for Active Women',
      description: 'Track and manage your cycle to optimize training, understand your body, and perform at your best throughout every phase.',
      status: 'coming-soon',
      icon: Heart,
      href: '/roxcycle',
      color: 'text-pink-400'
    },
    {
      id: 'oxyrox',
      name: 'OxyROX',
      tagline: 'Breathing Mastery for Performance',
      description: 'Master your breathing during running, exercises, and before races. Optimize oxygen intake and control for peak performance.',
      status: 'coming-soon',
      icon: Wind,
      href: '/oxyrox',
      color: 'text-cyan-400'
    },
    {
      id: 'roxelevate',
      name: 'RoxElevate',
      tagline: 'Your Daily Motivation',
      description: 'Stay motivated, track your mindset, and elevate your performance with personalized motivation and mental training tools.',
      status: 'coming-soon',
      icon: Sparkles,
      href: '/roxelevate',
      color: 'text-purple-400'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-50" />
        
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
              <Flame className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">FITNESS & PERFORMANCE APPS</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Your Complete<br />
            <span className="text-[#FFCC00]">Performance <span className="underline">Ecosystem</span></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Four powerful apps designed to elevate your fitness, optimize your training, and unlock your peak performance.
          </p>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {apps.map((app) => {
              const Icon = app.icon;
              const isLive = app.status === 'live';
              const currentStatus = appStatus[app.id] || 'idle';
              const currentEmail = appEmail[app.id] || '';

              return (
                <div 
                  key={app.id}
                  className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-[#FFCC00]/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-8 h-8 ${app.color}`} />
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                          <span className={app.color}>{app.name}</span>
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">{app.tagline}</p>
                      </div>
                    </div>
                    {isLive ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-semibold text-green-500">LIVE</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full">
                        <Clock className="w-3 h-3 text-[#FFCC00]" />
                        <span className="text-xs font-semibold text-[#FFCC00]">COMING SOON</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 mb-6">
                    {app.description}
                  </p>

                  {isLive ? (
                    <>
                      {/* App Store Badges */}
                      <div className="flex flex-col gap-3 mb-4">
                        <a 
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center px-3 bg-black rounded-xl hover:bg-zinc-800 transition-all"
                        >
                          <img 
                            width="180" 
                            src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/00f3d09f-0db5-49ce-b063-159e4ec36a58.svg" 
                            alt="Download on App Store"
                            className="w-[180px]"
                          />
                        </a>
                        <a 
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center px-3 bg-black rounded-xl hover:bg-zinc-800 transition-all"
                        >
                          <img 
                            width="180" 
                            src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9b92921f-27ed-4beb-831b-e91058b0cdfb.svg" 
                            alt="Get it on Google Play"
                            className="w-[180px]"
                          />
                        </a>
                      </div>
                      
                      <Link 
                        href={app.href}
                        className={`${app.color} hover:underline text-sm font-semibold inline-block`}
                      >
                        Learn more about {app.name} →
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* Early Access Form */}
                      <div className="mb-4">
                        {currentStatus === 'success' ? (
                          <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-500 font-semibold text-sm">You&apos;re on the list!</span>
                          </div>
                        ) : (
                          <form onSubmit={(e) => handleSubmit(e, app.id)} className="space-y-3">
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="email"
                                value={currentEmail}
                                onChange={(e) => setAppEmail({ ...appEmail, [app.id]: e.target.value })}
                                placeholder="Enter your email"
                                required
                                className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={currentStatus === 'loading'}
                              className="w-full px-6 py-3 bg-[#FFCC00] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all disabled:opacity-50"
                            >
                              {currentStatus === 'loading' ? 'Joining...' : 'Get Early Access'}
                            </button>
                          </form>
                        )}
                        <p className="text-xs text-gray-500 mt-3 text-center">Be the first to know when {app.name} launches</p>
                      </div>
                      <Link 
                        href={app.href}
                        className={`${app.color} hover:underline text-sm font-semibold inline-block`}
                      >
                        Learn more about {app.name} →
                      </Link>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to <span className="text-[#FFCC00]">perform at your peak</span>
            </h2>
            <p className="text-xl text-gray-400">A complete ecosystem of fitness and performance apps</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-8 xl:gap-12 items-start px-4 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)_220px] xl:grid-cols-[260px_minmax(0,1fr)_260px]">
            <div className="space-y-6 text-center md:text-right">
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-right">
                <Flame className="w-12 h-12 mb-4 text-[#FFCC00] mx-auto md:ml-auto" />
                <h3 className="text-xl font-bold mb-2">Race Simulation</h3>
                <p className="text-gray-400">Train like you race with realistic simulations and pacing</p>
              </div>
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-right">
                <Heart className="w-12 h-12 mb-4 text-pink-400 mx-auto md:ml-auto" />
                <h3 className="text-xl font-bold mb-2">Cycle Optimization</h3>
                <p className="text-gray-400">Align your training with your body&apos;s natural rhythms</p>
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
                <Wind className="w-12 h-12 mb-4 text-cyan-400 mx-auto md:mx-0" />
                <h3 className="text-xl font-bold mb-2">Breathing Mastery</h3>
                <p className="text-gray-400">Optimize your breathing for better performance and recovery</p>
              </div>
              <div className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-[#FFCC00]/50 transition-all text-center md:text-left">
                <Sparkles className="w-12 h-12 mb-4 text-purple-400 mx-auto md:mx-0" />
                <h3 className="text-xl font-bold mb-2">Stay Motivated</h3>
                <p className="text-gray-400">Daily motivation and mindset tools to keep you on track</p>
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
              { value: '4', label: 'Performance Apps' }
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
            Ready to elevate your performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our complete ecosystem of fitness and performance apps
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roxsim"
              className="inline-block px-8 py-4 bg-[#FFCC00] text-black text-lg font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Try RoxSIM
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#FFCC00] text-[#FFCC00] text-lg font-bold rounded-full hover:bg-[#FFCC00]/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
