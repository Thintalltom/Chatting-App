const express = require('express');
const router = express.Router();
const { signups } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
   const {password, email} = req.body;
   bcrypt.hash(password, 10).then((hash) => {
    signups.create({
        email: email,
        password: hash
    })
    res.json('successfully login')
   })
});

router.post('/login', async(req, res) => {
    const {password, email} = req.body

    const user = await signups.findOne({where: {email: email}});

    if (!user) {
        return res.status(404).json({ error: 'User does not exist' }); // Return early if user does not exist
    }
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.status(401).json({ error: 'Wrong username and password combination' }); // Unauthorized, return 401
        }

        res.json('You are logged in');
    });
    
})

module.exports = router;