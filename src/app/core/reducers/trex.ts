import { Action } from '@ngrx/store';

export const UPDATE = 'UPDATE';

export interface State {
    error: number;
    voltage: number;
    rmCurrent: number;
    lmCurrent: number;
    accX: number;
    accY: number;
    accZ: number;
    impactX: number;
    impactY: number;
    impactZ: number;
}

const initialState = {
    error: 0,
    voltage: 0,
    rmCurrent: 0,
    lmCurrent: 0,
    accX: 0,
    accY: 0,
    accZ: 0,
    impactX: 0,
    impactY: 0,
    impactZ: 0
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public status: State) { }
}

export type TrexAction
    = Update;

export function reducer(state = initialState, action: TrexAction): State {
    switch (action.type) {
        case UPDATE:
            return action.status

        default:
            return state;
    }
}