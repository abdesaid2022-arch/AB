import { supabaseAdmin } from '@/lib/supabase';
import { sendWelcomeEmail } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Send welcome email
  await sendWelcomeEmail(email);

  // Log to Telegram (optional)
  if (process.env.TELEGRAM_BOT_TOKEN) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: 'YOUR_CHAT_ID', // Replace with your Telegram chat ID
        text: `New user registered: ${email}`
      })
    });
  }

  return NextResponse.json({ success: true });
}
