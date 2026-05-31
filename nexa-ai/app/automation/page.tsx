'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Zap, Mail, Users, Bell } from 'lucide-react';
import { toast } from 'sonner';

interface Automation {
  id: number;
  name: string;
  description: string;
  trigger: string;
  action: string;
  enabled: boolean;
  icon: any;
}

export default function AutomationCenter() {
  const [automations, setAutomations] = useState<Automation[]>([
    {
      id: 1,
      name: "Welcome New User",
      description: "Send welcome email when someone registers",
      trigger: "New user signs up",
      action: "Send email via Resend",
      enabled: true,
      icon: Users,
    },
    {
      id: 2,
      name: "Low Stock Alert",
      description: "Notify owner when inventory is low",
      trigger: "Stock below 10 units",
      action: "Send notification + Email",
      enabled: true,
      icon: Bell,
    },
    {
      id: 3,
      name: "New Order Notification",
      description: "Alert team when a new order is placed",
      trigger: "Order created",
      action: "Send email to owner",
      enabled: false,
      icon: Zap,
    },
    {
      id: 4,
      name: "AI Weekly Summary",
      description: "Send AI-generated business summary every week",
      trigger: "Every Monday 9:00 AM",
      action: "Generate + Email report",
      enabled: true,
      icon: Mail,
    },
  ]);

  const toggleAutomation = (id: number) => {
    setAutomations(prev =>
      prev.map(auto =>
        auto.id === id ? { ...auto, enabled: !auto.enabled } : auto
      )
    );
    toast.success('Automation updated successfully');
  };

  const runAutomation = (id: number) => {
    const auto = automations.find(a => a.id === id);
    toast.success(`Running: ${auto?.name}`, {
      description: 'Automation executed successfully',
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[#6366F1] text-sm tracking-[3px] font-medium mb-2">AUTOMATION CENTER</div>
            <h1 className="text-6xl font-semibold tracking-tighter">Automations</h1>
          </div>
          <div className="text-right">
            <div className="text-sm text-[#94A3B8]">4 active workflows</div>
            <div className="text-xs text-[#64748B]">Powered by Nexa Engine</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {automations.map((automation, index) => (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1D24] flex items-center justify-center">
                    <automation.icon className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl tracking-tight">{automation.name}</h3>
                    <p className="text-[#94A3B8] mt-1 text-sm">{automation.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleAutomation(automation.id)}
                  className={`px-4 py-1.5 rounded-2xl text-sm font-medium flex items-center gap-2 transition-all ${
                    automation.enabled 
                      ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30' 
                      : 'bg-white/5 text-[#64748B] border border-white/10'
                  }`}
                >
                  {automation.enabled ? <Pause size={15} /> : <Play size={15} />}
                  {automation.enabled ? 'Active' : 'Paused'}
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-t border-white/10 pt-4">
                  <span className="text-[#64748B]">Trigger</span>
                  <span className="font-medium">{automation.trigger}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Action</span>
                  <span className="font-medium">{automation.action}</span>
                </div>
              </div>

              <button
                onClick={() => runAutomation(automation.id)}
                className="mt-6 w-full py-3 rounded-2xl border border-white/10 hover:bg-white/5 text-sm font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Play size={16} /> Run Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-[#64748B]">
          Automations run reliably using Resend + Supabase. n8n integration available later.
        </div>
      </div>
    </div>
  );
}
