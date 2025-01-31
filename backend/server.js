const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Car Showroom API is running' });
});

// Very simple verify token
const VERIFY_TOKEN = "12345";

// Webhook verification endpoint
app.get('/webhook', (req, res) => {
  console.log('Received GET request to /webhook');
  
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  
  console.log('Mode:', mode);
  console.log('Token:', token);
  console.log('Challenge:', challenge);

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Verification successful!');
    res.status(200).send(challenge);
  } else {
    console.log('Verification failed!');
    res.sendStatus(403);
  }
});

// Webhook event handling
app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('EVENT_RECEIVED');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
