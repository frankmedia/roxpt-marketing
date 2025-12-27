'use client';

import React from 'react';
import { Sparkles, Target, TrendingUp, Award, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

export default function RoxElevate() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-left">
            <span className="text-purple-400">RoxElevate</span> – Your Daily Motivation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 text-left">
            Stay motivated, track your mindset, and elevate your performance with personalized motivation and mental training tools.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Launching Soon</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Why RoxElevate?</h2>
            <p className="text-gray-400">Build mental strength and stay motivated every day</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Sparkles, 
                title: 'Daily Motivation', 
                desc: 'Get personalized motivational content tailored to your goals and training schedule.' 
              },
              { 
                icon: Target, 
                title: 'Goal Setting', 
                desc: 'Set and track meaningful goals with actionable milestones and progress tracking.' 
              },
              { 
                icon: TrendingUp, 
                title: 'Mindset Tracking', 
                desc: 'Monitor your mental state and identify patterns that impact your performance.' 
              },
              { 
                icon: Award, 
                title: 'Achievement System', 
                desc: 'Celebrate wins and build confidence with a comprehensive achievement system.' 
              },
              { 
                icon: Heart, 
                title: 'Mental Training', 
                desc: 'Access guided mental training exercises to build resilience and focus.' 
              },
              { 
                icon: Zap, 
                title: 'Performance Mindset', 
                desc: 'Develop the mental skills needed to perform under pressure and overcome challenges.' 
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-purple-400/50 transition-colors">
                <Icon className="w-6 h-6 text-purple-400 mb-3" />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Elevate your mindset</h2>
            <p className="text-gray-400">Mental strength is just as important as physical strength</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-zinc-800 bg-black">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Stay Consistent</h3>
              <p className="text-gray-400">
                Maintain motivation through daily check-ins, personalized content, and progress reminders that keep you on track.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-zinc-800 bg-black">
              <Target className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Build Resilience</h3>
              <p className="text-gray-400">
                Develop mental toughness with guided exercises, visualization techniques, and strategies to overcome setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your mindset?</h2>
          <p className="text-gray-300 mb-8">
            Join our waitlist to get early access to RoxElevate and start building the mental strength you need to succeed.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-purple-500 text-white text-lg font-bold rounded-full hover:bg-purple-600 transition-all transform hover:scale-105"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}

