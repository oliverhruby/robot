import { Action } from '@ngrx/store';
import { TrexCommand } from "../models/trex-command";

export const TREX_UPDATE_MOTORS = 'TREX_UPDATE_MOTORS';
export const TREX_UPDATE_SERVOS = 'TREX_UPDATE_SERVOS';

export interface State {
    rmSpeed: number;
    lmSpeed: number;
    servo1: number;
    servo2: number;
    servo3: number;
    servo4: number;
    servo5: number;
    servo6: number;
}

const initialState = {
    rmSpeed: 0,
    lmSpeed: 0,
    servo1: 0,
    servo2: 0,
    servo3: 0,
    servo4: 0,
    servo5: 0,
    servo6: 0
}

export class UpdateMotors implements Action {
    readonly type = TREX_UPDATE_MOTORS;
    constructor(public command: any) { }
}

export class UpdateServos implements Action {
    readonly type = TREX_UPDATE_SERVOS;
    constructor(public command: any) { }
}

export type TrexCommandAction
    = UpdateMotors | UpdateServos;

export function reducer(state = initialState, action: TrexCommandAction): State {
    switch (action.type) {
        case TREX_UPDATE_MOTORS:
            return Object.assign({}, state, action.command);
        case TREX_UPDATE_SERVOS:
            return Object.assign({}, state, action.command);

        default:
            return state;
    }
}