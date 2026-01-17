'use client';

import { Shield, Eye, Lock, Database, Smartphone, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function OxyROXPrivacy() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Content */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">PRIVACY & DATA PROTECTION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OxyROX <span className="text-cyan-400">Privacy Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy explains how OxyROX collects, uses, and protects your information.
            </p>
            
            <p className="text-sm text-gray-400 mt-4">
              Effective Date: January 12, 2026
            </p>
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent rounded-2xl border border-cyan-400/50 p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              Your Privacy Matters
            </h3>
            <p className="text-gray-300">
              OxyROX is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-cyan-400" />
                1. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">1.1 Information You Provide (Optional)</h3>
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Account Information:</strong> If you choose to create an account, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li>Email address</li>
                    <li>Name (if provided via Sign in with Apple or Google)</li>
                    <li>Age (optional, for personalization)</li>
                    <li>Sex (optional, for personalization)</li>
                  </ul>
                  <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
                    <p className="text-cyan-300 text-sm">
                      <strong>Note:</strong> Creating an account is entirely optional. You can use OxyROX and purchase a subscription without creating an account.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">1.2 Usage Data (Automatically Collected)</h3>
                  <p className="text-gray-300 mb-3">When you use OxyROX, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li><strong className="text-white">Breathing Session Data:</strong> Protocol used, duration, completion status, timestamp</li>
                    <li><strong className="text-white">Progress Data:</strong> Total sessions completed, total minutes practiced, streak information</li>
                    <li><strong className="text-white">Onboarding Data:</strong> Your breathing capacity assessment results, selected goals, preferences</li>
                    <li><strong className="text-white">Settings:</strong> Language preference, notification preferences, haptics/sound settings</li>
                  </ul>
                  <p className="text-gray-300">
                    <strong className="text-white">Storage:</strong> This data is stored <strong className="text-cyan-400">locally on your device</strong> by default. If you create an account, it may be synced to our secure servers to enable cross-device access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">1.3 Device Information</h3>
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 mb-3">
                    <p className="text-green-300 font-semibold">
                      <strong>We do NOT collect device tracking data.</strong> The app does not use analytics, crash reporting, or device fingerprinting.
                    </p>
                  </div>
                  <p className="text-gray-300 mb-2">The only device-specific information accessed is:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-3">
                    <li><strong className="text-white">Device language:</strong> Used to display the app in your preferred language (detected locally, not sent to servers)</li>
                  </ul>
                  <p className="text-gray-400 text-sm">That's it. No tracking, no analytics, no unique identifiers.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">1.4 Subscription Information</h3>
                  <p className="text-gray-300">
                    When you purchase a subscription, we receive confirmation of your subscription status from Apple App Store or Google Play Store via <strong className="text-white">RevenueCat</strong> (our subscription management service). We do NOT receive your payment card information.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cyan-400" />
                2. How We Use Your Information
              </h2>
              
              <p className="text-gray-300 mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li><strong className="text-white">Provide the App:</strong> Enable breathing sessions, track your progress locally on your device, personalize recommendations</li>
                <li><strong className="text-white">Process Subscriptions:</strong> Manage your subscription status and access to premium features</li>
                <li><strong className="text-white">Sync Across Devices:</strong> If you create an account, sync your data across your devices</li>
                <li><strong className="text-white">Send Notifications:</strong> If enabled, send reminders and motivational notifications</li>
                <li><strong className="text-white">Customer Support:</strong> Respond to your inquiries and provide technical support (if you contact us)</li>
                <li><strong className="text-white">Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              </ul>

              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-white">What We DON'T Do:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Track your behavior or usage patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Use analytics or crash reporting services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Collect device fingerprints or unique identifiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Serve ads or share data with advertisers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">❌</span>
                    <span>Sell your data to third parties</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-cyan-400" />
                3. Data Storage and Security
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Local Storage</h3>
                  <p className="text-gray-300">
                    By default, all your breathing session data, progress, and settings are stored <strong className="text-white">locally on your device</strong>. This data is not transmitted to any server unless you explicitly create an account and enable cloud sync.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Cloud Storage (Optional)</h3>
                  <p className="text-gray-300 mb-2">
                    If you create an account, your data is stored securely on <strong className="text-white">Supabase</strong> (a secure, encrypted cloud database). We use industry-standard encryption:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Data in transit: TLS 1.3 encryption</li>
                    <li>Data at rest: AES-256 encryption</li>
                    <li>Access controls: Role-based access with Row Level Security (RLS)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Third-Party Services</h3>
                  <p className="text-gray-300 mb-2">We use the following trusted third-party services:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong className="text-white">RevenueCat:</strong> Subscription management and payment processing (does not store payment card details)</li>
                    <li><strong className="text-white">Apple / Google:</strong> In-app purchases and subscription billing (handled by Apple App Store / Google Play)</li>
                    <li><strong className="text-white">Supabase:</strong> Secure cloud database for optional account data sync</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                4. Data Sharing and Disclosure
              </h2>
              
              <p className="text-gray-300 mb-4">
                <strong className="text-white">We do NOT sell, rent, or trade your personal information.</strong>
              </p>
              
              <p className="text-gray-300 mb-3">We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong className="text-white">With Your Consent:</strong> We will share your information when you explicitly authorize us to do so</li>
                <li><strong className="text-white">Service Providers:</strong> We share limited data with service providers (RevenueCat, Supabase) who help us operate the App</li>
                <li><strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">5. Your Privacy Rights</h2>
              
              <p className="text-gray-300 mb-3">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your account and all associated data</li>
                <li><strong className="text-white">Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                To exercise any of these rights, please contact us at: <a href="mailto:support@oxyrox.com" className="text-cyan-400 hover:underline">support@oxyrox.com</a>
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">6. Children's Privacy</h2>
              
              <p className="text-gray-300">
                OxyROX is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@oxyrox.com" className="text-cyan-400 hover:underline">support@oxyrox.com</a> and we will delete such information.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">7. International Data Transfers</h2>
              
              <p className="text-gray-300">
                Your information may be transferred to and stored on servers located outside your country of residence. By using OxyROX, you consent to the transfer of your information to countries that may have different data protection laws than your country.
              </p>
              <p className="text-gray-300 mt-3">
                We take appropriate measures to ensure your data is protected in accordance with this Privacy Policy, regardless of where it is processed.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">8. Changes to This Privacy Policy</h2>
              
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
                <li>Posting the new Privacy Policy in the App</li>
                <li>Updating the "Effective Date" at the top of this policy</li>
                <li>Sending you a notification (if you have an account with notifications enabled)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                Your continued use of OxyROX after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8">
              <h2 className="text-2xl font-bold mb-6">9. Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
              </p>
              
              <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">OxyROX Support</p>
                <p className="text-gray-300">
                  Email: <a href="mailto:support@oxyrox.com" className="text-cyan-400 hover:underline">support@oxyrox.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 OxyROX by Kettlebells Apps. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Last Updated: January 12, 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

