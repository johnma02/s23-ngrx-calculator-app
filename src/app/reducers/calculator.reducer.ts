import { Action, createReducer, on } from '@ngrx/store';
import * as CalculatorActions from '../actions/calculator.actions';
import { stringOperator } from 'calculator-library';

export interface State {
  currentNumber: number; // consider the accumulated state the first operand
  operand: number;
  operator: stringOperator;
}

export const initialState: State = {
  currentNumber: 0,
  operand: 0,
  operator: '+',
};

export const scoreboardReducer = createReducer(
  initialState,
  on(CalculatorActions.add, state => ({...state, currentNumber: state.currentNumber+state.operand})),
  on(CalculatorActions.multiply, state => ({...state, currentNumber: state.currentNumber*state.operand})),
  on(CalculatorActions.divide, state => ({...state, currentNumber: state.currentNumber/state.operand})),
  on(CalculatorActions.subtract, state => ({...state, currentNumber: state.currentNumber-state.operand})),
  on(CalculatorActions.modulo, state => ({...state, currentNumber: state.currentNumber%state.operand})),
  on(CalculatorActions.changeOperator, (state, {newOperator}) => ({...state, operator: newOperator})),
);