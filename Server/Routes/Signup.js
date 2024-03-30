const express = require('express');
const router = express.Router();
const {Signup} = require('../models')

router.get('/', async (req, res) => {
    const listofUsers = await Signup.findAll();
    res.json(listofUsers)
})

router.post('/', async (req, res) => {
    try {
        // Extract user data from request body
        const { email, Password } = req.body;

        // Create a new user in the database
        const newUser = await Signup.create({
            email: email,
            Password: Password
        });

        // Respond with the newly created user object
        res.json(newUser);
    } catch (error) {
        // If an error occurs, respond with an error message
        console.error("Error adding user:", error);
        res.status(500).json({ error: 'Failed to add user' });
    }

});

module.exports = router;