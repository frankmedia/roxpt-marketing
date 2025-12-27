'use client';

import React from 'react';
import { Wind, Activity, Target, Timer, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function OxyROX() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-cyan-400">OxyROX</span> – Breathing Mastery for Performance
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Master your breathing during running, exercises, and before races. Optimize oxygen intake and control for peak performance.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Launching Soon</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Why OxyROX?</h2>
            <p className="text-gray-400">Master the art of breathing for better performance and recovery</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Wind, 
                title: 'Breathing Techniques', 
                desc: 'Learn proven breathing patterns for running, HIIT, and endurance training.' 
              },
              { 
                icon: Activity, 
                title: 'Pre-Race Preparation', 
                desc: 'Calm your nerves and optimize oxygen intake before competition.' 
              },
              { 
                icon: Target, 
                title: 'Performance Breathing', 
                desc: 'Sync your breath with movement for maximum efficiency and power.' 
              },
              { 
                icon: Timer, 
                title: 'Recovery Breathing', 
                desc: 'Use breathing exercises to accelerate recovery between sets and workouts.' 
              },
              { 
                icon: Zap, 
                title: 'Energy Optimization', 
                desc: 'Maximize oxygen delivery to muscles for sustained performance.' 
              },
              { 
                icon: Sparkles, 
                title: 'Personalized Guidance', 
                desc: 'Get breathing cues tailored to your activity and fitness level.' 
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-400/50 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Perfect for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Wind className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Running</h3>
              <p className="text-gray-400 text-sm">Maintain steady breathing during long runs and sprints</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Exercises</h3>
              <p className="text-gray-400 text-sm">Optimize breathing during strength and HIIT workouts</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Before Races</h3>
              <p className="text-gray-400 text-sm">Calm nerves and prepare your body for peak performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Breathe better. Perform better.</h2>
          <p className="text-gray-300 mb-8">
            Join our waitlist to get early access to OxyROX and transform your breathing for peak performance.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-cyan-500 text-white text-lg font-bold rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}

