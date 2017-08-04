import { Action, State } from '@ngrx/store';

export const UPDATE = 'UPDATE';

export interface Trex {
    voltage: number;
    lmcur: number;
    rmcur: number;
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public status: Trex) { }
}

export type TrexAction
    = Update;

export function trexReducer(state = { voltage: 0, lmcur: 0, rmcur: 0 }, action: TrexAction) {
    switch (action.type) {
        case UPDATE:
            return action.status

        default:
            return state;
    }
}