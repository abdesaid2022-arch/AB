'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    if (!email) return toast.error('Please enter your email');
    
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true }
    });

    if (error) {
      toast.error(error.message);
    } else {
      setStep('otp');
      toast.success('Verification code sent');
    }
    setLoading(false);
  };

  const verifyOTP = async () => {
    if (!otp) return toast.error('Please enter the code');
    
    setLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'email'
    });

    if (error) {
      toast.error('Invalid code');
    } else {
      // Create profile in database
      if (data.user) {
        await fetch('/api/create-profile', {
          method: 'POST',
          body: JSON.stringify({
            userId: data.user.id,
            email: data.user.email
          })
        });
      }
      
      toast.success('Welcome to Nexa AI');
      window.location.href = '/dashboard';
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
              <span className="font-bold text-3xl tracking-tighter">N</span>
            </div>
            <span className="font-semibold text-4xl tracking-tighter">Nexa AI</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 'email' && (
            <motion.div key="email" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-tighter mb-3">Create your workspace</h1>
                <p className="text-[#94A3B8]">Enter your email to get started</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-5 top-4 text-[#64748B]" size={20} />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="input w-full pl-14 py-4 rounded-3xl text-lg" />
                </div>
                <button onClick={sendOTP} disabled={loading} className="btn btn-primary w-full py-4 rounded-3xl text-lg font-semibold flex items-center justify-center gap-3 disabled:opacity-70">
                  {loading ? 'Sending...' : 'Continue with email'} {!loading && <ArrowRight size={20} />}
                </button>
              </div>
            </motion.div>
          )}

          {step === 'otp' && (
            <motion.div key="otp" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-3xl bg-[#1A1D24] flex items-center justify-center mb-6">
                  <Shield className="text-[#6366F1]" size={32} />
                </div>
                <h1 className="text-4xl font-semibold tracking-tighter mb-3">Check your email</h1>
                <p className="text-[#94A3B8]">We sent a code to {email}</p>
              </div>

              <div className="space-y-4">
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} placeholder="000000" className="input w-full py-5 text-center text-4xl tracking-[12px] font-mono rounded-3xl" />
                <button onClick={verifyOTP} disabled={loading} className="btn btn-primary w-full py-4 rounded-3xl text-lg font-semibold flex items-center justify-center gap-3 disabled:opacity-70">
                  {loading ? 'Verifying...' : 'Verify & Enter Nexa'}
                </button>
                <button onClick={() => setStep('email')} className="w-full text-sm text-[#94A3B8] hover:text-white transition">Use a different email</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
