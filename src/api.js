const express = require('express')
const serverless = require('serverless-http')
const getSnkrs = require('./module/snkrsData')

const app = express()
const router = express.Router()
app.use(require('cors')())

router.get("/",async (req,res) => {
    const data = await getSnkrs()
    res.json(JSON.parse(data))
})

app.use("/.netlify/functions/api",router)

module.exports.handler = serverless(app)