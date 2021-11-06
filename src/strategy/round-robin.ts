import { strategies } from '../constants';
import strategy from './index';

class RoundRobin{
    getNextPhone(task_id: number) {
        return task_id
    }
}

export default RoundRobin