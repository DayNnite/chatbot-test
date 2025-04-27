const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// This will give people your widget code
app.get('/widget.js', (req, res) => {
  res.type('application/javascript');
  res.send(`
    window.MyChatWidget = {
      init: function(options) {
        console.log('Chatbot started for client:', options.clientId);
      }
    };
  `);
});

// Simple check if server is alive
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
