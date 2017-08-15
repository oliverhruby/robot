import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromGyroscope from './gyroscope';
import * as fromGamepad from './gamepad';
import * as fromJoystick from './joystick';
import * as fromTRexCommand from './trex-command';
import * as fromTRexStatus from './trex-status';
import * as fromRoot from '../../reducers';

export interface CoreState {
  gyroscope: fromGyroscope.State;
  gamepad: fromGamepad.State;
  joystick: fromJoystick.State;
  tRexCommand: fromTRexCommand.State;
  tRexStatus: fromTRexStatus.State;
}

export interface State extends fromRoot.State {
  'core': CoreState;
}

export const reducers = {
  gyroscope: fromGyroscope.reducer,
  gamepad: fromGamepad.reducer,
  joystick: fromJoystick.reducer,
  tRexCommand: fromTRexCommand.reducer,
  tRexStatus: fromTRexStatus.reducer
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getCoreState = createFeatureSelector<CoreState>('books');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getGamepad = createSelector(
  getCoreState,
  (state: CoreState) => state.gamepad
);

export const getTRexCommand = createSelector(
  getCoreState,
  (state: CoreState) => state.tRexCommand
);

export const getTRexStatus = createSelector(
  getCoreState,
  (state: CoreState) => state.tRexStatus
);
