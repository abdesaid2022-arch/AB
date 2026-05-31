'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, BarChart3, Bot } from 'lucide-react';

export default function NexaLanding() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center">
              <span className="font-bold text-xl tracking-tighter">N</span>
            </div>
            <span className="font-semibold text-2xl tracking-tighter">Nexa AI</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="/auth" className="px-5 py-2 text-sm font-medium hover:text-[#818CF8] transition-colors">
              Sign in
            </a>
            <a href="/auth" 
               className="btn btn-primary px-6 py-2.5 rounded-2xl text-sm font-semibold flex items-center gap-2">
              Get started free
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="text-sm font-medium text-[#94A3B8]">Now in public beta</span>
          </div>

          <h1 className="text-7xl font-semibold tracking-tighter leading-none mb-6">
            The intelligent<br />business operating system
          </h1>
          
          <p className="text-2xl text-[#94A3B8] max-w-2xl mx-auto mb-10">
            One beautiful workspace. Powered by AI.<br />Built for modern businesses.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="/auth" 
               className="btn btn-primary px-10 py-4 rounded-3xl text-lg font-semibold flex items-center gap-3 group">
              Start for free
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#features" 
               className="px-8 py-4 rounded-3xl text-lg font-medium border border-white/20 hover:bg-white/5 transition-all">
              See how it works
            </a>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-y border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-x-16 text-[#64748B] text-sm font-medium">
          <div>Trusted by founders at</div>
          <div className="flex gap-10 opacity-60">
            <span>Linear</span>
            <span>Vercel</span>
            <span>Stripe</span>
            <span>Framer</span>
          </div>
        </div>
      </div>

      {/* Features with strong visual identity */}
      <div id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#6366F1] font-medium tracking-[3px] text-sm mb-3">POWERFUL MODULES</div>
          <h2 className="text-5xl font-semibold tracking-tighter">Everything your business needs.<br />In one elegant workspace.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Bot, title: "AI Assistant", desc: "Your intelligent business partner that learns and grows with you" },
            { icon: Users, title: "Unified Inbox", desc: "All customer conversations in one beautiful place" },
            { icon: BarChart3, title: "Smart Dashboard", desc: "Real-time insights with breathtaking visualizations" },
            { icon: Zap, title: "Automation", desc: "Powerful workflows that run on autopilot" },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="card p-8 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1A1D24] flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/10 transition-colors">
                <feature.icon className="w-6 h-6 text-[#6366F1]" />
              </div>
              <h3 className="font-semibold text-2xl mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="border-t border-white/10 py-20">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-5xl font-semibold tracking-tighter mb-6">Ready to transform how you work?</h2>
          <a href="/auth" 
             className="inline-flex btn btn-primary px-12 py-4 rounded-3xl text-lg font-semibold items-center gap-3">
            Create your workspace
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
