"use client";

import { useState } from 'react';
import { BookOpen, TrendingUp, Zap, Target, Award, Clock, Activity, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Science() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const principles = [
    { title: 'Progressive Overload', desc: 'Gradually increase volume and intensity' },
    { title: 'Specificity', desc: 'Train movements and energy systems used in the race' },
    { title: 'Recovery', desc: '7-9 hours sleep + active recovery sessions' },
    { title: 'Consistency', desc: 'Regular training builds the base for peak performance' },
    { title: 'Concurrent Training', desc: 'Separate strength and endurance by 6+ hours' }
  ];

  const phases = [
    {
      number: 1,
      name: 'Base Phase',
      weeks: 'Weeks 1–2',
      focus: 'Aerobic Capacity + Technique',
      energySystem: 'Zone 2 / Aerobic',
      description: 'Build volume safely, improve running & SkiErg efficiency'
    },
    {
      number: 2,
      name: 'Build Phase',
      weeks: 'Weeks 3–4',
      focus: 'Strength + Threshold',
      energySystem: 'Aerobic + Lactate Threshold',
      description: 'Introduce faster runs, heavier carries, and circuits'
    },
    {
      number: 3,
      name: 'Peak Phase',
      weeks: 'Weeks 5–6',
      focus: 'HIIT + Simulation',
      energySystem: 'Anaerobic + Race Specific',
      description: 'Add short, high-intensity intervals to replicate race fatigue'
    },
    {
      number: 4,
      name: 'Taper Phase',
      weeks: 'Final Week',
      focus: 'Sharpness + Recovery',
      energySystem: 'All systems',
      description: 'Maintain performance without overload'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <Breadcrumbs />

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
            <BookOpen className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-sm font-semibold text-[#FFCC00]">HYROX TRAINING METHODOLOGY</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Backed by <span className="text-[#FFCC00]">Science</span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Understanding the science behind your training programme
          </p>
        </div>
      </section>

      {/* What is HYROX */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">What is HYROX?</h2>
          
          <div className="p-8 bg-gradient-to-br from-[#FFCC00]/10 to-transparent border border-[#FFCC00]/30 rounded-xl mb-8">
            <p className="text-xl text-gray-300 mb-6">
              HYROX is a fitness race structured as <span className="text-[#FFCC00] font-bold">8 rounds</span> of:
            </p>
            <div className="flex items-center gap-4 text-2xl font-bold mb-6">
              <span className="text-[#FFCC00]">1km run</span>
              <span className="text-gray-500">→</span>
              <span className="text-white">1 functional station</span>
            </div>
            <p className="text-gray-400 mb-4">
              (e.g., SkiErg, sled push, sled pull, burpee broad jumps, row, farmer&apos;s carry, sandbag lunges, wall balls)
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-black/50 rounded-lg border border-zinc-800">
                <div className="text-[#FFCC00] font-bold text-lg mb-1">Total Distance</div>
                <div className="text-2xl font-bold">8km running + 8 stations</div>
              </div>
              <div className="p-4 bg-black/50 rounded-lg border border-zinc-800">
                <div className="text-[#FFCC00] font-bold text-lg mb-1">Average Time</div>
                <div className="text-2xl font-bold">60-90 minutes</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#FFCC00]" />
              Why HYROX is Different
            </h3>
            <p className="text-gray-300 mb-4">
              It&apos;s a <span className="text-[#FFCC00] font-semibold">&quot;hybrid&quot; event</span>: part endurance race, part functional fitness. This dual demand requires training that covers both running endurance and functional strength &amp; conditioning.
            </p>
            <div className="p-4 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-lg">
              <p className="font-bold mb-2">Key Challenge:</p>
              <p className="text-gray-300">Maintaining running performance while building functional strength, without letting one interfere with the other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is DEKA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">What is DEKA?</h2>

          <div className="p-8 bg-gradient-to-br from-[#FFCC00]/10 to-transparent border border-[#FFCC00]/30 rounded-xl mb-8">
            <p className="text-xl text-gray-300 mb-6">
              DEKA is the decathlon of hybrid racing: <span className="text-[#FFCC00] font-bold">10 functional zones</span> combined with
              steady cardio efforts. It&apos;s designed so <span className="text-[#FFCC00] font-semibold">all levels</span> can test and celebrate
              the power of fitness.
            </p>
            <div className="flex items-center gap-4 text-2xl font-bold mb-6">
              <span className="text-white">Zone 1</span>
              <span className="text-gray-500">→</span>
              <span className="text-white">...</span>
              <span className="text-gray-500">→</span>
              <span className="text-white">Zone 10</span>
            </div>
            <p className="text-gray-400 mb-4">
              Example stations include: ski, row, sled push/pull, box step-overs, lunges, burpees &amp; carries (varies by event).
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-black/50 rounded-lg border border-zinc-800">
                <div className="text-[#FFCC00] font-bold text-lg mb-1">Total Zones</div>
                <div className="text-2xl font-bold">10 functional zones</div>
              </div>
              <div className="p-4 bg-black/50 rounded-lg border border-zinc-800">
                <div className="text-[#FFCC00] font-bold text-lg mb-1">Formats</div>
                <div className="text-2xl font-bold">FIT • MILE • STRONG</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#FFCC00]" />
              Why DEKA appeals
            </h3>
            <p className="text-gray-300 mb-4">
              Standardised testing across all locations makes your results comparable anywhere. Events run indoors with simple
              layouts, so you can focus on execution and pacing.
            </p>
            <div className="p-4 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-lg">
              <p className="font-bold mb-2">Key Note:</p>
              <p className="text-gray-300">Choose a format that matches your training block: FIT (10 zones + 5k), MILE (10 zones + 1 mile), STRONG (10 zones only).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Systems */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Energy System Demands</h2>
          <p className="text-gray-300 mb-4">
            Hybrid competitions such as HYROX and DEKA, and obstacle or endurance formats like Spartan and Tough Mudder,
            place demands on all three energy systems. Each task in a race calls on a different mix of quick power,
            hard sustained efforts and steady aerobic work.
          </p>
          <p className="text-gray-400 mb-8">
            Explosive starts and heavy sled drives are powered by the phosphocreatine system. Prolonged station work and
            surges depend on glycolytic energy. The repeated runs and transitions are anchored by the oxidative system.
            Understanding this blend guides training focus, pacing and fueling strategies.
          </p>
          
          <div className="space-y-4">
            <div className="p-6 bg-black rounded-xl border-l-4 border-red-500">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">Phosphocreatine</h3>
                <span className="text-sm text-gray-400">0-10 seconds</span>
              </div>
              <p className="text-gray-300">Sled push initiation, explosive movements</p>
            </div>

            <div className="p-6 bg-black rounded-xl border-l-4 border-orange-500">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">Glycolytic</h3>
                <span className="text-sm text-gray-400">10s - 2 min</span>
              </div>
              <p className="text-gray-300">Station completion, SkiErg, rowing efforts</p>
            </div>

            <div className="p-6 bg-black rounded-xl border-l-4 border-[#FFCC00]">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">Oxidative</h3>
                <span className="text-sm text-gray-400">2+ minutes</span>
              </div>
              <p className="text-gray-300">Base for entire race, running between stations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Phases - Interactive */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Training Phases</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Content Display */}
            <div className="order-2 md:order-1">
              <div 
                key={selectedPhase}
                className="p-8 bg-gradient-to-br from-[#FFCC00]/10 to-transparent border-2 border-[#FFCC00] rounded-2xl min-h-[400px] animate-in fade-in slide-in-from-left duration-500"
              >
                <h3 className="text-4xl font-bold mb-3">{phases[selectedPhase].name}</h3>
                <p className="text-xl text-gray-400 mb-8">{phases[selectedPhase].weeks}</p>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-[#FFCC00] font-semibold mb-2">FOCUS</p>
                    <p className="text-2xl font-bold">{phases[selectedPhase].focus}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-[#FFCC00] font-semibold mb-2">ENERGY SYSTEM</p>
                    <p className="text-xl text-gray-300">{phases[selectedPhase].energySystem}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-800">
                    <p className="text-lg text-gray-300 leading-relaxed">{phases[selectedPhase].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Phase Navigation */}
            <div className="order-1 md:order-2 flex flex-col gap-4">
              {phases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhase(index)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                    selectedPhase === index
                      ? 'bg-[#FFCC00] text-black scale-105 shadow-lg shadow-[#FFCC00]/20'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-102'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold ${
                      selectedPhase === index
                        ? 'bg-black text-[#FFCC00]'
                        : 'bg-zinc-800 text-gray-400'
                    }`}>
                      {phase.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{phase.name}</h4>
                      <p className={`text-sm ${
                        selectedPhase === index ? 'text-black/70' : 'text-gray-400'
                      }`}>
                        {phase.weeks}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 80/20 Rule */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Training Intensity Distribution: The 80/20 Rule</h2>
          
          <p className="text-xl text-gray-300 mb-8">Research-backed approach for optimal endurance development:</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-8 bg-black rounded-xl border-2 border-green-500">
              <div className="text-6xl font-bold text-green-500 mb-4">80%</div>
              <h3 className="text-2xl font-bold mb-3">Low Intensity (Easy)</h3>
              <p className="text-gray-400 mb-2"><span className="text-[#FFCC00] font-semibold">Heart Rate:</span> {'<'}70% HRmax</p>
              <p className="text-gray-300">Aerobic base, recovery</p>
            </div>

            <div className="p-8 bg-black rounded-xl border-2 border-red-500">
              <div className="text-6xl font-bold text-red-500 mb-4">20%</div>
              <h3 className="text-2xl font-bold mb-3">High Intensity (Hard)</h3>
              <p className="text-gray-400 mb-2"><span className="text-[#FFCC00] font-semibold">Heart Rate:</span> {'>'}80% HRmax</p>
              <p className="text-gray-300">Race pace, power</p>
            </div>
          </div>

          <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="font-bold text-red-400 mb-2">⚠️ Common Mistake:</p>
            <p className="text-gray-300">Training too much in the "gray zone" (70-80% HRmax) reduces both aerobic base and high-end power development.</p>
          </div>
        </div>
      </section>

      {/* Weekly Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-md bg-[#FFCC00]/10 border border-[#FFCC00]/30 sm:bg-transparent sm:border-0">
              Sample Weekly Training Structure
            </span>
          </h2>
          
          <div className="space-y-3">
            {[
              { day: 'Monday', type: 'Strength + Stations', intensity: 'High', duration: '60-75 min', color: 'red' },
              { day: 'Tuesday', type: 'Easy Run', intensity: 'Low', duration: '30-45 min', color: 'green' },
              { day: 'Wednesday', type: 'HIIT + Stations', intensity: 'High', duration: '45-60 min', color: 'red' },
              { day: 'Thursday', type: 'Active Recovery', intensity: 'Low', duration: '30 min', color: 'green' },
              { day: 'Friday', type: 'Intervals + Circuit', intensity: 'Moderate', duration: '60-75 min', color: 'yellow' },
              { day: 'Saturday', type: 'Long Run', intensity: 'Low', duration: '60-90 min', color: 'green' },
              { day: 'Sunday', type: 'Rest / Mobility', intensity: '-', duration: '-', color: 'gray' }
            ].map((session, i) => (
              <div key={i} className={`p-6 bg-black rounded-xl border-l-4 ${
                session.color === 'red' ? 'border-red-500' :
                session.color === 'green' ? 'border-green-500' :
                session.color === 'yellow' ? 'border-[#FFCC00]' :
                'border-gray-500'
              } hover:bg-zinc-900/50 transition-all`}>
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div className="font-bold text-xl text-[#FFCC00]">{session.day}</div>
                  <div className="text-lg">{session.type}</div>
                  <div className="text-gray-400">{session.intensity}</div>
                  <div className="text-gray-400">{session.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Protocols */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Station-Specific Training Protocols</h2>
          
          <div className="space-y-4">
            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">SkiErg</h3>
              <p className="text-gray-300 font-mono">5 × 500m @ 70-75% effort, 90s rest</p>
              <p className="text-sm text-gray-400 mt-2">→ Aerobic power + rhythm</p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">Sled Push/Pull</h3>
              <p className="text-gray-300 font-mono">6 × 50m @ 100% race weight, 90s rest</p>
              <p className="text-sm text-gray-400 mt-2">→ Power endurance</p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">Burpee Broad Jumps</h3>
              <p className="text-gray-300 font-mono">8 × 5 jumps, focus on rhythm</p>
              <p className="text-sm text-gray-400 mt-2">→ Movement efficiency</p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-3">Rowing</h3>
              <p className="text-gray-300 font-mono">4 × 1000m @ 75-80% effort, 2min rest</p>
              <p className="text-sm text-gray-400 mt-2">→ Lactate threshold</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Key Training Principles</h2>
          
          <PrinciplesInteractive />
        </div>
      </section>

      {/* Recovery & Adaptation */}
      <section className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Recovery & Adaptation</h2>
          
          <div className="space-y-4 mb-8">
            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">Immediate Fatigue</h3>
                <span className="text-sm text-gray-400">0-24 hours</span>
              </div>
              <p className="text-gray-300">Glycogen depletion, muscle damage</p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-zinc-800">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">Recovery</h3>
                <span className="text-sm text-gray-400">24-72 hours</span>
              </div>
              <p className="text-gray-300">Repair, glycogen restoration</p>
            </div>

            <div className="p-6 bg-black rounded-xl border-2 border-[#FFCC00]">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-[#FFCC00]">Supercompensation</h3>
                <span className="text-sm text-gray-400">72-120 hours</span>
              </div>
              <p className="text-gray-300">Adaptation, stronger than before</p>
            </div>
          </div>

          <div className="p-6 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-xl">
            <p className="font-bold mb-2 text-[#FFCC00]">⏱️ Optimal Training:</p>
            <p className="text-gray-300">Apply next stimulus during supercompensation window (3-5 days after hard session)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to train <span className="text-[#FFCC00]">smarter</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your science-backed HYROX training today
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

function PrinciplesInteractive() {
  const items = [
    { title: 'Progressive Overload', desc: 'Gradually increase volume and intensity' },
    { title: 'Specificity', desc: 'Train movements and energy systems used in the race' },
    { title: 'Recovery', desc: '7-9 hours sleep + active recovery sessions' },
    { title: 'Consistency', desc: 'Regular training builds the base for peak performance' },
    { title: 'Concurrent Training', desc: 'Separate strength and endurance by 6+ hours' }
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, idx) => {
        const isOpen = active === idx;
        return (
          <button
            key={idx}
            onClick={() => setActive(isOpen ? null : idx)}
            className={`group text-left rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] ${
              isOpen ? 'border-[#FFCC00] bg-[#FFCC00]/10' : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900'
            }`}
          >
            <div className="flex items-center justify-between p-4">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <ChevronRight className={`w-5 h-5 text-[#FFCC00] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </div>
            <div className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-gray-400">{item.desc}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
