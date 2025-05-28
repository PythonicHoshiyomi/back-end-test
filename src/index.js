// Import required modules and initialize environment variables
const express = require('express');
const dotenv = require('dotenv');
const userController = require('./controller/user');

dotenv.config();

// Initialize Express app
const port = process.env.PORT || 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server and log endpoints
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  console.log(`Users can be found at http://localhost:${port}/users`)
});

// Root endpoint
app.get('/', async (req, res) => {
    console.log('hello world');
});

// Use userController for /users routes
app.use('/users', userController);
