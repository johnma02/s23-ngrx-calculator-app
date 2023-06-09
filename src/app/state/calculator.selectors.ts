import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalculatorState } from 'calculator-library';

export const selectCalculatorState = createFeatureSelector<CalculatorState>('CalculatorState');

export const selectOperand = createSelector(
	selectCalculatorState,
	(state: CalculatorState) => state.operand
);

export const selectOperator = createSelector(
	selectCalculatorState,
	(state: CalculatorState) => state.operator
);

export const selectCurrentNumber = createSelector(
	selectCalculatorState,
	(state: CalculatorState) => state.currentNumber
);