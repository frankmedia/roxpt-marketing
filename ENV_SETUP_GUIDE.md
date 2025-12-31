# Environment Variables Setup Guide

## Frontend Environment Variables (`.env.local`)

Your `.env.local` file should contain **ONLY** these two variables:

```bash
# Supabase Configuration (Frontend)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**That's it!** You do NOT need:
- ❌ `VITE_STRIPE_PUBLISHABLE_KEY` (not used in the code)
- ❌ `VITE_STRIPE_PRICE_ID_INDIVIDUAL` (handled by Edge Function)
- ❌ `VITE_STRIPE_PRICE_ID_ROXID_PASS` (handled by Edge Function)

---

## Backend Environment Variables (Supabase Edge Functions)

These should be set in **Supabase Dashboard** under Edge Functions → Secrets:

```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID_INDIVIDUAL=price_...
STRIPE_PRICE_ID_ROXID_PASS=price_...
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
APP_URL=https://roxpt.app
```

---

## How to Set Supabase Secrets

### Option 1: Using Supabase Dashboard
1. Go to https://supabase.com/dashboard/project/YOUR_PROJECT/settings/functions
2. Click "Edge Functions" → "Secrets"
3. Add each secret one by one

### Option 2: Using Supabase CLI
```bash
cd /Users/frank/roxpt-marketing
supabase secrets set STRIPE_SECRET_KEY=sk_live_...
supabase secrets set STRIPE_PRICE_ID_INDIVIDUAL=price_...
supabase secrets set STRIPE_PRICE_ID_ROXID_PASS=price_...
supabase secrets set SUPABASE_URL=https://your-project.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
supabase secrets set APP_URL=https://roxpt.app
```

### Verify Secrets
```bash
supabase secrets list
```

---

## Why This Separation?

- **Frontend** (`NEXT_PUBLIC_` prefix): These variables are exposed to the browser. Only include public, non-sensitive data.
- **Backend** (Supabase Secrets): These are server-side only and never exposed to the browser. Include sensitive keys like Stripe Secret Key.

---

## Current Status

✅ Your code is already configured correctly
✅ Frontend pages use `NEXT_PUBLIC_SUPABASE_URL`
✅ Edge Function uses Supabase Secrets

Just update your `.env.local` file and set your Supabase Secrets, and everything will work!



