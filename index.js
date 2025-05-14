// Import required modules and initialize environment variables
const express = require('express');
const dotenv = require('dotenv');
const userController = require('./routes/user_controller');

dotenv.config();

// Initialize Prisma Client and Express app
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

app.use('/users', userController);