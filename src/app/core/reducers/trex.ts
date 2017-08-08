import { Action } from '@ngrx/store';

export const UPDATE = 'UPDATE';

export interface State {
    voltage: number;
    lmcur: number;
    rmcur: number;
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public status: State) { }
}

export type TrexAction
    = Update;

export function reducer(state = { voltage: 0, lmcur: 0, rmcur: 0 }, action: TrexAction): State {
    switch (action.type) {
        case UPDATE:
            return action.status

        default:
            return state;
    }
}