-- Create waitlist table for storing early access signups
CREATE TABLE IF NOT EXISTS roxpt_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  app TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(email, app)
);

-- Enable Row Level Security (RLS)
ALTER TABLE roxpt_waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for signups)
CREATE POLICY "Allow public insert" ON roxpt_waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

