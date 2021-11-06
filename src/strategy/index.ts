import { strategies } from '../constants'
import RoundRobin from './round-robin'

class strategy {
    private static strategies = {
        RoundRobin: RoundRobin
    }

    public static getInstance(strategy: keyof typeof strategies): any {
        return this.strategies[strategy]
    }
}

export default strategy