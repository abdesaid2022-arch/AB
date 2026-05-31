// Real AI Integration using Groq (fast & free tier)
export async function generateAIResponse(prompt: string) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: 'You are Nexa AI, an intelligent business assistant. Be helpful, concise, and professional.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
}
