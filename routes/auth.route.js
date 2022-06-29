const router = require("express").Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        await User.create(req.body);
        return res.status(200).json({ data: 'user registered successfully' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(req.body);
        const data = jwt.sign({ _id: user._id, name: user.name }, 'secret')
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router