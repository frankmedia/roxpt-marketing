'use client';

import { Shield, Eye, Lock, Database, Mail, Smartphone } from 'lucide-react';

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
              Your privacy is important to us. This policy explains how we collect, use, and protect your information across our website and mobile applications.
            </p>
            
            <p className="text-sm text-gray-400 mt-4">
              Effective Date: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Introduction</h2>
              <p className="text-gray-300 mb-4">
                RoxPT (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the RoxPT website and the RoxSIM mobile application (collectively, the &quot;Services&quot;). This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our Services.
              </p>
              <p className="text-gray-300">
                By using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#FFCC00]" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-3">
                    When you register for our Services, we may collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Training goals, fitness level, and performance data</li>
                    <li>Payment and billing information (processed securely via third-party providers)</li>
                    <li>Communication preferences and marketing opt-ins</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Health & Fitness Data (Mobile App)</h3>
                  <p className="text-gray-300 mb-3">
                    Our RoxSIM mobile application may collect and process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Workout session data (duration, splits, exercise performance)</li>
                    <li>Movement tracking and pacing metrics</li>
                    <li>Training history and progress analytics</li>
                    <li>Device motion and fitness sensor data (with your permission)</li>
                    <li>Audio recordings (only when using voice coaching features)</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-3">
                    <strong>Note:</strong> Health and fitness data is stored securely and is never sold to third parties. You can delete this data at any time from your account settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Usage & Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Device information (model, operating system, unique device identifiers)</li>
                    <li>IP address and approximate location (for service optimization)</li>
                    <li>App usage patterns, features accessed, and session duration</li>
                    <li>Crash reports and diagnostic data (to improve app stability)</li>
                    <li>Cookies and similar tracking technologies (website only)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Information from Third Parties</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Social media profile information (if you sign in via Apple, Google, or Facebook)</li>
                    <li>Payment verification data from payment processors</li>
                    <li>Analytics and advertising partners (aggregated, non-personal data)</li>
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
                  <h3 className="text-xl font-semibold mb-3">To Provide and Improve Our Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Create and manage your account</li>
                    <li>Deliver personalized training programs and race simulations</li>
                    <li>Provide real-time coaching, pacing guidance, and performance feedback</li>
                    <li>Track your progress and generate analytics and insights</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send you service-related notifications and updates</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">To Communicate With You</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Respond to your inquiries and support requests</li>
                    <li>Send training tips, program updates, and educational content</li>
                    <li>Notify you about new features, events, and promotions (with your consent)</li>
                    <li>Request feedback and conduct surveys</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">For Analytics and Improvement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Analyze usage patterns to improve our Services</li>
                    <li>Develop new features and training methodologies</li>
                    <li>Conduct aggregated research and performance benchmarking</li>
                    <li>Ensure platform security, stability, and performance</li>
                    <li>Detect and prevent fraud, abuse, and technical issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">For Legal and Safety Purposes</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Comply with legal obligations and enforce our Terms of Service</li>
                    <li>Protect the rights, safety, and property of RoxPT and our users</li>
                    <li>Respond to legal requests from authorities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-[#FFCC00]" />
                Mobile App Permissions
              </h2>
              
              <p className="text-gray-300 mb-4">
                Our RoxSIM mobile app may request the following permissions. You can manage these permissions in your device settings at any time:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Motion & Fitness Activity</h3>
                  <p className="text-gray-300 text-sm">
                    To track your workouts, record splits, and provide real-time pacing feedback during race simulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Microphone (Optional)</h3>
                  <p className="text-gray-300 text-sm">
                    To enable voice commands and audio coaching features. Audio is processed locally and not stored.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Notifications</h3>
                  <p className="text-gray-300 text-sm">
                    To send you workout reminders, pacing alerts, and training updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Camera (Optional)</h3>
                  <p className="text-gray-300 text-sm">
                    To scan QR codes for gym equipment or share workout achievements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Location (Optional)</h3>
                  <p className="text-gray-300 text-sm">
                    To provide location-based features such as outdoor running tracking. We do not share your precise location with third parties.
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                <strong>Important:</strong> You can use the app without granting all permissions, though some features may be limited.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#FFCC00]" />
                Data Protection & Security
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Security Measures</h3>
                  <p className="text-gray-300 mb-3">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>TLS/SSL encryption for all data transmission</li>
                    <li>Secure cloud storage with access controls and monitoring</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Multi-factor authentication options for account access</li>
                    <li>Encrypted storage of sensitive health and fitness data</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-3">
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. Please use strong passwords and keep your account credentials confidential.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Data Retention</h3>
                  <p className="text-gray-300 mb-3">
                    We retain your personal information only as long as necessary to provide our Services and comply with legal obligations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Account Data:</strong> Retained while your account is active</li>
                    <li><strong>Training & Workout Data:</strong> Retained for the duration of your subscription plus 2 years (for analytics and service improvement)</li>
                    <li><strong>Payment Records:</strong> Retained as required by tax and accounting regulations (typically 7 years)</li>
                    <li><strong>Marketing Data:</strong> Retained until you opt-out or request deletion</li>
                  </ul>
                  <p className="text-gray-300 mt-3">
                    When you delete your account, we will permanently delete or anonymize your personal data within 30 days, except where we are legally required to retain it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Your Privacy Rights</h2>
              
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information under applicable data protection laws (including GDPR, CCPA, and other regulations):
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Access & Portability</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Request a copy of your personal data</li>
                    <li>Export your training data in standard formats (CSV, JSON)</li>
                    <li>Access your account information anytime via app settings</li>
                    <li>Receive information about how your data is processed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Control & Deletion</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Update or correct your information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Restrict or object to certain data processing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Consent Management</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Withdraw consent for data processing at any time</li>
                    <li>Manage cookie preferences via our cookie banner</li>
                    <li>Control app permissions in your device settings</li>
                    <li>Opt-out of analytics and advertising tracking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FFCC00]">Complaints & Appeals</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    <li>Lodge a complaint with a data protection authority</li>
                    <li>Contact us directly with privacy concerns</li>
                    <li>Request human review of automated decisions</li>
                    <li>Appeal any decisions regarding your data rights</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-zinc-800 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <strong>How to Exercise Your Rights:</strong> You can exercise these rights by contacting us at <span className="text-[#FFCC00]">privacy@roxpt.app</span> or through your account settings in the app. We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Data Sharing & Third-Party Services</h2>
              
              <p className="text-gray-300 mb-4">
                We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our Services:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Payment Processing</h3>
                  <p className="text-gray-300 text-sm">
                    Stripe and Apple/Google In-App Purchase systems for secure payment processing. We do not store your full credit card details.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Analytics & Performance</h3>
                  <p className="text-gray-300 text-sm">
                    Google Analytics, Firebase Analytics, and similar tools for aggregated usage insights and crash reporting. These services may collect device identifiers and usage data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Communication Services</h3>
                  <p className="text-gray-300 text-sm">
                    Email service providers (e.g., SendGrid, Mailchimp) for transactional emails, notifications, and marketing communications (with your consent).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Cloud Infrastructure</h3>
                  <p className="text-gray-300 text-sm">
                    AWS, Google Cloud, or similar providers for secure data storage, hosting, and backup services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFCC00]">Social Media & Authentication</h3>
                  <p className="text-gray-300 text-sm">
                    Apple Sign-In, Google Sign-In, Facebook Login for streamlined account creation. We only receive basic profile information you authorize.
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                All third-party service providers are contractually obligated to protect your information and use it only for the purposes we specify. We conduct due diligence to ensure they meet our privacy and security standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">International Data Transfers</h2>
              
              <p className="text-gray-300 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
              </p>
              
              <p className="text-gray-300 mb-4">
                When we transfer data internationally, we ensure appropriate safeguards are in place, such as:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions recognizing equivalent data protection</li>
                <li>Certification under privacy frameworks (e.g., EU-U.S. Data Privacy Framework)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Children&apos;s Privacy</h2>
              
              <p className="text-gray-300 mb-4">
                Our Services are not intended for children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children.
              </p>
              
              <p className="text-gray-300">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <span className="text-[#FFCC00]">privacy@roxpt.app</span>. We will promptly delete such information from our systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h2>
              
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
              </p>
              
              <p className="text-gray-300 mb-4">
                When we make material changes, we will:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Update the &quot;Effective Date&quot; at the top of this policy</li>
                <li>Notify you via email or in-app notification</li>
                <li>Provide a prominent notice on our website</li>
                <li>Request your consent if required by law</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                Your continued use of our Services after such changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">California Privacy Rights (CCPA)</h2>
              
              <p className="text-gray-300 mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Right to Know:</strong> Request information about the personal data we collect, use, disclose, and sell</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of your personal information (note: we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> You will not receive discriminatory treatment for exercising your privacy rights</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                To exercise these rights, contact us at <span className="text-[#FFCC00]">privacy@roxpt.app</span> or call us at the number provided below.
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#FFCC00]" />
                Contact Us
              </h2>
              
              <p className="text-gray-300 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Email (Privacy Inquiries)</p>
                  <p className="text-[#FFCC00] font-semibold">privacy@roxpt.app</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">General Support</p>
                  <p className="text-[#FFCC00] font-semibold">support@roxpt.app</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Data Protection Officer</p>
                  <p className="text-[#FFCC00] font-semibold">dpo@roxpt.app</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                We respond to all privacy inquiries within 30 days as required by applicable law. For urgent matters, please indicate &quot;URGENT&quot; in your subject line.
              </p>
              
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <p className="text-gray-400 text-sm">
                  <strong>Company Information:</strong><br />
                  RoxPT Ltd<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
