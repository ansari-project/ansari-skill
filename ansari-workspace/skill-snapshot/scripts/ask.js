// Ansari API call script
// Called by run_code tool with args.question

const response = await fetch('https://api-35.ansari.chat/api/v2/mcp-complete', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: args.question }]
  })
});

if (!response.ok) {
  return {
    error: true,
    status: response.status,
    message: `Ansari API returned ${response.status}`
  };
}

const data = await response.json();
return data;
