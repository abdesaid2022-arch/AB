export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0B0F]">
      <div className="border-b border-white/10 bg-[#111318]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold tracking-tighter text-xl">Nexa</div>
            <div className="text-xs px-3 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">OWNER</div>
          </div>
          <div className="text-xs text-[#64748B]">Private Access Only</div>
        </div>
      </div>
      {children}
    </div>
  );
}
