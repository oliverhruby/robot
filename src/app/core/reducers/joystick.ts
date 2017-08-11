import { Action, ActionReducer } from '@ngrx/store';

export const UPDATE = 'JOYSTICK_UPDATE';

export interface State {
  x: number;
  y: number;
};

export const initialState: State = {
  x: 0,
  y: 0
};

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: State) { }
}

export type JoystickAction
    = Update;

export function reducer(state = initialState, action: JoystickAction): State {
  switch (action.type) {
    case UPDATE:
      state.x = action.payload.x;
      state.y = action.payload.y;
      return state;
    default:
      return state;
  }
};
