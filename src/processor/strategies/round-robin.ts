import processor from '..'

class RoundRobin {
    db: any
    redisClient: any

    constructor (db: any, redisClient: any) {
        this.db = db
        this.redisClient = redisClient
    }

    getNextPhone(task_id: number) {

        return task_id
    }
}

export default RoundRobin