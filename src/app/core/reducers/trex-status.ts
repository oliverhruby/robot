import { Action } from '@ngrx/store';

export const TREX_UPDATE_STATUS = 'TREX_UPDATE_STATUS';

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
    readonly type = TREX_UPDATE_STATUS;
    constructor(public status: State) { }
}

export type TrexStatusAction
    = Update;

export function reducer(state: State = initialState, action: TrexStatusAction): State {
    switch (action.type) {
        case TREX_UPDATE_STATUS:
            state = action.status;
            return state;

        default:
            return state;
    }
}