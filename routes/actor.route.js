const router = require('express').Router()
const Actor = require('../models/actors')

router.get('/', async (req, res) => {
    try {
        const data = await Actor.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.post('/', async (req, res) => {
    try {
        const data = await Actor.create(req.body)
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const data = await Actor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const data = await Actor.deleteOne({ _id: req.params.id })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router