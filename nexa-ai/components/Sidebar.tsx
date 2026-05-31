'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Bot, Inbox, ShoppingCart, Zap, Users, 
  Package, BarChart3, Users2, TrendingUp, Bell 
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/ai', label: 'AI Assistant', icon: Bot },
  { href: '/inbox', label: 'Unified Inbox', icon: Inbox },
  { href: '/sales', label: 'Sales', icon: ShoppingCart },
  { href: '/automation', label: 'Automations', icon: Zap },
  { href: '/inventory', label: 'Inventory', icon: Package },
  { href: '/employees', label: 'Employees', icon: Users2 },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/social', label: 'Social Media', icon: Users },
  { href: '/market', label: 'Market Intel', icon: TrendingUp },
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/owner', label: 'Owner Center', icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 border-r border-white/10 bg-[#111318] h-screen fixed left-0 top-0 p-6 flex flex-col overflow-auto">
      <div className="mb-10 pt-2">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5]" />
          <span className="font-semibold text-2xl tracking-tighter">Nexa</span>
        </div>
      </div>

      <div className="space-y-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                active 
                  ? 'bg-[#6366F1] text-white' 
                  : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={19} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
