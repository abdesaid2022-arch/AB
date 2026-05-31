'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your Nexa AI assistant. How can I help your business today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      
      const data = await res.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error connecting to the AI.' 
      }]);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] flex flex-col">
      <div className="border-b border-white/10 p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#6366F1] flex items-center justify-center">
          <Bot size={22} />
        </div>
        <div>
          <div className="font-semibold text-xl tracking-tight">Nexa AI Assistant</div>
          <div className="text-xs text-[#22D3EE]">Powered by Groq • Real-time</div>
        </div>
      </div>

      <div className="flex-1 p-8 max-w-3xl mx-auto w-full space-y-6 overflow-auto">
        {messages.map((msg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : ''}`}
          >
            <div className={`max-w-[80%] px-6 py-4 rounded-3xl ${msg.role === 'user' 
              ? 'bg-[#6366F1] text-white' 
              : 'glass border border-white/10'}`}>
              {msg.content}
            </div>
          </motion.div>
        ))}
        {loading && <div className="text-[#64748B]">Thinking...</div>}
      </div>

      <div className="p-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask anything about your business..."
            className="input flex-1 py-4 px-6 rounded-3xl"
          />
          <button 
            onClick={sendMessage}
            disabled={loading}
            className="btn btn-primary px-8 rounded-3xl flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
