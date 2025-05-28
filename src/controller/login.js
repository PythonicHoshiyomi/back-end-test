const express = require('express');
const router = express.Router();
const loginService = require('../services/login');
const { validateLogin } = require('../middleware/validation');

// Login route
router.post('/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginService.login(email, password);
        if (result.status === 200) {
            res.status(200).json(result.data);
        } else {
            res.status(result.status).json({ error: result.data });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Logout route
router.post('/logout', (req, res) => {
    // Invalidate the session or token here
    // For simplicity, we just send a success message
    res.status(200).json({ message: 'Logged out successfully' });
});

