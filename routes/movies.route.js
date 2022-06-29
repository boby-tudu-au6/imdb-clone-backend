const router = require('express').Router()
const Movie = require('../models/movie');
const Actor = require('../models/actors');
const Producer = require('../models/producer')

router.get('/', async (req, res) => {
    try {
        const data = await Movie.find().populate('actors producers')
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.post('/', async (req, res) => {
    try {
        let actors = req.body.actors
        let producers = req.body.producers
        console.log(req.body)

        await Promise.all(
            actors.map(async (item, i) => {
                if (typeof item === 'object') {
                    const data = await Actor.create(item)
                    actors[i] = data._id
                }
            })
        )
        await Promise.all(
            producers.map(async (item, i) => {
                if (typeof item === 'object') {
                    const data = await Producer.create(item)
                    producers[i] = data._id
                }
            })
        )
        const obj = { ...req.body, actors, producers }
        const data = await Movie.create(obj)
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const data = await Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const data = await Movie.deleteOne({ _id: req.params.id })
        await Actor.deleteMany({ name: "Hritik" })
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = router