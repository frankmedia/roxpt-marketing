# Environment Setup Guide

## Frontend (Next.js) Environment Variables

Create a `.env.local` file in the root directory with:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Stripe (Optional - for future Stripe Elements)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

## Backend (Supabase Edge Functions) Environment Variables

Set these in **Supabase Dashboard → Settings → Edge Functions → Secrets**:

### Stripe Configuration
- `STRIPE_SECRET_KEY` - Your Stripe secret key (sk_test_xxx or sk_live_xxx)
- `STRIPE_PRICE_ID_INDIVIDUAL` - Price ID for OxyROX individual subscription ($3.99/month)
- `STRIPE_PRICE_ID_ROXID_PASS` - Price ID for ROXID Pass subscription ($34.99/month)

### Supabase Configuration
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (not anon key!)

### App Configuration
- `APP_URL` - Your production URL (e.g., https://roxpt.app)

## Setting Supabase Edge Function Secrets

```bash
# Set secrets using Supabase CLI
supabase secrets set STRIPE_SECRET_KEY=sk_test_xxxxx
supabase secrets set STRIPE_PRICE_ID_INDIVIDUAL=price_xxxxx
supabase secrets set STRIPE_PRICE_ID_ROXID_PASS=price_xxxxx
supabase secrets set SUPABASE_URL=https://your-project.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
supabase secrets set APP_URL=https://roxpt.app

# View all secrets
supabase secrets list
```

## Converting from VITE_ to NEXT_PUBLIC_

If you have existing VITE_ environment variables, convert them:

- `VITE_STRIPE_PUBLISHABLE_KEY` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `VITE_STRIPE_PRICE_ID_INDIVIDUAL` → (Set in Supabase Edge Functions as `STRIPE_PRICE_ID_INDIVIDUAL`)
- `VITE_STRIPE_PRICE_ID_ROXID_PASS` → (Set in Supabase Edge Functions as `STRIPE_PRICE_ID_ROXID_PASS`)

## Testing Locally

1. Create `.env.local` with frontend variables
2. Start dev server: `npm run dev`
3. The pages should work if:
   - `NEXT_PUBLIC_SUPABASE_URL` is set correctly
   - Supabase Edge Functions have all required secrets
   - Database migrations are applied

## Deployment (Vercel)

Add these environment variables in **Vercel Dashboard → Settings → Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (optional)

Backend variables are set in Supabase, not Vercel.






