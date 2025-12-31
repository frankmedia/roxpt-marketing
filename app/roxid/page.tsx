'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, Flame, Heart, Wind, Zap, CheckCircle2, CreditCard, Loader2, AlertCircle, Target, Activity, Timer } from 'lucide-react';
import SubscriptionFlow from '../components/SubscriptionFlow';

export default function RoxID() {
  const [showSubscription, setShowSubscription] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [subscriptionError, setSubscriptionError] = useState<string>('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    setMounted(true);
    // Check if we have subscription query params (roxid or user)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const roxid = params.get('roxid');
      const user = params.get('user');
      const id = roxid || user;
      
      if (id) {
        // Automatically proceed to checkout when coming from app
        setUserId(id);
        setShowSubscription(true);
        
        // Auto-create checkout session
        const createCheckout = async () => {
          try {
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
            if (!supabaseUrl) {
              throw new Error('Supabase URL not configured');
            }

            const baseUrl = window.location.origin;
            const successUrl = `${baseUrl}/?checkout=success`;
            const cancelUrl = `${baseUrl}/?checkout=canceled`;

            const response = await fetch(
              `${supabaseUrl}/functions/v1/create-checkout-session`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  userId: id,
                  planType: 'roxid_pass',
                  successUrl,
                  cancelUrl,
                }),
              }
            );

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.error || `Failed to create checkout session: ${response.statusText}`);
            }

            if (!data.url) {
              throw new Error('No checkout URL returned from server');
            }

            // Redirect to Stripe Checkout
            window.location.href = data.url;
          } catch (error) {
            console.error('Checkout error:', error);
            // If auto-checkout fails, show the form instead
            setShowSubscription(false);
            setSubscriptionStatus('error');
            setSubscriptionError(error instanceof Error ? error.message : 'Failed to create checkout session');
          }
        };

        createCheckout();
      }
    }
  }, []);

  // Show subscription flow if query params present (only after mount to avoid hydration issues)
  if (mounted && showSubscription) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Loader2 className="w-12 h-12 text-[#FFCC00] mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold mb-2">Redirecting to payment...</h2>
            <p className="text-gray-400">Please wait while we prepare your checkout session.</p>
          </div>
        </section>
      </main>
    );
  }

  // Otherwise show full marketing page
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FFCC00]" />
            <span className="text-sm font-semibold text-[#FFCC00]">COMPLETE ECOSYSTEM ACCESS</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-left">
            <span className="text-[#FFCC00]">ROXID Pass</span>
            <br />
            All Apps, One Subscription
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mb-6 text-left">
            Get full access to the entire ROX ecosystem: RoxSIM, RoxCycle, OxyROX, and RoxElevate. One subscription unlocks premium features across all apps.
          </p>
        </div>
      </section>

      {/* Subscription Section - PROMINENT AT TOP */}
      <section className="py-8 px-4 bg-black border-y border-[#FFCC00]/30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-[#FFCC00]/10 via-[#FFCC00]/5 to-transparent rounded-3xl border-2 border-[#FFCC00] p-8 md:p-12 shadow-2xl shadow-[#FFCC00]/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00] text-black rounded-full mb-6 font-bold">
                <CreditCard className="w-4 h-4" />
                <span>SUBSCRIPTION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">Get ROXID Pass</h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Full access to all ROX ecosystem apps
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#FFCC00]">$34.99</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-base text-gray-300 mb-8">
                <CheckCircle2 className="w-5 h-5 text-[#FFCC00]" />
                <span className="font-semibold">28-day free trial</span>
              </div>
            </div>

            <div className="text-center">
              {subscriptionStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-500 text-sm">{subscriptionError}</p>
                </div>
              )}

              {showEmailInput ? (
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#FFCC00] mb-2 text-left">
                      Email Address *
                    </label>
                    <p className="text-sm text-gray-400 mb-3 text-left">
                      Enter the email address you used to sign up for OxyROX
                    </p>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-black border-2 border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFCC00] transition-all"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={async () => {
                        if (!userEmail.trim()) {
                          setSubscriptionError('Please enter your email address');
                          setSubscriptionStatus('error');
                          return;
                        }

                        // Validate email format
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(userEmail.trim())) {
                          setSubscriptionError('Please enter a valid email address');
                          setSubscriptionStatus('error');
                          return;
                        }

                        setSubscriptionStatus('loading');
                        setSubscriptionError('');

                        try {
                          const baseUrl = window.location.origin;
                          const successUrl = `${baseUrl}/?checkout=success`;
                          const cancelUrl = `${baseUrl}/?checkout=canceled`;

                          const response = await fetch('/api/checkout', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              email: userEmail.trim(),
                              planType: 'roxid_pass',
                              successUrl,
                              cancelUrl,
                            }),
                          });

                          let data;
                          try {
                            data = await response.json();
                          } catch (parseError) {
                            console.error('Failed to parse response:', parseError);
                            throw new Error('Server response error. Please try again.');
                          }

                          if (!response.ok) {
                            const baseMsg = data?.error || `Failed to create checkout session (${response.status})`;
                            const detail = data?.details ? ` ${data.details}` : '';
                            const errorMsg = `${baseMsg}${detail}`;
                            console.error('Checkout error:', errorMsg);
                            throw new Error(errorMsg);
                          }

                          if (!data?.url) {
                            console.error('No checkout URL in response:', data);
                            throw new Error('Invalid server response. Please try again.');
                          }

                          // Success - redirect to checkout
                          console.log('Redirecting to Stripe Checkout...');
                          window.location.href = data.url;
                        } catch (error) {
                          const errorMsg = error instanceof Error 
                            ? error.message 
                            : 'Network error. Please check your connection and try again.';
                          setSubscriptionStatus('error');
                          setSubscriptionError(errorMsg);
                          console.error('Checkout error:', error);
                        }
                      }}
                      disabled={subscriptionStatus === 'loading'}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFCC00] text-black text-base font-bold rounded-full hover:bg-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {subscriptionStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Continue
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setShowEmailInput(false);
                        setUserEmail('');
                        setSubscriptionError('');
                      }}
                      className="px-6 py-3 bg-zinc-800 text-white text-base font-bold rounded-full hover:bg-zinc-700 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={async () => {
                    // Check if we have user ID from URL params
                    if (typeof window !== 'undefined') {
                      const params = new URLSearchParams(window.location.search);
                      const roxid = params.get('roxid');
                      const user = params.get('user');
                      const id = roxid || user;

                      if (!id) {
                        // Show email input form for web users
                        setShowEmailInput(true);
                        return;
                      }

                      setSubscriptionStatus('loading');
                      setSubscriptionError('');

                      try {
                        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
                        if (!supabaseUrl) {
                          throw new Error('Supabase URL not configured');
                        }

                        const baseUrl = window.location.origin;
                        const successUrl = `${baseUrl}/?checkout=success`;
                        const cancelUrl = `${baseUrl}/?checkout=canceled`;

                        const response = await fetch(
                          `${supabaseUrl}/functions/v1/create-checkout-session`,
                          {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              userId: id,
                              planType: 'roxid_pass',
                              successUrl,
                              cancelUrl,
                            }),
                          }
                        );

                        const data = await response.json();

                        if (!response.ok) {
                          throw new Error(data.error || `Failed to create checkout session: ${response.statusText}`);
                        }

                        if (!data.url) {
                          throw new Error('No checkout URL returned from server');
                        }

                        window.location.href = data.url;
                      } catch (error) {
                        const errorMsg = error instanceof Error 
                          ? error.message 
                          : 'Failed to create checkout session. Please try again.';
                        setSubscriptionStatus('error');
                        setSubscriptionError(errorMsg);
                        console.error('Checkout error:', error);
                      }
                    }
                  }}
                  disabled={subscriptionStatus === 'loading'}
                  className="inline-flex items-center gap-3 px-12 py-5 bg-[#FFCC00] text-black text-xl font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FFCC00]/50"
                >
                  {subscriptionStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-6 h-6" />
                      Subscribe Now
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Included */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Everything Included</h2>
            <p className="text-gray-400">Full premium access to all four ROX apps</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Flame,
                name: 'RoxSIM',
                description: 'Race simulation training with timing splits, pacing feedback, and detailed analytics.',
                color: 'text-[#FFCC00]'
              },
              {
                icon: Heart,
                name: 'RoxCycle',
                description: 'Cycle tracking to optimize training and understand your body throughout every phase.',
                color: 'text-pink-400'
              },
              {
                icon: Wind,
                name: 'OxyROX',
                description: 'Breath training for hybrid performance, recovery, sleep, and energy optimization.',
                color: 'text-cyan-400'
              },
              {
                icon: Sparkles,
                name: 'RoxElevate',
                description: 'Daily motivation and mental training tools to elevate your performance mindset.',
                color: 'text-purple-400'
              },
            ].map(({ icon: Icon, name, description, color }) => (
              <div key={name} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-[#FFCC00]/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-8 h-8 ${color}`} />
                  <h3 className="text-2xl font-bold">{name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Why ROXID Pass?</h2>
            <p className="text-gray-400">The smart choice for serious athletes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Target className="w-12 h-12 text-[#FFCC00] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">All Apps Included</h3>
              <p className="text-gray-400 text-sm">$34.99/month for access to all four ROX apps</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Activity className="w-12 h-12 text-[#FFCC00] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">All Apps</h3>
              <p className="text-gray-400 text-sm">Unlock premium features across the entire ROX ecosystem</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Timer className="w-12 h-12 text-[#FFCC00] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">One Subscription</h3>
              <p className="text-gray-400 text-sm">Manage everything in one place, simple and convenient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#FFCC00] mb-2">28 Days</div>
              <div className="text-gray-400">Free Trial</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FFCC00] mb-2">Cancel Anytime</div>
              <div className="text-gray-400">No Commitments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FFCC00] mb-2">Secure</div>
              <div className="text-gray-400">Powered by Stripe</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

