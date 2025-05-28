const express = require('express');
const router = express.Router();
const userService = require('../services/user');

router.use(express.json());

// Get all users
router.get('/', async (req, res) => {
    const users = await userService.getAllUsers();
    res.send(users);
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    const user = await userService.getUserByIdWithValidation(req.params.id);
    res.status(user.status).send(user.data);
});

// Create a new user
router.post('/create', async (req, res) => {
    const result = await userService.createUserWithValidation(req.body);
    res.status(result.status).send(result.data);
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    const result = await userService.deleteUserWithValidation(req.params.id);
    res.status(result.status).send(result.data);
});

// Update a user by ID
router.put('/:id', async (req, res) => {
    const result = await userService.updateUserWithValidation(req.params.id, req.body);
    res.status(result.status).send(result.data);
});

module.exports = router;
