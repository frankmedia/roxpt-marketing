'use client';

import { useState } from 'react';
import { Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function JoinTeam() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    certifications: '',
    experience: '',
    hyroxExperience: '',
    availability: '',
    why: '',
    portfolio: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call - replace with actual submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        certifications: '',
        experience: '',
        hyroxExperience: '',
        availability: '',
        why: '',
        portfolio: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <Breadcrumbs />

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
            <Users className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-sm font-semibold text-[#FFCC00]">CAREER OPPORTUNITY</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Join Our <span className="text-[#FFCC00]">Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            We're looking for passionate, qualified personal trainers who specialize in HYROX training to join our growing team.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Work With <span className="text-[#FFCC00]">RoxPT?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <Award className="w-12 h-12 mb-4 text-[#FFCC00]" />
              <h3 className="text-2xl font-bold mb-3">Expert Community</h3>
              <p className="text-gray-400">
                Join a network of elite HYROX trainers and learn from the best in the sport.
              </p>
            </div>

            <div className="p-8 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <Users className="w-12 h-12 mb-4 text-[#FFCC00]" />
              <h3 className="text-2xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-400">
                Work on your own terms with remote coaching opportunities and flexible hours.
              </p>
            </div>

            <div className="p-8 bg-zinc-900/50 rounded-xl border border-zinc-800">
              <Heart className="w-12 h-12 mb-4 text-[#FFCC00]" />
              <h3 className="text-2xl font-bold mb-3">Make an Impact</h3>
              <p className="text-gray-400">
                Help athletes achieve their HYROX goals with science-backed programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-3xl">
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border-2 border-green-500 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
              <p className="text-xl text-gray-300 mb-8">
                Thank you for your interest in joining RoxPT. We'll review your application and get back to you within 5-7 business days.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-3 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Apply to <span className="text-[#FFCC00]">Join Us</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="p-6 bg-black rounded-xl border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="+44 7XXX XXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="London, UK"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Background */}
                <div className="p-6 bg-black rounded-xl border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Professional Background</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Certifications *</label>
                      <input
                        type="text"
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="e.g., NASM-CPT, CSCS, Level 3 PT"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Years of Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#FFCC00] transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="0-2">0-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">HYROX Experience *</label>
                      <select
                        name="hyroxExperience"
                        value={formData.hyroxExperience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#FFCC00] transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="competed">I've competed in HYROX</option>
                        <option value="trained">I've trained HYROX athletes</option>
                        <option value="both">Both competed and trained athletes</option>
                        <option value="interested">Interested but no direct experience</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Availability *</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#FFCC00] transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="freelance">Freelance/Contract</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="p-6 bg-black rounded-xl border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Tell Us More</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Why do you want to join RoxPT? *</label>
                      <textarea
                        name="why"
                        value={formData.why}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all resize-none"
                        placeholder="Tell us about your passion for HYROX and why you'd be a great fit..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Portfolio / Website (Optional)</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="https://yourwebsite.com or Instagram/LinkedIn"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-[#FFCC00] text-black text-lg font-bold rounded-full hover:bg-yellow-400 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

    </main>
  );
}

