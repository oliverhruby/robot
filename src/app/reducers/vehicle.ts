import { Action, State } from '@ngrx/store';

export const GYROSCOPE_UPDATE = 'GYROSCOPE_UPDATE';

export interface Gyroscope {
    x: number;
    y: number;
    z: number;
}

export class GyroscopeAction implements Action {
    readonly type = GYROSCOPE_UPDATE;
    constructor(public status: Gyroscope) { }
}

export function trexReducer(state = { voltage: 0, lmcur: 0, rmcur: 0 }, action: GyroscopeAction) {
    switch (action.type) {
        case GYROSCOPE_UPDATE:
            return action.status
        default:
            return state;
    }
}