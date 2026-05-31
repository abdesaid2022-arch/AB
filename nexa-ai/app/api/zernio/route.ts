import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { action, data } = await request.json();

  const response = await fetch('https://zernio.com/api/v1/' + action, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.ZERNIO_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  return NextResponse.json(result);
}
