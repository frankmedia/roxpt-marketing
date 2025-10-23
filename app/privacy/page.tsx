'use client';

import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Content */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
              <Shield className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">PRIVACY & DATA PROTECTION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-[#FFCC00]">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#FFCC00]" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Training goals and fitness level</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Website usage and interaction data</li>
                    <li>Training session data and progress</li>
                    <li>Device information and IP address</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#FFCC00]" />
                How We Use Your Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Create and deliver personalized training programs</li>
                    <li>Provide coaching and support services</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Communicate about your training progress</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Improvement & Analytics</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Develop new features and training methods</li>
                    <li>Conduct research and analytics (anonymized)</li>
                    <li>Ensure platform security and performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#FFCC00]" />
                Data Protection & Security
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Security Measures</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure cloud storage with industry-standard protection</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication protocols</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Data Retention</h3>
                  <p className="text-gray-300">
                    We retain your personal information only as long as necessary to provide our services 
                    and comply with legal obligations. Training data is kept for the duration of your 
                    subscription plus 2 years for service improvement purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Access & Portability</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Request a copy of your personal data</li>
                    <li>Export your training data in standard formats</li>
                    <li>Access your account information anytime</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Control & Deletion</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Update or correct your information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Third-Party Services</h2>
              
              <p className="text-gray-300 mb-4">
                We may use trusted third-party services to enhance your experience:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Payment Processing:</strong> Stripe for secure payment processing</li>
                <li><strong>Analytics:</strong> Google Analytics for website usage insights</li>
                <li><strong>Communication:</strong> Email services for notifications and updates</li>
                <li><strong>Cloud Storage:</strong> AWS for secure data storage and backup</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-[#FFCC00]" />
                <span className="text-gray-300">
                  For privacy-related questions or requests, contact us at:
                </span>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-4">
                <p className="text-[#FFCC00] font-semibold">privacy@roxpt.app</p>
                <p className="text-gray-400 text-sm mt-1">
                  We respond to all privacy inquiries within 48 hours
                </p>
              </div>
              
              <p className="text-gray-400 text-sm mt-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
