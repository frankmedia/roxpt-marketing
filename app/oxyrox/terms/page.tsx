'use client';

import { FileText, Shield, CreditCard, AlertTriangle, Scale, Lock } from 'lucide-react';

export default function OxyROXTerms() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Content */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">LEGAL TERMS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OxyROX <span className="text-cyan-400">Terms of Use</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using the OxyROX mobile application.
            </p>
            
            <p className="text-sm text-gray-400 mt-4">
              Effective Date: January 12, 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-gray-300">
                By downloading, installing, or using the OxyROX mobile application ("App"), you agree to be bound by these Terms of Use ("Terms"). 
                If you do not agree to these Terms, do not use the App.
              </p>
            </div>

            {/* Section 2 - Medical Disclaimer */}
            <div className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent rounded-2xl border-2 border-red-400/50 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                2. Medical Disclaimer
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
                  <p className="text-red-200 font-semibold">
                    IMPORTANT: OxyROX provides breathing exercises and techniques for general wellness, stress reduction, and performance enhancement. 
                    The App is NOT intended to diagnose, treat, cure, or prevent any disease or medical condition.
                  </p>
                </div>
                
                <p className="text-gray-300">
                  The information and exercises provided by OxyROX are for educational and informational purposes only. All health-related information is based on 
                  peer-reviewed scientific research, but individual results may vary.
                </p>
                
                <p className="text-gray-300">
                  <strong className="text-white">You should always consult with a qualified healthcare professional before starting any new health, fitness, or breathing program, 
                  especially if you have any pre-existing medical conditions, including but not limited to:</strong>
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Cardiovascular disease or heart conditions</li>
                  <li>Respiratory conditions (asthma, COPD, etc.)</li>
                  <li>High or low blood pressure</li>
                  <li>Pregnancy</li>
                  <li>Epilepsy or seizure disorders</li>
                  <li>Any other chronic health condition</li>
                </ul>
                
                <p className="text-gray-300">
                  By using the App, you acknowledge that you have been advised to seek professional medical advice and that you assume all risk associated with 
                  using the breathing exercises and techniques provided.
                </p>
              </div>
            </div>

            {/* Section 3 - Subscription Terms */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-cyan-400" />
                3. Subscription Terms
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Subscription Pricing:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Monthly Subscription: $3.99 USD/month (price may vary by region)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">Subscription Details:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Payment will be charged to your Apple ID or Google Play account at confirmation of purchase</li>
                    <li>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period</li>
                    <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                    <li>You can manage your subscription and turn off auto-renewal by going to your Account Settings in the App Store or Google Play Store after purchase</li>
                    <li>Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription</li>
                    <li>No refunds will be provided for any partial subscription periods</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">4. User Account</h2>
              
              <p className="text-gray-300 mb-4">
                You may optionally create an account to sync your data across multiple devices. Creating an account is NOT required to purchase or use the App.
              </p>
              
              <p className="text-gray-300 mb-3">If you create an account, you are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">5. User Conduct</h2>
              
              <p className="text-gray-300 mb-3">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Copy, modify, or create derivative works of the App</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cyan-400" />
                6. Intellectual Property
              </h2>
              
              <p className="text-gray-300">
                The App, including all content, features, functionality, software, and design, is owned by OxyROX and is protected by international copyright, 
                trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">7. Disclaimer of Warranties</h2>
              
              <p className="text-gray-300 mb-4">
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              
              <p className="text-gray-300 mb-3">We do not warrant that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>The App will meet your requirements or expectations</li>
                <li>The App will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from using the App will be accurate or reliable</li>
                <li>Any errors in the App will be corrected</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-cyan-400" />
                8. Limitation of Liability
              </h2>
              
              <p className="text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OXYROX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES 
                RESULTING FROM:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Your use or inability to use the App</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the App</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">9. Indemnification</h2>
              
              <p className="text-gray-300">
                You agree to indemnify, defend, and hold harmless OxyROX, its affiliates, officers, directors, employees, and agents from and against any and all claims, 
                damages, obligations, losses, liabilities, costs, and expenses (including attorney's fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
                <li>Your use of the App</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">10. Termination</h2>
              
              <p className="text-gray-300">
                We reserve the right to terminate or suspend your account and access to the App at any time, without notice, for conduct that we believe violates these Terms 
                or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
              </p>
              <p className="text-gray-300 mt-3">
                You may terminate your account at any time by contacting us. Upon termination, your right to use the App will immediately cease.
              </p>
            </div>

            {/* Section 11 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">11. Governing Law and Jurisdiction</h2>
              
              <p className="text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which OxyROX operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300 mt-3">
                Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts located in the applicable jurisdiction, 
                and you consent to the personal jurisdiction of such courts.
              </p>
            </div>

            {/* Section 12 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">12. Changes to Terms</h2>
              
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
                <li>Posting the updated Terms in the App</li>
                <li>Updating the "Effective Date" at the top of these Terms</li>
                <li>Sending you a notification (if you have an account with notifications enabled)</li>
              </ul>
              <p className="text-gray-300 mt-3">
                Your continued use of the App after any changes to these Terms constitutes your acceptance of the new Terms.
              </p>
            </div>

            {/* Section 13 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">13. Severability</h2>
              
              <p className="text-gray-300">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary 
                so that these Terms will otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            {/* Section 14 */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">14. Entire Agreement</h2>
              
              <p className="text-gray-300">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and OxyROX regarding the use of the App and supersede all prior 
                and contemporaneous understandings, agreements, representations, and warranties.
              </p>
            </div>

            {/* Section 15 - Contact */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-zinc-800 p-8">
              <h2 className="text-2xl font-bold mb-6">15. Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions, concerns, or requests regarding these Terms, please contact us:
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
            <p className="text-gray-500 text-xs mt-2">
              <a href="/oxyrox/privacy" className="text-cyan-400 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

