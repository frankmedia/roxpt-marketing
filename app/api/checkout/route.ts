import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePriceIdIndividual = process.env.STRIPE_PRICE_ID_INDIVIDUAL;
const stripePriceIdRoxidPass = process.env.STRIPE_PRICE_ID_ROXID_PASS;
const appUrl = process.env.APP_URL || 'https://roxpt.app';

export async function POST(req: NextRequest) {
  try {
    if (!stripeSecretKey || !stripePriceIdIndividual || !stripePriceIdRoxidPass) {
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-11-20.acacia',
    });

    const { email, planType, successUrl, cancelUrl } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!['individual', 'roxid_pass'].includes(planType)) {
      return NextResponse.json({ error: 'Invalid plan type' }, { status: 400 });
    }

    const priceId = planType === 'individual' ? stripePriceIdIndividual : stripePriceIdRoxidPass;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${appUrl}/?checkout=success`,
      cancel_url: cancelUrl || `${appUrl}/?checkout=canceled`,
      subscription_data: {
        trial_period_days: 28,
        metadata: {
          plan_type: planType,
          email,
        },
      },
      metadata: {
        plan_type: planType,
        email,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    const message = error?.message || 'Failed to create checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

