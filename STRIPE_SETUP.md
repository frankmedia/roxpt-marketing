# Stripe Payment Integration Setup Guide

This guide walks you through setting up Stripe payments for OxyROX with both individual subscriptions ($3.99/month) and ROXID Pass ($34.99/month).

## 📋 Prerequisites

- Stripe account (https://stripe.com)
- Supabase project with Edge Functions enabled
- Node.js and npm installed
- Supabase CLI installed (`npm install -g supabase`)

## 🗄️ Step 1: Update Database Schema

Run the migration to add subscription fields to your `roxid` table:

1. Go to your Supabase Dashboard → SQL Editor
2. Copy and paste the contents of `supabase/migrations/007_add_subscription_fields.sql`
3. Click "Run"

This adds:
- `stripe_customer_id` - Stripe customer ID
- `stripe_subscription_id` - Stripe subscription ID
- `subscription_status` - Current status (active, canceled, etc.)
- `subscription_type` - Plan type (individual or roxid_pass)
- `subscription_start_date` - When subscription started
- `subscription_end_date` - When subscription ends/renews
- `trial_end_date` - When the 28-day trial ends

## 💳 Step 2: Set Up Stripe Products & Prices

### Create Products in Stripe Dashboard

1. Go to https://dashboard.stripe.com/products
2. Click "Add product"

**Product 1: OxyROX Monthly**
- Name: `OxyROX Monthly Subscription`
- Description: `Access to OxyROX breathing protocols`
- Pricing: Recurring
- Price: `$3.99`
- Billing period: `Monthly`
- Click "Save"
- **Copy the Price ID** (starts with `price_`)

**Product 2: ROXID Pass**
- Name: `ROXID Pass`
- Description: `Full access to all ROX ecosystem apps`
- Pricing: Recurring
- Price: `$34.99`
- Billing period: `Monthly`
- Click "Save"
- **Copy the Price ID** (starts with `price_`)

## 🔐 Step 3: Configure Environment Variables

### Frontend (.env.local)

Create or update your `.env.local` file with:

```env
# Supabase (should already exist)
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Stripe Publishable Key (starts with pk_test_ or pk_live_)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Price IDs from Step 2 (optional - Edge Functions use these from secrets)
NEXT_PUBLIC_STRIPE_PRICE_ID_INDIVIDUAL=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_ID_ROXID_PASS=price_xxxxxxxxxxxxx
```

**Where to find these:**
- Publishable Key: https://dashboard.stripe.com/apikeys (click "Reveal test key")
- Price IDs: https://dashboard.stripe.com/products (click on each product to see Price ID)

### Backend (Supabase Edge Functions)

1. Go to your Supabase Dashboard → Project Settings → Edge Functions → Secrets
2. Add these secrets:

```
STRIPE_SECRET_KEY = sk_test_your_secret_key_here
STRIPE_PRICE_ID_INDIVIDUAL = price_xxxxxxxxxxxxx
STRIPE_PRICE_ID_ROXID_PASS = price_xxxxxxxxxxxxx
APP_URL = https://roxpt.app
SUPABASE_URL = https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY = your_service_role_key_here
```

**Where to find these:**
- Secret Key: https://dashboard.stripe.com/apikeys (click "Reveal test key")
- Service Role Key: Supabase Dashboard → Settings → API → service_role key
- APP_URL: Your production app URL (or http://localhost:3000 for development)

## 🚀 Step 4: Deploy Supabase Edge Functions

### Login to Supabase CLI

```bash
supabase login
```

### Link to your project

```bash
supabase link --project-ref your-project-ref
```

**Find your project ref:**
- Go to https://supabase.com/dashboard/project/your-project/settings/general
- Copy the "Reference ID"

### Deploy Edge Functions

```bash
# Deploy checkout session creator
supabase functions deploy create-checkout-session

# Deploy customer portal
supabase functions deploy create-portal-session

# Deploy webhook handler
supabase functions deploy stripe-webhook
```

## 🪝 Step 5: Configure Stripe Webhook

### Get your webhook endpoint URL

After deploying, your webhook URL will be:
```
https://your-project-ref.supabase.co/functions/v1/stripe-webhook
```

### Add webhook in Stripe Dashboard

1. Go to https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://your-project-ref.supabase.co/functions/v1/stripe-webhook`
4. Description: `Supabase subscription events`
5. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
6. Click "Add endpoint"
7. **Copy the Signing Secret** (starts with `whsec_`)

### Add webhook secret to Supabase

1. Go to Supabase Dashboard → Project Settings → Edge Functions → Secrets
2. Add:
```
STRIPE_WEBHOOK_SECRET = whsec_xxxxxxxxxxxxx
```

Or use CLI:

```bash
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

## 🧪 Step 6: Test the Integration

### Test Mode (Recommended First)

1. Make sure you're using **test keys** (pk_test_, sk_test_)
2. Use Stripe's test cards: https://stripe.com/docs/testing

**Test Card Numbers:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

**Test Flow:**
1. Visit `/oxyrox?roxid=test123` or `/roxid?roxid=test123`
2. Should auto-redirect to Stripe Checkout
3. Use test card `4242 4242 4242 4242`
4. Expiry: Any future date (e.g., `12/34`)
5. CVC: Any 3 digits (e.g., `123`)
6. ZIP: Any 5 digits (e.g., `12345`)

### Verify Webhook is Working

1. Complete a test purchase
2. Go to https://dashboard.stripe.com/webhooks
3. Click on your webhook endpoint
4. Check "Recent deliveries" - should show successful events

### Check Database Updates

After successful payment:
1. Go to Supabase Dashboard → Table Editor → `roxid`
2. Find your user record (id = test123)
3. Verify these fields are populated:
   - `stripe_customer_id`
   - `stripe_subscription_id`
   - `subscription_status` = 'active'
   - `subscription_type` = 'individual' or 'roxid_pass'

## 🔴 Step 7: Go Live

### Switch to Live Mode

1. Go to https://dashboard.stripe.com
2. Toggle from "Test mode" to "Live mode" (top right)
3. Repeat Steps 2-5 with **live keys**:
   - Live publishable key (starts with `pk_live_`)
   - Live secret key (starts with `sk_live_`)
   - Create live products and prices
   - Create live webhook endpoint

### Update Environment Variables

Replace all test keys with live keys in:
- Frontend `.env.local` file
- Supabase Edge Function secrets

### Re-deploy Edge Functions

```bash
supabase functions deploy create-checkout-session
supabase functions deploy create-portal-session
supabase functions deploy stripe-webhook
```

## 🛡️ Security Checklist

- [ ] Never commit `.env.local` files to git
- [ ] Never expose secret keys (sk_) in frontend code
- [ ] Always validate webhook signatures
- [ ] Use HTTPS in production
- [ ] Test thoroughly in test mode first
- [ ] Monitor Stripe Dashboard for failed payments

## 🔧 Troubleshooting

### "No Stripe customer found"
- User needs to complete at least one checkout before managing subscription
- Check database for `stripe_customer_id`

### "Failed to create checkout session"
- Verify environment variables are set correctly
- Check Supabase Edge Function logs
- Ensure price IDs match your Stripe products

### Webhook not firing
- Check webhook signing secret is correct
- Verify webhook URL is accessible
- Check Stripe webhook logs for delivery failures

### "Subscription status not updating"
- Check webhook secret is configured
- Look at Supabase Edge Function logs
- Verify database functions exist (run migration)

## 📚 Additional Resources

- Stripe API Docs: https://stripe.com/docs/api
- Supabase Edge Functions: https://supabase.com/docs/guides/functions
- Stripe Testing: https://stripe.com/docs/testing
- Stripe Webhooks: https://stripe.com/docs/webhooks

## 💰 Pricing Summary

- **Individual App**: $3.99/month (recurring monthly)
- **ROXID Pass**: $34.99/month (recurring monthly)
- **Trial Period**: 28 days free for all users

## 🎉 You're Done!

Your app now has full Stripe payment integration with:
✅ Subscription checkout
✅ Customer portal for managing subscriptions
✅ Webhook handling for automatic updates
✅ 28-day free trial
✅ Database tracking of subscription status

Users can now:
1. Try the app free for 28 days
2. Choose between individual or ecosystem-wide subscription
3. Manage their subscription through Stripe Customer Portal
4. Automatic access control based on subscription status

