import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from '../actions/calculator.actions';
import { CalculatorState } from 'calculator-library';

export const initialState: CalculatorState = {
	currentNumber: NaN,
	operand: 0,
	operator: '+',
};

export const calculatorReducer = createReducer(
	initialState,
	on(CalculatorActions.calculate, (state: CalculatorState) => {
		const result: number = (() => {
			switch (state.operator) {
			case '+':
				return state.currentNumber + state.operand;
			case '*':
				return state.currentNumber * state.operand;
			case '/':
				return state.currentNumber / state.operand;
			case '-':
				return state.currentNumber - state.operand;
			default:
				return state.currentNumber;
			}
		})();
		console.log(result);
 
		return {...state, currentNumber: result};
	}),

	on(CalculatorActions.changeOperator, (state: CalculatorState, {newOperator}) => ({...state, operator: newOperator})),

	on(CalculatorActions.clearInput, (state: CalculatorState) => ({...state, operand: 0})),
	on(CalculatorActions.clearTotal, (state: CalculatorState) => ({...state, currentNumber: 0})),

	on(CalculatorActions.setOperand, (state: CalculatorState, {newOperand}) => ({...state, operand: newOperand}))
);