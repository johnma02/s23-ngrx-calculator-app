import { createAction, props } from '@ngrx/store';

type stringOperator = '+' | '-' | '/' | '%' | '*';

export const add = createAction('[Calculator Component] Add');
export const multiply = createAction('[Calculator Component] Multiply');
export const subtract = createAction('[Calculator Component] Subtract');
export const divide = createAction('[Calculator Component] Divide');
export const modulo = createAction('[Calculator Component] Modulo');
export const changeOperator = createAction(
    '[Calculator Component] Change Operator',
    props<{ newOperator: stringOperator }>()
);
