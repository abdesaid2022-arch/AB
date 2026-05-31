import { sendWelcomeEmail } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  await sendWelcomeEmail(email);
  return NextResponse.json({ success: true });
}
