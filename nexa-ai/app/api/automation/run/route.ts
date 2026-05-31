import { NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/resend';

export async function POST(request: Request) {
  const { type, data } = await request.json();

  if (type === 'welcome') {
    await sendWelcomeEmail(data.email);
  }

  return NextResponse.json({ success: true, executed: type });
}
