const express = require('express');
const router = express.Router();
const {signups} = require('../models');

router.post('/', async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await signups.findOne({where: {email: email}})
        if(!user){
            return res.json({message: 'user not found'});
        }
        if(user.password !== password) {
            return res.json({ message: 'incorrect password'});

        }
        res.json({message: 'login successful'})
    } catch (error) {
        console.error('error during login:', error)
    }

});

module.exports = router