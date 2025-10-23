'use client';

import { Cookie, Settings, Shield, Eye, Database } from 'lucide-react';

export default function Cookies() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Content */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
              <Cookie className="w-4 h-4 text-[#FFCC00]" />
              <span className="text-sm font-semibold text-[#FFCC00]">COOKIE POLICY</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie <span className="text-[#FFCC00]">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Learn about how we use cookies and similar technologies to enhance your experience.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-[#FFCC00]" />
                What Are Cookies?
              </h2>
              
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Session Cookies</h3>
                  <p className="text-sm text-gray-400">
                    Temporary cookies that are deleted when you close your browser
                  </p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Persistent Cookies</h3>
                  <p className="text-sm text-gray-400">
                    Cookies that remain on your device for a set period of time
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-[#FFCC00]" />
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#FFCC00] pl-6">
                  <h3 className="text-xl font-semibold mb-3">Necessary Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are essential for the website to function properly. They cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li>Authentication and login status</li>
                    <li>Security and fraud prevention</li>
                    <li>Basic website functionality</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    Help us understand how visitors interact with our website to improve performance.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li>Google Analytics for usage statistics</li>
                    <li>Page views and user behavior</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking and debugging</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    Enable enhanced functionality and personalization features.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li>Language and region preferences</li>
                    <li>Customized content delivery</li>
                    <li>User interface preferences</li>
                    <li>Training program customization</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    <li>Social media integration</li>
                    <li>Advertising campaign tracking</li>
                    <li>Remarketing and retargeting</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#FFCC00]" />
                Third-Party Cookies
              </h2>
              
              <p className="text-gray-300 mb-6">
                We may use third-party services that set their own cookies. These are governed by 
                their respective privacy policies.
              </p>
              
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Google Analytics</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Provides website usage statistics and performance insights.
                  </p>
                  <p className="text-xs text-gray-500">
                    Privacy Policy: <a href="https://policies.google.com/privacy" className="text-[#FFCC00] hover:underline">Google Privacy Policy</a>
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Stripe</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Payment processing and fraud prevention services.
                  </p>
                  <p className="text-xs text-gray-500">
                    Privacy Policy: <a href="https://stripe.com/privacy" className="text-[#FFCC00] hover:underline">Stripe Privacy Policy</a>
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Social Media Platforms</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Facebook, Instagram, and other social media integrations.
                  </p>
                  <p className="text-xs text-gray-500">
                    Privacy Policy: <a href="https://www.facebook.com/privacy/explanation" className="text-[#FFCC00] hover:underline">Facebook Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#FFCC00]" />
                Managing Your Cookie Preferences
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Cookie Consent Banner</h3>
                  <p className="text-gray-300 mb-4">
                    When you first visit our website, you&apos;ll see a cookie consent banner where you can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Accept all cookies</li>
                    <li>Decline non-essential cookies</li>
                    <li>Customize your preferences by category</li>
                    <li>Change your settings at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    You can also manage cookies through your browser settings:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold text-[#FFCC00] mb-2">Chrome</h4>
                      <p className="text-sm text-gray-400">
                        Settings → Privacy and security → Cookies and other site data
                      </p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold text-[#FFCC00] mb-2">Safari</h4>
                      <p className="text-sm text-gray-400">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold text-[#FFCC00] mb-2">Firefox</h4>
                      <p className="text-sm text-gray-400">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-4">
                      <h4 className="font-semibold text-[#FFCC00] mb-2">Edge</h4>
                      <p className="text-sm text-gray-400">
                        Settings → Cookies and site permissions → Cookies and site data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#FFCC00]" />
                Data Retention
              </h2>
              
              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Cookie Lifespan</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> 30 days to 2 years depending on purpose</li>
                    <li><strong>Analytics Cookies:</strong> Up to 26 months</li>
                    <li><strong>Marketing Cookies:</strong> Up to 90 days</li>
                  </ul>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h3 className="font-semibold text-[#FFCC00] mb-2">Automatic Deletion</h3>
                  <p className="text-gray-300 text-sm">
                    We automatically delete expired cookies and regularly review our cookie usage 
                    to ensure we only collect what's necessary for our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8">
              <h2 className="text-2xl font-bold mb-6">Updates to This Policy</h2>
              
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons.
              </p>
              
              <div className="bg-zinc-800 rounded-lg p-4">
                <p className="text-[#FFCC00] font-semibold mb-2">Contact Us</p>
                <p className="text-gray-400 text-sm mb-2">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <p className="text-[#FFCC00]">cookies@roxpt.app</p>
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
