import { NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/resend';

export async function POST(request: Request) {
  const { automation, payload } = await request.json();

  if (automation === 'welcome_email') {
    await sendWelcomeEmail(payload.email);
  }

  return NextResponse.json({ executed: automation });
}
