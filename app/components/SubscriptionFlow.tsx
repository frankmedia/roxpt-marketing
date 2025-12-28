'use client';

import { useState } from 'react';
import { CheckCircle2, CreditCard, Loader2, AlertCircle, Wind, Sparkles } from 'lucide-react';

interface SubscriptionFlowProps {
  userId: string | null;
  defaultPlanType: 'individual' | 'roxid_pass';
  onError?: (message: string) => void;
}

export default function SubscriptionFlow({ userId, defaultPlanType, onError }: SubscriptionFlowProps) {
  const [selectedPlan, setSelectedPlan] = useState<'individual' | 'roxid_pass'>(defaultPlanType);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const plans = [
    {
      id: 'individual' as const,
      name: 'OxyROX Monthly',
      description: 'Access to OxyROX breathing protocols',
      price: '$3.99',
      period: 'per month',
      icon: Wind,
      color: 'text-cyan-400',
      popular: false
    },
    {
      id: 'roxid_pass' as const,
      name: 'ROXID Pass',
      description: 'Full access to all ROX ecosystem apps',
      price: '$34.99',
      period: 'per month',
      icon: Sparkles,
      color: 'text-[#FFCC00]',
      popular: true
    }
  ];

  const handleSubscribe = async () => {
    // Must have either userId or email
    if (!userId && !userEmail.trim()) {
      const error = 'Please enter the email address you used to sign up for OxyROX.';
      setStatus('error');
      setErrorMessage(error);
      if (onError) onError(error);
      return;
    }

    // Validate email format if using email
    if (!userId && userEmail.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail.trim())) {
        const error = 'Please enter a valid email address.';
        setStatus('error');
        setErrorMessage(error);
        if (onError) onError(error);
        return;
      }
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Get Supabase URL from environment
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (!supabaseUrl) {
        throw new Error('Supabase URL not configured');
      }

      // Build success and cancel URLs (using canceled not cancel)
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const successUrl = `${baseUrl}/?checkout=success`;
      const cancelUrl = `${baseUrl}/?checkout=canceled`;

      // Call Supabase Edge Function
      const response = await fetch(
        `${supabaseUrl}/functions/v1/create-checkout-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...(userId ? { userId } : { email: userEmail.trim() }),
            planType: selectedPlan,
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
      const errorMsg = error instanceof Error 
        ? error.message 
        : 'Failed to create checkout session. Please try again.';
      setStatus('error');
      setErrorMessage(errorMsg);
      if (onError) onError(errorMsg);
      console.error('Checkout error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00]/10 border border-[#FFCC00]/30 rounded-full mb-8">
          <CreditCard className="w-4 h-4 text-[#FFCC00]" />
          <span className="text-sm font-semibold text-[#FFCC00]">CHOOSE YOUR PLAN</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Subscribe to <span className="text-[#FFCC00]">Unlock Premium</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
          Choose the perfect plan for your performance journey. All plans include a 28-day free trial.
        </p>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}

      {/* Email Input Field - shown when userId is not present */}
      {!userId && (
        <div className="mb-8 p-6 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl">
          <label htmlFor="user-email" className="block text-sm font-semibold text-gray-300 mb-3">
            Email Address
          </label>
          <p className="text-sm text-gray-400 mb-4">
            Enter the email address you used to sign up for OxyROX
          </p>
          <input
            id="user-email"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20 transition-all"
            disabled={status === 'loading'}
          />
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isSelected = selectedPlan === plan.id;
          
          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'border-[#FFCC00] bg-gradient-to-br from-[#FFCC00]/10 to-transparent scale-105'
                  : 'border-zinc-800 bg-gradient-to-br from-zinc-900 to-black hover:border-[#FFCC00]/50'
              } ${plan.popular ? 'md:order-first' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FFCC00] text-black px-3 py-1.5 rounded-full font-bold text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${plan.color}`} />
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="block text-4xl font-bold text-[#FFCC00]">{plan.price}</span>
                  <span className="block text-gray-400">{plan.period}</span>
                </div>
                
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.id === 'individual' ? (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">OxyROX breathing protocols</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">Performance optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">28-day free trial</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">All ROX ecosystem apps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">RoxSIM, RoxCycle, OxyROX, RoxElevate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">All ROX ecosystem apps included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FFCC00] flex-shrink-0" />
                        <span className="text-gray-300">28-day free trial</span>
                      </li>
                    </>
                  )}
                </ul>

                <div className={`w-full h-1 rounded-full mb-4 ${
                  isSelected ? 'bg-[#FFCC00]' : 'bg-zinc-800'
                }`} />
                
                {isSelected && (
                  <div className="text-center text-sm text-[#FFCC00] font-semibold mb-4">
                    ✓ Selected
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <button
          onClick={handleSubscribe}
          disabled={status === 'loading' || (!userId && !userEmail.trim())}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFCC00] text-black text-lg font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating checkout session...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Continue to Payment
            </>
          )}
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          You&apos;ll be redirected to Stripe to complete your secure payment
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-zinc-800">
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
    </div>
  );
}

