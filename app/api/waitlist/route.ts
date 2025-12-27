import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, app } = await request.json();

    if (!email || !app) {
      return NextResponse.json(
        { error: 'Email and app are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedApp = app.toLowerCase();

    // Insert into Supabase (unique constraint handles duplicates)
    const { error } = await supabase
      .from('roxpt_waitlist')
      .insert({
        email: normalizedEmail,
        app: normalizedApp,
      });

    if (error) {
      // Check if it's a duplicate entry
      if (error.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'You are already on the waitlist' },
          { status: 200 }
        );
      }
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// GET endpoint to view waitlist (for admin purposes)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('roxpt_waitlist')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json({ entries: data || [] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch waitlist' },
      { status: 500 }
    );
  }
}

