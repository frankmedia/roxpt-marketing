'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, Star, Users, Target, Clock, Award } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call - replace with actual form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        goals: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: "£49.99",
      period: "per month",
      description: "Perfect for beginners starting their HYROX journey",
      features: [
        "Personalized training plan",
        "Monthly check-ins",
        "Basic nutrition guidance",
        "Progress tracking"
      ],
      popular: false
    },
    {
      name: "Performance",
      price: "From £99.99",
      period: "per month", 
      description: "For serious athletes looking to compete",
      features: [
        "Advanced training programming",
        "Bi-weekly video calls",
        "Detailed nutrition planning",
        "Race strategy sessions",
        "Recovery protocols"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "From £199.99",
      period: "per month",
      description: "Premium coaching for competitive athletes",
      features: [
        "1-on-1 coaching sessions",
        "Daily check-ins",
        "Competition preparation",
        "Mental performance coaching",
        "24/7 support",
        "Custom nutrition plans",
        "Equipment recommendations"
      ],
      popular: false
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
              <Target className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">INVESTMENT IN YOUR SUCCESS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Training Plans That <span className="text-[#FFCC00]">Deliver Results</span>
            </h1>
            
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the perfect coaching package for your goals and budget. All plans include personalized programming and expert guidance.
              </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-[#FFCC00] bg-gradient-to-br from-[#FFCC00]/10 to-transparent' 
                    : 'border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-[#FFCC00]/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#FFCC00] text-black px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#FFCC00]">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 rounded-full font-bold transition-all ${
                      tier.popular
                        ? 'bg-[#FFCC00] text-black hover:bg-yellow-400'
                        : 'bg-zinc-800 text-white hover:bg-[#FFCC00] hover:text-black'
                    }`}
                  >
                    {tier.name === 'Elite' ? 'Contact Us' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry Form Section */}
          <div id="inquiry" className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to <span className="text-[#FFCC00]">Transform</span> Your Training?
                </h2>
                <p className="text-xl text-gray-300">
                  Get a personalized quote and start your journey to peak performance
                </p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-300 mb-6">
                    We've received your inquiry and will get back to you within 24 hours with a personalized quote.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-[#FFCC00] text-black font-bold rounded-full hover:bg-yellow-400 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                        placeholder="+44 7xxx xxx xxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Training Experience *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#FFCC00] transition-all"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="elite">Elite/Competitive</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Training Goals *</label>
                      <select
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#FFCC00] transition-all"
                      >
                        <option value="">What are your main goals?</option>
                        <option value="general-fitness">General Fitness & Health</option>
                        <option value="hyrox-competition">HYROX Competition</option>
                        <option value="strength-gains">Strength & Power Development</option>
                        <option value="endurance">Endurance & Conditioning</option>
                        <option value="weight-loss">Weight Loss & Body Composition</option>
                        <option value="injury-prevention">Injury Prevention & Recovery</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#FFCC00] mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all resize-none"
                        placeholder="Tell us more about your goals, current training, or any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-[#FFCC00] text-black font-bold rounded-lg hover:bg-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Why Athletes Choose RoxPT</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, label: "2000+ Athletes Coached" },
                { icon: Star, label: "4.9/5 Average Rating" },
                { icon: Award, label: "150+ Championship Titles" },
                { icon: Clock, label: "24/7 Expert Support" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FFCC00]/20 rounded-full flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-[#FFCC00]" />
                  </div>
                  <span className="text-sm text-gray-400 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
