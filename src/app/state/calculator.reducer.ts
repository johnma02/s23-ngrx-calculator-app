import { createReducer, on } from '@ngrx/store';
import  { CalculatorActions } from './calculator.actions';
import { CalculatorState } from 'calculator-library';

export const initialState: CalculatorState = {
	currentNumber: 0,
	operand: 0,
	operator: null,
	decimalInput: false,
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

	on(CalculatorActions.changeOperator, (state: CalculatorState, {newOperator}) => ({...state, operator: newOperator, decimalInput: false})),

	on(CalculatorActions.clearInput, (state: CalculatorState) => ({...state, operand: 0, decimalInput: false})),
	on(CalculatorActions.clearTotal, (): CalculatorState => ({decimalInput: false, currentNumber: 0, operator: null, operand: 0})),

	// I am sorry.

	on(CalculatorActions.setOperand, (state: CalculatorState, {newOperand}) => {
		if(state.decimalInput){
			return state.operator === null ? 
				state.currentNumber % 1 === 0 ?
					{...state, currentNumber:  Number(state.currentNumber.toString()+'.' + newOperand.toString())} : 
					{...state, currentNumber:  Number(state.currentNumber.toString() + newOperand.toString())} :
				state.operand % 1 === 0 ? 
					{...state, operand: Number(state.operand.toString()+'.' + newOperand.toString())} :
					{...state, operand: Number(state.operand.toString()+ newOperand.toString())};
		}
		return state.operator === null ? 
			{...state, currentNumber:  Number(state.currentNumber.toString() + newOperand.toString())} : 
			{...state, operand: Number(state.operand.toString() + newOperand.toString())};
	}),

	on(CalculatorActions.makeDecimal, (state: CalculatorState) => ({...state, decimalInput: true})),
	on(CalculatorActions.negateNumber, (state: CalculatorState) => {
		return state.operator === null ?
			{...state, currentNumber: state.currentNumber * -1} :
			{...state, operand: state.operand * -1};
	})
);