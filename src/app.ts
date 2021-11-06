import express from 'express'
import { strategies } from './constants'
const redis = require('async-redis')
import s from './strategy'

const client = redis.createClient(6379, 'redis')

client.on('error', (error: any)=> {
    console.log(error)
})

const app = express()

app.use(express.json())

app.post('/', async (req,res)=> {
    console.log(req.body)
    const {strategy, task_id} = req.body
    if (!strategies[strategy as keyof typeof strategies]) res.send('false')

    const ins = s.getInstance(strategy).getNextPhone(1)

    console.log(ins)

    res.send('qq')
})

app.get('/:id', async (req,res)=> {
    const {id} = req.params
    const q = await client.get(id)
    res.send(q)
})

app.listen(5000, ()=> {
    console.log('listening on 5000')
})