import { createReducer, on } from '@ngrx/store';
import  { CalculatorActions } from './calculator.actions';
import { CalculatorState } from 'calculator-library';

export const initialState: CalculatorState = {
	currentNumber: 0,
	operand: 0,
	operator: null,
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
	on(CalculatorActions.clearTotal, (): CalculatorState => ({currentNumber: 0, operator: null, operand: 0})),

	on(CalculatorActions.setOperand, (state: CalculatorState, {newOperand}) => {
		return state.operator === null ? 
			{...state, currentNumber:  Number(state.currentNumber.toString() + newOperand.toString())} : 
			{...state, operand: Number(state.operand.toString() + newOperand.toString())};
	})
);