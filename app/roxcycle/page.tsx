'use client';

import React, { useState } from 'react';
import { Heart, Calendar, TrendingUp, Moon, Sun, Sparkles, Mail, CheckCircle2, Activity, Zap } from 'lucide-react';

export default function RoxCycle() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          app: 'roxcycle',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section id="waitlist" className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-semibold text-pink-400">Coming Soon</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-pink-400">RoxCycle</span>
                <br />
                <span className="text-white">Cycle Tracking for Active Women</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Track and manage your cycle to optimize training, understand your body, and perform at your best throughout every phase.
              </p>

              {/* Waitlist Form */}
              <div className="max-w-md mx-auto lg:mx-0">
                {status === 'success' ? (
                  <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-semibold">You&apos;re on the list!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-zinc-900/80 border border-zinc-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-400 transition-all backdrop-blur-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-6 py-4 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Sparkles className="w-5 h-5 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Join Waitlist
                        </>
                      )}
                    </button>
                  </form>
                )}
                <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">
                  Be the first to know when RoxCycle launches
                </p>
              </div>
            </div>

            {/* Right Column - Visual/Illustration */}
            <div className="relative">
              {/* Phone Mockup Placeholder */}
              <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px]">
                <div className="relative rounded-[32px] border-2 border-pink-500/30 bg-gradient-to-b from-pink-950/20 to-black p-2 shadow-[0_20px_60px_rgba(236,72,153,0.3)]">
                  {/* Notch */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-1 h-6 w-32 rounded-b-2xl bg-zinc-900" />
                  {/* Screen */}
                  <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-pink-950/40 to-black aspect-[390/844] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-pulse" />
                        <Heart className="w-16 h-16 text-pink-400 mx-auto relative z-10" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-pink-500/20 rounded-full w-3/4 mx-auto" />
                        <div className="h-3 bg-pink-500/10 rounded-full w-1/2 mx-auto" />
                      </div>
                      <div className="mt-8 grid grid-cols-4 gap-2">
                        {[...Array(28)].map((_, i) => (
                          <div
                            key={i}
                            className={`aspect-square rounded-lg ${
                              i < 7 ? 'bg-pink-500/30' : 
                              i < 14 ? 'bg-pink-500/20' : 
                              i < 21 ? 'bg-pink-500/10' : 
                              'bg-zinc-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Train smarter with <span className="text-pink-400">cycle awareness</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed specifically for sporty women who want to optimize their training around their cycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Calendar,
                title: 'Accurate Tracking',
                desc: 'Log your cycle with intuitive tools and get accurate predictions for your next phases.'
              },
              {
                icon: TrendingUp,
                title: 'Performance Insights',
                desc: 'Understand how your cycle affects your strength, endurance, and recovery patterns.'
              },
              {
                icon: Activity,
                title: 'Training Optimization',
                desc: 'Get personalized recommendations on when to push hard and when to focus on recovery.'
              }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-zinc-800 bg-black/50 hover:border-pink-400/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Everything you need</h2>
            <p className="text-gray-400">Comprehensive cycle tracking and training optimization</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Heart, 
                title: 'Body Awareness', 
                desc: 'Learn your body\'s patterns and optimize recovery during different phases.' 
              },
              { 
                icon: Sun, 
                title: 'Energy Management', 
                desc: 'Plan high-intensity training during peak performance phases.' 
              },
              { 
                icon: Moon, 
                title: 'Recovery Focus', 
                desc: 'Identify optimal recovery windows and adjust training load.' 
              },
              { 
                icon: Zap, 
                title: 'Hormone Insights', 
                desc: 'Understand how hormonal changes impact your athletic performance.' 
              },
              { 
                icon: Sparkles, 
                title: 'Personalized Tips', 
                desc: 'Get actionable advice tailored to your cycle phase and training goals.' 
              },
              { 
                icon: Activity, 
                title: 'Progress Tracking', 
                desc: 'Monitor how your cycle affects your performance over time.' 
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-pink-400/50 hover:bg-zinc-900/50 transition-all">
                <Icon className="w-6 h-6 text-pink-400 mb-3" />
                <h4 className="font-bold mb-2 text-lg">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-900/50 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-semibold">Launching Soon</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to optimize your training?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who are already on the waitlist. Be the first to experience cycle-aware training.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-pink-500 text-white text-lg font-bold rounded-xl hover:bg-pink-600 transition-all transform hover:scale-105"
          >
            Join the Waitlist
          </a>
        </div>
      </section>
    </main>
  );
}

