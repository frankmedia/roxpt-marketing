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
    // Get environment variables
    const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY');
    const stripePriceIdIndividual = Deno.env.get('STRIPE_PRICE_ID_INDIVIDUAL');
    const stripePriceIdRoxidPass = Deno.env.get('STRIPE_PRICE_ID_ROXID_PASS');
    const appUrl = Deno.env.get('APP_URL') || 'https://roxpt.app';
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!stripeSecretKey || !stripePriceIdIndividual || !stripePriceIdRoxidPass) {
      throw new Error('Missing Stripe configuration');
    }

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error('Missing Supabase configuration');
    }

    // Import Stripe
    const Stripe = (await import('https://esm.sh/stripe@14.21.0')).default;
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Create Supabase client with service role
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Parse request body
    const { userId, email, planType, successUrl, cancelUrl } = await req.json();

    if (!planType) {
      return new Response(
        JSON.stringify({ error: 'Missing planType' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Must have either userId or email
    if (!userId && !email) {
      return new Response(
        JSON.stringify({ error: 'Missing userId or email' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate planType
    if (planType !== 'individual' && planType !== 'roxid_pass') {
      return new Response(
        JSON.stringify({ error: 'Invalid planType. Must be "individual" or "roxid_pass"' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get or create Stripe customer
    let customerId: string;
    let finalUserId: string;

    // If userId is provided, use it directly
    if (userId) {
      finalUserId = userId;
      
      // Check if user exists in roxid table
      const { data: userData, error: userError } = await supabase
        .from('roxid')
        .select('stripe_customer_id, email')
        .eq('id', userId)
        .single();

      if (userError && userError.code !== 'PGRST116') {
        // PGRST116 is "not found" - that's okay, we'll create a new customer
        console.error('Error fetching user:', userError);
      }

      if (userData?.stripe_customer_id) {
        customerId = userData.stripe_customer_id;
      } else {
        // User exists but no Stripe customer yet
        if (!userData) {
          // User doesn't exist - return error
          return new Response(
            JSON.stringify({ error: 'User account not found. Please sign up for OxyROX first.' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        // Create new Stripe customer
        const customer = await stripe.customers.create({
          email: userData.email || undefined,
          metadata: {
            roxid: userId,
          },
        });
        customerId = customer.id;

        // Update user record with Stripe customer ID (only update, don't insert)
        const { error: updateError } = await supabase
          .from('roxid')
          .update({ stripe_customer_id: customerId })
          .eq('id', userId);

        if (updateError) {
          console.error('Error updating user:', updateError);
        }
      }
    } else if (email) {
      // Look up user by email (check both email and auth_email fields)
      const normalizedEmail = email.toLowerCase().trim();
      
      // First try to find by email field
      let { data: userData, error: userError } = await supabase
        .from('roxid')
        .select('id, stripe_customer_id, email')
        .eq('email', normalizedEmail)
        .single();

      // If not found by email, try auth_email
      if (userError && userError.code === 'PGRST116') {
        const { data: authEmailData, error: authEmailError } = await supabase
          .from('roxid')
          .select('id, stripe_customer_id, email')
          .eq('auth_email', normalizedEmail)
          .single();

        if (!authEmailError && authEmailData) {
          userData = authEmailData;
          userError = null;
        }
      }

      if (userError && userError.code !== 'PGRST116') {
        console.error('Error fetching user by email:', userError);
        return new Response(
          JSON.stringify({ error: 'Error looking up user account' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (userData) {
        // User exists, use their ID
        finalUserId = userData.id;
        
        if (userData.stripe_customer_id) {
          customerId = userData.stripe_customer_id;
        } else {
          // Create Stripe customer for existing user
          const customer = await stripe.customers.create({
            email: userData.email || normalizedEmail,
            metadata: {
              roxid: finalUserId,
            },
          });
          customerId = customer.id;

          // Update user record with Stripe customer ID
          const { error: updateError } = await supabase
            .from('roxid')
            .update({ stripe_customer_id: customerId })
            .eq('id', finalUserId);

          if (updateError) {
            console.error('Error updating user:', updateError);
          }
        }
      } else {
        // User doesn't exist yet - create a new Stripe customer
        // They can link their account later when they sign up in the app
        const customer = await stripe.customers.create({
          email: normalizedEmail,
          metadata: {
            source: 'website_subscription',
            plan_type: planType,
          },
        });
        customerId = customer.id;
        
        // Use email as temporary user ID
        finalUserId = normalizedEmail;
      }
    } else {
      return new Response(
        JSON.stringify({ error: 'Must provide either userId or email' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Select price ID based on plan type
    const priceId = planType === 'individual' ? stripePriceIdIndividual : stripePriceIdRoxidPass;

    // Create checkout session
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

    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to create checkout session' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

