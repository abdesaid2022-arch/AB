'use client';

export default function Employees() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-8">Employees & Teams</h1>
        
        <div className="card p-8">
          <div className="text-[#94A3B8] mb-6">Team Performance Overview</div>
          <div className="space-y-4">
            {['Sarah Chen', 'Ahmed Hassan', 'Maria Rodriguez'].map((name, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>{name}</div>
                <div className="text-[#10B981]">Active • 94% productivity</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
