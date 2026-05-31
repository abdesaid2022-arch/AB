import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { type, message } = await request.json();

  // Send to Telegram
  if (process.env.TELEGRAM_BOT_TOKEN) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: 'YOUR_CHAT_ID',
        text: `[Nexa] ${type}: ${message}`
      })
    });
  }

  return NextResponse.json({ success: true });
}
