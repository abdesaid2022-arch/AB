'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function PremiumButton({ children, onClick, variant = 'primary', className = '' }: PremiumButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'border border-white/20'} 
        px-8 py-3.5 rounded-3xl font-semibold flex items-center justify-center gap-2 transition-all ${className}`}
    >
      {children}
    </motion.button>
  );
}
