import { strategies } from '../constants'
import RoundRobin from './round-robin'

class strategy {
    strategies = {
        RoundRobin: RoundRobin
    }

    getInstance() {
        return this
    }
}

export default strategy