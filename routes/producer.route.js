const router = require('express').Router()
const Producer = require('../models/producer')

router.get('/', async (req, res) => {
    try {
        const data = await Producer.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.post('/', async (req, res) => {
    try {
        const data = await Producer.create(req.body)
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const data = await Producer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const data = await Producer.deleteOne({ _id: req.params.id })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router