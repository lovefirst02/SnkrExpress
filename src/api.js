const express = require('express')
const serverless = require('serverless-http')
const {getSnkrs, getLevel} = require('./module/snkrsData')

const app = express()
const router = express.Router()
app.use(require('cors')())

router.get("/",async (req,res) => {
    const data = await getSnkrs()
    res.json(JSON.parse(data))
})

router.get("/stock/:id", async (req,res) => {
    const data = await getLevel(req.params.id)
    res.json(JSON.parse(data))
})

router.post("/status", async (req,res) => {
    status = {
        "success": true,
        "message": "兑换成功"
    }
    res.json(status)
})

app.use("/.netlify/functions/api",router)

module.exports.handler = serverless(app)