'use client';

export default function SalesModule() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold tracking-tighter mb-8">Sales & Orders</h1>
      
      <div className="grid grid-cols-4 gap-6">
        {['Total Orders', 'Revenue', 'Pending', 'Delivered'].map((title, i) => (
          <div key={i} className="card p-8">
            <div className="text-[#94A3B8] text-sm">{title}</div>
            <div className="text-5xl font-semibold mt-3 tracking-tighter">{[1248, '$89.4k', 67, 1081][i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
