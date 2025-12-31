'use client';

import React from 'react';
import { Target, Calendar, TrendingUp, CheckCircle2, Activity, Zap, BarChart3, Users, Trophy, Clock } from 'lucide-react';

export default function RoxPT() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-6">
            <Target className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-sm font-semibold text-[#FFCC00]">12-Week Intelligent Program</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            RoxPT
            <br />
            HYROX Preparation Program
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive 12-week intelligent training program that automatically adapts to your performance, pushing you to be the best you can be. Built on science, powered by data.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full">
            <span className="text-sm text-gray-300">🔬</span>
            <span className="text-sm font-semibold text-gray-300">Science-Based Training</span>
          </div>
        </div>
      </section>

      {/* Science-Based Section */}
      <section className="py-16 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Science</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Every aspect of RoxPT is grounded in exercise science, sports physiology, and performance research. Our program automatically adapts based on your performance, continuously pushing you to reach your full potential and be the best you can be.
            </p>
            <a
              href="/science"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full hover:bg-[#FFCC00]/20 transition-all"
            >
              <span className="text-[#FFCC00] font-semibold">Learn About Our Science</span>
              <span className="text-[#FFCC00]">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your 12-Week Journey to HYROX Success</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured, intelligent program that automatically adapts to your performance, continuously pushing you to be the best you can be and preparing you for race day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800">
              <Calendar className="w-10 h-10 text-[#FFCC00] mb-4" />
              <h3 className="text-xl font-bold mb-2">12 Weeks</h3>
              <p className="text-gray-400">Structured program divided into progressive phases</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800">
              <TrendingUp className="w-10 h-10 text-[#FFCC00] mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-Adaptive</h3>
              <p className="text-gray-400">Automatically adjusts based on your performance to push you to your best</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800">
              <Target className="w-10 h-10 text-[#FFCC00] mb-4" />
              <h3 className="text-xl font-bold mb-2">HYROX Focus</h3>
              <p className="text-gray-400">Specifically designed for HYROX competition preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes RoxPT Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Activity className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Auto-Adaptive Training</h3>
                  <p className="text-gray-400">Automatically adapts based on your performance, pushing you to be the best you can be</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance-Driven</h3>
                  <p className="text-gray-400">Continuously analyzes your performance and adjusts training to maximize your potential</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Race-Specific</h3>
                  <p className="text-gray-400">Focus on HYROX movements: running, sled push/pull, burpees, and more</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Science-Backed</h3>
                  <p className="text-gray-400">Built on exercise science and sports physiology research</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-400">Adapt the program to fit your lifestyle and training availability</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-[#FFCC00] mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Pushes Your Limits</h3>
                  <p className="text-gray-400">Automatically increases intensity and challenge to help you achieve your best performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Structure</h2>
            <p className="text-xl text-gray-400">A phased approach to HYROX success</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFCC00] font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl font-bold">Foundation Phase (Weeks 1-4)</h3>
              </div>
              <p className="text-gray-400 ml-16">Build base fitness, establish movement patterns, and develop aerobic capacity. The program automatically adapts to your starting level and pushes you forward.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFCC00] font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl font-bold">Build Phase (Weeks 5-8)</h3>
              </div>
              <p className="text-gray-400 ml-16">Increase intensity, develop race-specific strength, and improve transitions. Training automatically adjusts based on your performance to maximize your potential.</p>
            </div>

            <div className="p-6 bg-gradient-to-r from-zinc-900 to-black rounded-xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFCC00] font-bold text-lg">3</span>
                </div>
                <h3 className="text-2xl font-bold">Peak Phase (Weeks 9-12)</h3>
              </div>
              <p className="text-gray-400 ml-16">Race-specific training, tapering, and final preparation for competition. The program pushes you to peak performance, automatically optimizing every session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be Your Best?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start your 12-week journey with RoxPT. The program automatically adapts to your performance, pushing you to be the best you can be and arrive at race day fully prepared.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/roxid"
              className="px-8 py-4 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
            >
              Get Started with ROXID Pass
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

