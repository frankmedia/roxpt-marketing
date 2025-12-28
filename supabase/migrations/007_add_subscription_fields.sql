-- Add subscription fields to roxid table
-- This assumes the roxid table already exists with an 'id' column

-- Add subscription-related columns if they don't exist
DO $$ 
BEGIN
  -- Add stripe_customer_id
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'stripe_customer_id') THEN
    ALTER TABLE roxid ADD COLUMN stripe_customer_id TEXT;
  END IF;

  -- Add stripe_subscription_id
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'stripe_subscription_id') THEN
    ALTER TABLE roxid ADD COLUMN stripe_subscription_id TEXT;
  END IF;

  -- Add subscription_status
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'subscription_status') THEN
    ALTER TABLE roxid ADD COLUMN subscription_status TEXT;
  END IF;

  -- Add subscription_type
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'subscription_type') THEN
    ALTER TABLE roxid ADD COLUMN subscription_type TEXT;
  END IF;

  -- Add subscription_start_date
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'subscription_start_date') THEN
    ALTER TABLE roxid ADD COLUMN subscription_start_date TIMESTAMP WITH TIME ZONE;
  END IF;

  -- Add subscription_end_date
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'subscription_end_date') THEN
    ALTER TABLE roxid ADD COLUMN subscription_end_date TIMESTAMP WITH TIME ZONE;
  END IF;

  -- Add trial_end_date
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'trial_end_date') THEN
    ALTER TABLE roxid ADD COLUMN trial_end_date TIMESTAMP WITH TIME ZONE;
  END IF;

  -- Add email (for email-based lookup)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'roxid' AND column_name = 'email') THEN
    ALTER TABLE roxid ADD COLUMN email TEXT;
  END IF;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_roxid_stripe_customer_id ON roxid(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_roxid_stripe_subscription_id ON roxid(stripe_subscription_id);
CREATE INDEX IF NOT EXISTS idx_roxid_subscription_status ON roxid(subscription_status);
CREATE INDEX IF NOT EXISTS idx_roxid_email ON roxid(email);

