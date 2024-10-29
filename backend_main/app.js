const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // adjust based on your frontend port
    credentials: true,
}));


// Import des routes

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });


// Gestion des images:


// Utilisation de nos routes

module.exports = app