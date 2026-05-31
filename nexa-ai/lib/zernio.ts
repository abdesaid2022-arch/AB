export async function callZernio(action: string, data: any) {
  const response = await fetch(`https://zernio.com/api/v1/${action}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.ZERNIO_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}
