'use client';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-8">Analytics & Reports</h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="card p-8 h-80 flex items-center justify-center text-[#64748B]">
            Sales Growth Chart
          </div>
          <div className="card p-8 h-80 flex items-center justify-center text-[#64748B]">
            Customer Acquisition
          </div>
        </div>
      </div>
    </div>
  );
}
