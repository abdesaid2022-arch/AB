import { sendWelcomeEmail } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, name } = await request.json();
  await sendWelcomeEmail(email, name);
  return NextResponse.json({ success: true });
}
