// Import required modules and initialize environment variables
const { PrismaClient } = require('./generated/prisma');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Prisma Client and Express app
const prisma = new PrismaClient();
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

// Get all users
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.send(users);
});

// Create a new user
app.post('/users', async (req, res) => {
    const newProduct = req.body;
    const newUser = await prisma.user.create({
        data: {
            name: newProduct.name,
            email: newProduct.email,
            password: newProduct.password,
        }
    });

    res.status(201).send(newUser);
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
        where: {
            id: Number(id),
        }
    });

    res.status(200).send(deletedUser);
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }
    });

    res.status(200).send(updatedUser);
});