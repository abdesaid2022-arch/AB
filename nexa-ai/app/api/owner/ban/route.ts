import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId } = await request.json();

  const { error } = await supabaseAdmin
    .from('profiles')
    .update({ banned: true })
    .eq('id', userId);

  return NextResponse.json({ success: !error });
}
