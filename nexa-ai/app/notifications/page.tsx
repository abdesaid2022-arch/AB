'use client';

export default function Notifications() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-8">Notifications</h1>
        <div className="card p-8 space-y-4">
          <div className="p-4 border border-white/10 rounded-2xl">New order #4821 received</div>
          <div className="p-4 border border-white/10 rounded-2xl">Low stock alert: Product XYZ</div>
          <div className="p-4 border border-white/10 rounded-2xl">Weekly AI report is ready</div>
        </div>
      </div>
    </div>
  );
}
