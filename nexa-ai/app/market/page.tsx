'use client';

export default function MarketIntelligence() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-8">AI Market Intelligence</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Competitor Analysis', 'Trend Detection', 'Product Opportunities'].map((title, i) => (
            <div key={i} className="card p-8">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-[#94A3B8] text-sm">AI-powered insights coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
