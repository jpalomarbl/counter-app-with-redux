import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "./counter.actions";

// export function counterReducer(state: number = 20, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;

//     case decrement.type:
//       return state - 1;

//     case duplication.type:
//       return state * 2;

//     case resetAction.type:
//       return 20;

//     default:
//       return state;
//   }
// }

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.duplication, (state, { number }) => state * number),
  on(actions.resetAction, () => initialState)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
