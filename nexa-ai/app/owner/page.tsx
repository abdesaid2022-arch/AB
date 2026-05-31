'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Ban, Users } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  created_at: string;
  banned: boolean;
}

export default function OwnerDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const OWNER_EMAIL = 'abdesaid2022@gmail.com';

  useEffect(() => {
    const checkOwner = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== OWNER_EMAIL) {
        router.push('/dashboard');
        return;
      }
      fetchUsers();
    };
    checkOwner();
  }, [router]);

  const fetchUsers = async () => {
    const { data } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
    if (data) setUsers(data);
    setLoading(false);
  };

  const banUser = async (userId: string) => {
    const res = await fetch('/api/owner/ban', {
      method: 'POST',
      body: JSON.stringify({ userId })
    });
    
    if (res.ok) {
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, banned: true } : u));
      toast.success('User banned successfully');
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#0A0B0F]">Loading Owner Dashboard...</div>;

  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="text-[#6366F1] font-medium tracking-[2px] text-sm">OWNER ONLY</div>
            <h1 className="text-5xl font-semibold tracking-tighter">Nexa Command Center</h1>
          </div>
          <div className="px-4 py-1.5 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-2 text-sm">
            <Users size={16} /> {users.length} users
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="px-8 py-5 border-b border-white/10 bg-[#111318] flex justify-between">
            <div className="font-medium">All Registered Users</div>
            <div className="text-xs text-[#64748B]">Live • Supabase</div>
          </div>

          <div className="divide-y divide-white/10">
            {users.length > 0 ? users.map(user => (
              <div key={user.id} className="px-8 py-5 flex justify-between items-center hover:bg-white/5">
                <div>
                  <div className="font-medium">{user.email}</div>
                  <div className="text-xs text-[#64748B]">Joined {new Date(user.created_at).toLocaleDateString()}</div>
                </div>
                {user.banned ? (
                  <div className="px-4 py-1 rounded-2xl bg-red-500/10 text-red-400 text-xs font-medium">BANNED</div>
                ) : (
                  <button onClick={() => banUser(user.id)} className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-2xl border border-white/10 hover:bg-red-500/10 text-red-400 transition">
                    <Ban size={15} /> Ban User
                  </button>
                )}
              </div>
            )) : (
              <div className="px-8 py-12 text-center text-[#64748B]">No users registered yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
