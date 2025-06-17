// File: server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
//const fetch = require('node-fetch'); // You might need to install this: npm install node-fetch@2

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json());           // Enable the express server to process JSON body

// The new API endpoint that the frontend will call
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENROUTER_API_KEY; // Get API key securely from environment variables
  const { messages } = req.body; // Get messages from the frontend request

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not configured on the server.' });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`, // Use the secure API key here
        "Content-Type": "application/json",
        // These headers are optional on the backend but good practice to keep if needed
        "HTTP-Referer": "https://www.sitename.com", 
        "X-Title": "SiteName",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: messages, // Pass along the messages from the frontend
      }),
    });

    const data = await response.json();
    res.json(data); // Send the response from OpenRouter back to the frontend
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    res.status(500).json({ error: 'Failed to communicate with the API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});