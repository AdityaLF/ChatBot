// File: server.js

require('dotenv').config();
const express = require('express');


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());    


app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENROUTER_API_KEY; 
  const { messages } = req.body; 

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not configured on the server.' });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`, 
        "Content-Type": "application/json",

        "HTTP-Referer": "https://www.sitename.com", 
        "X-Title": "SiteName",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: messages, 
      }),
    });

    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    res.status(500).json({ error: 'Failed to communicate with the API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});