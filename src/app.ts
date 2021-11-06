import express from 'express'
const redis = require('async-redis')
import RoundRobin from './strategy/round-robin'
 
class RoundBobin {
    getNextPhone (task_id: number) {
        return task_id
    }
}

const client = redis.createClient(6379, 'redis')

client.on('error', (error: any)=> {
    console.log(error)
})

const app = express()

app.use(express.json())

app.post('/', async (req,res)=> {
    console.log(req.body)
    const {strategy, task_id} = req.body
    const classes = [RoundBobin, RoundRobin]

    const ins = new classes[strategy]()

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