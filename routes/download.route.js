const router = require("express").Router();
const axios = require('axios')

const login = process.env.login;
const key = process.env.key;
const url = process.env.apiUrl;

router.post('/generate-download-link', async (req, res) => {
    try {
        const file = req.body.file;
        const { data: { result: { ticket } } } = await axios.get(`${url}/dlticket?file=${file}&login=${login}&key=${key}`)
        return setTimeout(async () => {
            try {
                const { data: { result } } = await axios.get(`${url}/dl?file=${file}&ticket=${ticket}`)
                return res.status(200).json(result)
            } catch (error) {
                console.log(error.message)
            }
        }, 5000)
    } catch (error) {
        return res.status(500).json({ err: error.message })
    }
})

module.exports = router