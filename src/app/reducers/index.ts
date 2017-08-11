import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromGamepad from '../core/reducers/gamepad';
import * as fromGyroscope from '../core/reducers/gyroscope';
import * as fromJoystick from '../core/reducers/joystick';
import * as fromTrex from '../core/reducers/trex';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  gamepad: fromGamepad.State;
  gyroscope: fromGyroscope.State;
  joystick: fromJoystick.State;
  trex: fromTrex.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  gamepad: fromGamepad.reducer,
  gyroscope: fromGyroscope.reducer,
  joystick: fromJoystick.reducer,
  trex: fromTrex.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: ActionReducer<any, any>[] = !environment.production
  ? [logger]
  : [];

/**
 * Selectors
 */
export const getGamepadState = createFeatureSelector<fromGamepad.State>('gamepad');
export const getGyroscopeState = createFeatureSelector<fromGyroscope.State>('gyroscope');
export const getJoystickState = createFeatureSelector<fromJoystick.State>('joystick');
export const getTrexState = createFeatureSelector<fromTrex.State>('trex');

