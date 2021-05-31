const express = require('express')
const serverless = require('serverless-http')
const getSnkrs = require('./module/snkrsData')
const cors = require('cors')

const app = express()
const router = express.Router()

router.get("/",async (req,res) => {
    const data = await getSnkrs()
    res.json(JSON.parse(data))
})

app.use("/.netlify/functions/api",router)
app.use(cors())

module.exports.handler = serverless(app)