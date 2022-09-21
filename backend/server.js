// Imports:
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

// Connect to the database:
connectDB();

// Initialise the App:
const app = express();

// Essential Middleware:
app.use(express.json());
app.use(express.urlencoded({extended: false})); // Enable encoded URL.

// Routing:
app.use('/api/projects', require('./routes/projectsRoutes'))
app.use('/api/articles', require('./routes/articlesRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// Start the server:
app.listen(port, () => console.log(`Server listening on port: ${port}`));