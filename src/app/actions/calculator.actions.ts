import { createAction, props } from '@ngrx/store';
import { stringOperator } from 'calculator-library';

export const clearInput = createAction('[Calculator Component] Clear Input');
export const clearTotal = createAction('[Calculator Component] Clear Total');
export const calculate = createAction('[Calculator Component] Calculate');

export const changeOperator = createAction(
	'[Calculator Component] Change Operator',
	props<{ newOperator: stringOperator }>()
);

export const setOperand = createAction('[Calculator Component] Set Operand',
	props<{ newOperand: number }>()
);
