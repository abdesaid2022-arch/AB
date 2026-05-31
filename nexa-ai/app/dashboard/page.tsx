'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/auth');
    };
    checkUser();
  }, [router]);

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 ml-72 p-8">
        <div className="max-w-7xl">
          <div className="mb-12">
            <h1 className="text-5xl font-semibold tracking-tighter">Good morning</h1>
            <p className="text-[#94A3B8] mt-2 text-xl">Welcome back to your business command center</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8">
              <div className="text-[#94A3B8] text-sm mb-2">REVENUE THIS MONTH</div>
              <div className="text-6xl font-semibold tracking-tighter">$124,890</div>
            </div>
            <div className="card p-8">
              <div className="text-[#94A3B8] text-sm mb-2">ACTIVE CUSTOMERS</div>
              <div className="text-6xl font-semibold tracking-tighter">2,481</div>
            </div>
            <div className="card p-8">
              <div className="text-[#94A3B8] text-sm mb-2">AI RECOMMENDATIONS</div>
              <div className="text-6xl font-semibold tracking-tighter">47</div>
            </div>
          </div>

          <div className="mt-8 card p-8">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">Quick Actions</h3>
            <div className="flex gap-4">
              <a href="/ai" className="btn btn-primary px-8 py-3 rounded-2xl">Open AI Assistant</a>
              <a href="/inbox" className="px-8 py-3 rounded-2xl border border-white/20">View Inbox</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
