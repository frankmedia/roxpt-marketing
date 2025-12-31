'use client';

import React, { useEffect, useState } from 'react';
import { Wind, Activity, Target, Timer, Zap, Sparkles, RefreshCw, Moon, Heart, Brain, CheckCircle2, Music, Filter, CreditCard, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import SubscriptionFlow from '../components/SubscriptionFlow';
import AppVersionBadge from '../components/AppVersionBadge';

export default function OxyROX() {
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
                  planType: 'individual',
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
            // If auto-checkout fails, show error
            setShowSubscription(false);
            setSubscriptionError('Failed to create checkout session. Please try again.');
            setSubscriptionStatus('error');
          }
        };

        createCheckout();
      }
    }
  }, []);

  // Show loading state if query params present (only after mount to avoid hydration issues)
  if (mounted && showSubscription) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Loader2 className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-spin" />
            <h2 className="text-2xl font-bold mb-2">Redirecting to payment...</h2>
            <p className="text-gray-400">Please wait while we prepare your checkout session.</p>
          </div>
        </section>
      </main>
    );
  }

  // Otherwise show regular marketing page
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Available now</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-left">
            <span className="text-cyan-400">OxyROX</span>
            <br />
            Breath Training for Hybrid Performance
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mb-6 text-left">
            Short, guided breathing sessions to improve calm, sleep, energy, and recovery.
          </p>
        </div>
      </section>

      {/* Subscription Section - PROMINENT AT TOP */}
      <section className="py-8 px-4 bg-black border-y border-cyan-400/30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent rounded-3xl border-2 border-cyan-400 p-6 md:p-8 lg:p-10 shadow-2xl shadow-cyan-400/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black rounded-full mb-6 font-bold">
                <CreditCard className="w-4 h-4" />
                <span>SUBSCRIPTION</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Unlock Premium Features</h2>
              <p className="text-base md:text-lg text-gray-300 mb-4">
                Get full access to all OxyROX breathing protocols and features
              </p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-cyan-400">$3.99</span>
                <span className="text-lg md:text-xl text-gray-400">/month</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-300 mb-8">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                <span className="font-semibold">28-day free trial • Cancel anytime</span>
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
                    <label className="block text-sm font-semibold text-cyan-400 mb-2 text-left">
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
                      className="w-full px-4 py-3 bg-black border-2 border-zinc-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
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
                              planType: 'individual',
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
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white text-base font-bold rounded-full hover:bg-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                              planType: 'individual',
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
                  className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-3 md:py-5 bg-cyan-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/50"
                >
                  {subscriptionStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
                      Subscribe Now
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Why OxyROX?</h2>
            <p className="text-sm md:text-base text-gray-400">A goal-driven breathing library built for performance and recovery.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: RefreshCw, 
                title: 'Quick Reset (60–120s)', 
                desc: 'Downshift fast between calls, tasks, or sets.' 
              },
              { 
                icon: Moon, 
                title: 'Sleep & Downshift', 
                desc: 'Proven patterns (extended exhale, 4‑7‑8, physiological sigh) to fall asleep faster.' 
              },
              { 
                icon: Zap, 
                title: 'Energy', 
                desc: 'Short boosters (e.g., Breath of Fire) to feel sharp without overdoing it.' 
              },
              { 
                icon: Wind, 
                title: 'CO₂ Tolerance', 
                desc: 'Build breath control so hard efforts feel easier.' 
              },
              { 
                icon: Heart, 
                title: 'Hybrid Recovery', 
                desc: 'Post-session downshift + restore protocols to speed up recovery.' 
              },
              { 
                icon: Brain, 
                title: 'Focus / Calm Under Pressure', 
                desc: 'Box breathing and resets for clarity and control.' 
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-cyan-400/50 transition-colors">
                <Icon className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick calibration</h3>
              <p className="text-gray-400 text-sm">Breathing rhythm + breath-hold test</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Filter className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan with goal filters</h3>
              <p className="text-gray-400 text-sm">Find the right session for your needs</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Music className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Guided sessions</h3>
              <p className="text-gray-400 text-sm">With music, sound cues, and haptics (optional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Perfect for</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Activity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">HYROX / Hybrid athletes</h3>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Strength + conditioning</h3>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Wind className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Running / endurance</h3>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-black text-center">
              <Timer className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Busy professionals who train</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-zinc-900/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Breathe better. Recover faster. Perform sharper.</h2>
          <p className="text-gray-300 mb-4 text-base md:text-lg">
            Download OxyROX and start your first session today.
          </p>
          <div className="mb-6 flex justify-center">
            <AppVersionBadge appId="oxyrox" showBuild={false} />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://apps.apple.com/app/oxyrox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-cyan-500 text-white text-lg font-bold rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105"
            >
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.oxyrox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-cyan-500 text-white text-lg font-bold rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105"
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

