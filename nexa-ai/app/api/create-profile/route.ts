import { supabaseAdmin } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId, email } = await request.json();

  // Create profile
  await supabaseAdmin.from('profiles').insert({
    id: userId,
    email: email,
    created_at: new Date().toISOString()
  });

  // Send welcome email
  await sendWelcomeEmail(email);

  return NextResponse.json({ success: true });
}
