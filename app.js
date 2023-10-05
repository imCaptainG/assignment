const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views'))  

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { name: 'Arash Karimi' });
});


app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contactus', (req, res) => {
  res.render('contactus');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000 ....');
});
