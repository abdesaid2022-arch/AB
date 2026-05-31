import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: '7019977550',
      text: message
    })
  });

  return NextResponse.json({ success: true });
}
