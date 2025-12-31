import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log('=== Create Checkout Session Request ===');
    
    // Get environment variables
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY');
    const stripePriceIdIndividual = Deno.env.get('STRIPE_PRICE_ID_INDIVIDUAL');
    const stripePriceIdRoxidPass = Deno.env.get('STRIPE_PRICE_ID_ROXID_PASS');
    const appUrl = Deno.env.get('APP_URL') || 'https://roxpt.app';
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    // Detailed configuration checks
    if (!stripeSecretKey) {
      console.error('❌ STRIPE_SECRET_KEY is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error: Stripe secret key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!stripePriceIdIndividual) {
      console.error('❌ STRIPE_PRICE_ID_INDIVIDUAL is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error: Individual price ID not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!stripePriceIdRoxidPass) {
      console.error('❌ STRIPE_PRICE_ID_ROXID_PASS is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error: RoxID Pass price ID not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('❌ Supabase configuration is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error: Database connection not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('✅ All environment variables configured');

    // Import Stripe
    const Stripe = (await import('https://esm.sh/stripe@14.21.0')).default;
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Create Supabase client with service role
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Parse request body
    let requestData;
    try {
      requestData = await req.json();
    } catch (error) {
      console.error('❌ Failed to parse request body:', error);
      return new Response(
        JSON.stringify({ error: 'Invalid request: Could not parse JSON data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { userId, email, planType, successUrl, cancelUrl } = requestData;
    console.log('📝 Request data:', { userId: userId ? '✓' : '✗', email: email ? '✓' : '✗', planType });

    // Validate required fields
    if (!planType) {
      console.error('❌ Missing planType in request');
      return new Response(
        JSON.stringify({ error: 'Please select a subscription plan' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!userId && !email) {
      console.error('❌ Missing both userId and email');
      return new Response(
        JSON.stringify({ error: 'Please provide your email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate planType
    if (planType !== 'individual' && planType !== 'roxid_pass') {
      console.error('❌ Invalid planType:', planType);
      return new Response(
        JSON.stringify({ error: 'Invalid subscription plan selected' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error('❌ Invalid email format:', email);
        return new Response(
          JSON.stringify({ error: 'Please enter a valid email address' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // Get or create Stripe customer
    let customerId: string;
    let finalUserId: string;

    // If userId is provided, use it directly
    if (userId) {
      console.log('🔍 Looking up user by ID:', userId);
      finalUserId = userId;
      
      // Check if user exists in roxid table
      const { data: userData, error: userError } = await supabase
        .from('roxid')
        .select('stripe_customer_id, email')
        .eq('id', userId)
        .single();

      if (userError && userError.code !== 'PGRST116') {
        console.error('❌ Database error fetching user:', userError);
        return new Response(
          JSON.stringify({ error: 'Unable to verify your account. Please try again.' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (userData?.stripe_customer_id) {
        console.log('✅ Found existing Stripe customer');
        customerId = userData.stripe_customer_id;
      } else {
        if (!userData) {
          console.error('❌ User not found in database');
          return new Response(
            JSON.stringify({ error: 'Account not found. Please sign up in the app first.' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Create new Stripe customer
        console.log('💳 Creating new Stripe customer for user');
        try {
          const customer = await stripe.customers.create({
            email: userData.email || undefined,
            metadata: {
              roxid: userId,
            },
          });
          customerId = customer.id;
          console.log('✅ Stripe customer created:', customerId);

          // Update user record with Stripe customer ID
          const { error: updateError } = await supabase
            .from('roxid')
            .update({ stripe_customer_id: customerId })
            .eq('id', userId);

          if (updateError) {
            console.error('⚠️  Could not save Stripe customer ID to database:', updateError);
            // Continue anyway - customer is created in Stripe
          }
        } catch (stripeError) {
          console.error('❌ Stripe customer creation failed:', stripeError);
          return new Response(
            JSON.stringify({ error: 'Unable to set up payment account. Please try again.' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    } else if (email) {
      const normalizedEmail = email.toLowerCase().trim();
      console.log('🔍 Looking up user by email:', normalizedEmail);
      
      // First try to find by email field
      let { data: userData, error: userError } = await supabase
        .from('roxid')
        .select('id, stripe_customer_id, email')
        .eq('email', normalizedEmail)
        .single();

      // If not found by email, try auth_email
      if (userError && userError.code === 'PGRST116') {
        console.log('🔍 Email not found, trying auth_email...');
        const { data: authEmailData, error: authEmailError } = await supabase
          .from('roxid')
          .select('id, stripe_customer_id, email')
          .eq('auth_email', normalizedEmail)
          .single();

        if (!authEmailError && authEmailData) {
          console.log('✅ Found user by auth_email');
          userData = authEmailData;
          userError = null;
        }
      }

      if (userError && userError.code !== 'PGRST116') {
        console.error('❌ Database error looking up email:', userError);
        return new Response(
          JSON.stringify({ error: 'Unable to verify your account. Please try again.' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (userData) {
        console.log('✅ User found in database');
        finalUserId = userData.id;
        
        if (userData.stripe_customer_id) {
          console.log('✅ Existing Stripe customer found');
          customerId = userData.stripe_customer_id;
        } else {
          console.log('💳 Creating Stripe customer for existing user');
          try {
            const customer = await stripe.customers.create({
              email: userData.email || normalizedEmail,
              metadata: {
                roxid: finalUserId,
              },
            });
            customerId = customer.id;
            console.log('✅ Stripe customer created:', customerId);

            const { error: updateError } = await supabase
              .from('roxid')
              .update({ stripe_customer_id: customerId })
              .eq('id', finalUserId);

            if (updateError) {
              console.error('⚠️  Could not save Stripe customer ID:', updateError);
            }
          } catch (stripeError) {
            console.error('❌ Stripe customer creation failed:', stripeError);
            return new Response(
              JSON.stringify({ error: 'Unable to set up payment account. Please try again.' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
        }
      } else {
        console.log('ℹ️  New subscriber - creating Stripe customer for website signup');
        try {
          const customer = await stripe.customers.create({
            email: normalizedEmail,
            metadata: {
              source: 'website_subscription',
              plan_type: planType,
            },
          });
          customerId = customer.id;
          finalUserId = normalizedEmail;
          console.log('✅ Stripe customer created for new subscriber:', customerId);
        } catch (stripeError) {
          console.error('❌ Stripe customer creation failed:', stripeError);
          return new Response(
            JSON.stringify({ error: 'Unable to set up payment account. Please try again.' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    } else {
      return new Response(
        JSON.stringify({ error: 'Must provide either userId or email' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Select price ID based on plan type
    const priceId = planType === 'individual' ? stripePriceIdIndividual : stripePriceIdRoxidPass;
    console.log('💰 Plan type:', planType, '| Price ID:', priceId);

    // Create checkout session
    console.log('🛒 Creating Stripe checkout session...');
    try {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: 'subscription',
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: successUrl || `${appUrl}/?checkout=success`,
        cancel_url: cancelUrl || `${appUrl}/?checkout=canceled`,
        subscription_data: {
          metadata: {
            roxid: finalUserId,
            plan_type: planType,
          },
          trial_period_days: 28,
        },
        metadata: {
          roxid: finalUserId,
          plan_type: planType,
        },
      });

      console.log('✅ Checkout session created successfully:', session.id);
      console.log('🔗 Checkout URL:', session.url);

      return new Response(
        JSON.stringify({ url: session.url }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (stripeError) {
      console.error('❌ Failed to create Stripe checkout session:', stripeError);
      
      // Provide specific error messages for common Stripe errors
      let errorMessage = 'Unable to create checkout session. Please try again.';
      
      if (stripeError.type === 'StripeInvalidRequestError') {
        if (stripeError.message.includes('price')) {
          errorMessage = 'Invalid subscription plan configuration. Please contact support.';
        } else if (stripeError.message.includes('customer')) {
          errorMessage = 'Unable to verify customer account. Please try again.';
        }
      } else if (stripeError.type === 'StripeAPIError') {
        errorMessage = 'Payment service temporarily unavailable. Please try again in a moment.';
      }
      
      return new Response(
        JSON.stringify({ 
          error: errorMessage,
          details: stripeError.message 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    
    let errorMessage = 'An unexpected error occurred. Please try again.';
    let errorDetails = error.message || 'Unknown error';
    
    // Handle different error types
    if (error.name === 'TypeError') {
      errorMessage = 'Request processing error. Please check your input and try again.';
    } else if (error.name === 'SyntaxError') {
      errorMessage = 'Invalid data format. Please try again.';
    }
    
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: errorDetails
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

