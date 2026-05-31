// Nexa AI - Premium Design System
export const design = {
  colors: {
    background: '#0A0B0F',
    surface: '#111318',
    surfaceElevated: '#1A1D24',
    primary: '#6366F1',
    primaryLight: '#818CF8',
    accent: '#22D3EE',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    text: '#F8FAFC',
    textMuted: '#94A3B8',
    border: '#272B33',
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.1)',
    md: '0 8px 24px rgba(0,0,0,0.15)',
    lg: '0 16px 48px rgba(0,0,0,0.2)',
    glow: '0 0 0 1px rgba(99, 102, 241, 0.2)',
  }
} as const

export const animations = {
  spring: { type: "spring", stiffness: 300, damping: 30 },
  smooth: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
} as const