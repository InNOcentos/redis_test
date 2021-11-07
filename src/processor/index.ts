import { strategies } from '../constants'
import { RoundRobin } from './strategies'

class processor {
    private readonly db: any
    private readonly redisClient: any
    private strategies = {
        RoundRobin: RoundRobin
    }

    constructor (db: any, redisClient: any) {
        this.db = db
        this.redisClient = redisClient
    }

    public getInstance(strategy: keyof typeof strategies): InstanceType<typeof RoundRobin> {
        return new this.strategies[strategy](this.db, this.redisClient)
    }

    public saveStatus() { }
}

export default new processor(1, 2)