'use client';

export default function Inventory() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-8">Inventory Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-8">
            <div className="text-[#94A3B8]">Total Products</div>
            <div className="text-6xl font-semibold mt-2 tracking-tighter">1,284</div>
          </div>
          <div className="card p-8">
            <div className="text-[#94A3B8]">Low Stock Items</div>
            <div className="text-6xl font-semibold mt-2 tracking-tighter text-orange-400">23</div>
          </div>
          <div className="card p-8">
            <div className="text-[#94A3B8]">Out of Stock</div>
            <div className="text-6xl font-semibold mt-2 tracking-tighter text-red-400">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
