# Supabase Setup Guide

This guide will help you set up Supabase to store waitlist signups.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in your project details:
   - Name: `rox-marketing` (or your preferred name)
   - Database Password: (save this securely)
   - Region: Choose closest to your users
4. Click "Create new project"

## Step 2: Create the Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-migration.sql`
4. Click "Run" to execute the migration
5. Verify the table was created by going to **Table Editor** → you should see a `roxpt_waitlist` table

## Step 3: Get Your API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys" → "anon public")

## Step 4: Set Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with the values from Step 3.

## Step 5: Test the Integration

1. Restart your dev server: `npm run dev`
2. Go to your homepage and try submitting an email to a waitlist
3. Check Supabase dashboard → **Table Editor** → `roxpt_waitlist` table to see if the entry was created

## Viewing Waitlist Entries

You can view all waitlist entries in the Supabase dashboard:
- Go to **Table Editor** → `roxpt_waitlist`
- You'll see all signups with email, app name, and timestamp

## API Endpoints

### POST `/api/waitlist`
Add a new email to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com",
  "app": "roxcycle"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "alreadyExists": false
}
```

### GET `/api/waitlist`
Get all waitlist entries (for admin purposes).

**Response:**
```json
{
  "entries": [
    {
      "id": "...",
      "email": "user@example.com",
      "app": "roxcycle",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

## Security Notes

- The `anon` key is safe to use in client-side code (it's public)
- Row Level Security (RLS) is enabled - only inserts are allowed for anonymous users
- For production, consider adding authentication to the GET endpoint if you want to protect it

## Troubleshooting

**Error: "Missing Supabase environment variables"**
- Make sure `.env.local` exists and has the correct variable names
- Restart your dev server after adding environment variables

**Error: "Failed to add to waitlist"**
- Check that the table was created correctly
- Verify your Supabase URL and anon key are correct
- Check the browser console and server logs for detailed error messages

**Table not found**
- Make sure you ran the SQL migration from `supabase-migration.sql`
- Check the Supabase dashboard to verify the `roxpt_waitlist` table exists

