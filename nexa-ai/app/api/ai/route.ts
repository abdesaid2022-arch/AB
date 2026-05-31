import { generateAIResponse } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const response = await generateAIResponse(prompt);
    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ response: "Sorry, AI service is temporarily unavailable." }, { status: 500 });
  }
}
