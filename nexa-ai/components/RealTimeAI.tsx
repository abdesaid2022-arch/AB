'use client';

import { useState } from 'react';

export function RealTimeAI() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async (prompt: string) => {
    setLoading(true);
    const res = await fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data.response);
    setLoading(false);
  };

  return (
    <div className="card p-6">
      <button onClick={() => askAI('Give me 3 business growth ideas')} className="btn btn-primary px-6 py-2 rounded-2xl">
        Ask AI for Ideas
      </button>
      {loading && <div className="mt-4 text-sm">Thinking...</div>}
      {result && <div className="mt-4 text-sm whitespace-pre-wrap">{result}</div>}
    </div>
  );
}
