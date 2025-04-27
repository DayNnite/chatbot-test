// server.js

const express = require('express');
const path = require('path');

const app = express();

// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route for testing (optional)
app.get('/', (req, res) => {
  res.send('✅ Server is live!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
