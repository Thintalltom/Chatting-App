const express = require('express');
const router = express.Router();
const { signups } = require('../models');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.post('/', async(req, res) => {
   const {password, email} = req.body;
    // Check if the email already exists in the database
    const existingUser = await signups.findOne({ where: { email: email } });
    if (existingUser) {
        return res.status(400).json({ error: 'Email address already registered' });
    }
    
   bcrypt.hash(password, 10).then((hash) => {
    signups.create({
        email: email,
        password: hash
    })
    res.json('successfully login')
   })
});

router.post('/login', async (req, res) => {
    const { password, email } = req.body;

    const user = await signups.findOne({ where: { email: email } });

    if (!user) {
        return res.status(404).json({ error: 'User does not exist' });
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.status(401).json({ error: 'Wrong email and password combination' });
        }
        res.cookie('userId', user.id, { httpOnly: true, secure: true });
        res.json('You are logged in');
    }).catch(err => {
        console.error('Error comparing passwords:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});


module.exports = router;