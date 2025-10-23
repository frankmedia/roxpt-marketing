'use client';

import { Instagram, Award, Users, Target, Clock } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Head Coach & HYROX Specialist",
      image: "/images/team/sarah-mitchell.jpg",
      instagram: "https://instagram.com/sarah_rox_coach",
      bio: "Former elite athlete turned HYROX champion. Sarah has coached 200+ athletes to podium finishes and brings 8 years of competitive experience to every training session.",
      specialties: ["Race Strategy", "Mental Preparation", "Recovery Optimization"],
      achievements: ["3x HYROX World Champion", "Certified Strength Coach", "500+ Athletes Coached"]
    },
    {
      name: "Marcus Thompson",
      role: "Strength & Conditioning Coach",
      image: "/images/team/marcus-thompson.jpg", 
      instagram: "https://instagram.com/marcus_strength",
      bio: "Powerlifting champion with a passion for functional fitness. Marcus specializes in building the raw strength and power needed to dominate HYROX competitions.",
      specialties: ["Power Development", "Injury Prevention", "Movement Quality"],
      achievements: ["2x British Powerlifting Champion", "MSc Sports Science", "10+ Years Experience"]
    },
    {
      name: "Emma Rodriguez",
      role: "Nutrition & Performance Coach",
      image: "/images/team/emma-rodriguez.jpg",
      instagram: "https://instagram.com/emma_nutrition_coach", 
      bio: "Registered dietitian and former professional athlete. Emma creates personalized nutrition plans that fuel peak performance and accelerate recovery.",
      specialties: ["Sports Nutrition", "Weight Management", "Supplementation"],
      achievements: ["RD Certification", "Former Pro Athlete", "1000+ Nutrition Plans"]
    },
    {
      name: "James Chen",
      role: "Movement & Mobility Specialist",
      image: "/images/team/james-chen.jpg",
      instagram: "https://instagram.com/james_mobility",
      bio: "Physical therapist and movement expert who ensures every athlete moves efficiently and pain-free. James combines clinical expertise with athletic performance.",
      specialties: ["Injury Rehabilitation", "Movement Screening", "Mobility Training"],
      achievements: ["DPT Physical Therapy", "FMS Certified", "500+ Athletes Rehabilitated"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Breadcrumbs />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
              <Users className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">WORLD-CLASS COACHING TEAM</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Meet the <span className="text-[#FFCC00]">Experts</span><br />
              Behind Your Success
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Our elite coaching team combines decades of experience, proven results, and cutting-edge science to deliver the most effective training programs in the industry.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#FFCC00]/50 transition-all duration-500 hover:scale-[1.02]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  {/* Profile Image */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFCC00] to-yellow-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center">
                            <span className="text-2xl font-bold text-[#FFCC00]">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-black" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-[#FFCC00] font-semibold mb-3">{member.role}</p>
                      
                      {/* Instagram Link */}
                      <a 
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFCC00] transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">Follow on Instagram</span>
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#FFCC00] mb-3 uppercase tracking-wide">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm hover:bg-[#FFCC00]/20 transition-colors"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#FFCC00] mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-[#FFCC00] rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Team's Impact</h2>
              <p className="text-gray-400">Combined expertise delivering results</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "25+", label: "Years Combined Experience" },
                { value: "2000+", label: "Athletes Coached" },
                { value: "150+", label: "Championship Titles" },
                { value: "98%", label: "Client Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFCC00] mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Train with the <span className="text-[#FFCC00]">Best</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of athletes who have transformed their performance with our world-class coaching team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing#inquiry"
                className="px-8 py-4 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="/join-team"
                className="px-8 py-4 border-2 border-[#FFCC00] text-[#FFCC00] font-bold rounded-full hover:bg-[#FFCC00] hover:text-black transition-all"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
