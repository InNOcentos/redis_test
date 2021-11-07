import express from 'express'
import { strategies } from './constants'
const redis = require('async-redis')
import processor from './processor'

const client = redis.createClient(6379, 'redis')

client.on('error', (error: any) => {
    console.log(error)
})

const app = express()

app.use(express.json())

app.post('/save', async (req, res) => {
    const { strategy, task_id } = req.body

    await client.lpush(`task_${task_id}_phones`, [79067302499, 79035124342, 3454385348534, 34589345893458743, 12312412412, 15435345, 3656547, 6547564747])

    res.send('saved')
})

app.post('/check', async (req, res) => {
    const { strategy, task_id } = req.body

    const rent = await client.lrange(`task_${task_id}_phones`, 0, -1)
    res.send(rent)
})

app.get('/:id', async (req, res) => {
    //shuffle
    const { id } = req.params
    const rent = await client.lpop(`task_${id}_phones`)
    console.log(rent)
    await client.rpush(`task_${id}_phones`, rent)
    res.send('shuffled')
})

app.post('/status', async (req, res) => {
    //status
    const { p1, p2, time, code, id } = req.body
    const rent = await client.lpush(`task_${id}_statuses`, JSON.stringify({ p1, p2, time, code }))
    res.send('shuffled')
})

app.get('/status/:id', async (req, res) => {
    //status
    const { id } = req.params
    const rent = await client.lrange(`task_${id}_statuses`, 0, -1)
    console.log(typeof rent)
    res.send(rent.map((e: any) => JSON.parse(e)))
})

app.listen(5000, () => {
    console.log('listening on 5000')
})