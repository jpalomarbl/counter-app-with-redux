import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
// export const duplication = createAction('[Counter Component] Duplication');
export const duplication = createAction('[Counter Component] Duplication', props<{ number: number }>());
export const resetAction = createAction('[Counter Component] ResetAction');
