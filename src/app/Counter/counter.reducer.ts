import { Action } from "@ngrx/store";
import { decrement, increment, duplication, resetAction } from "./counter.actions";

export function counterReducer(state: number = 20, action: Action) {
  switch (action.type) {
    case increment.type:
      return state + 1;

    case decrement.type:
      return state - 1;

    case duplication.type:
      return state * 2;

    case resetAction.type:
      return 0;

    default:
      return state;
  }
}
