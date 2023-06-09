import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { stringOperator } from 'calculator-library';

export const CalculatorActions = createActionGroup({
	source: 'Calculator',
	events: {
		'Clear Input': emptyProps(),
		'Clear Total': emptyProps(),
		'Calculate': emptyProps(),
		'Change Operator': props<{ newOperator: stringOperator }>(),
		'Set Operand': props<{ newOperand: number }>(),
		'Make Decimal': emptyProps,
	},
});
