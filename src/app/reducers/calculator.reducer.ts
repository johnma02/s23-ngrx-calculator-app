import { createReducer, on } from '@ngrx/store';
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

export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.calculate, (state: State) => {
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
        case '%':
          return state.currentNumber % state.operand;
        default:
          return state.currentNumber;
      }
    })();
 
    return {...state, currentNumber: result};
  }),

  on(CalculatorActions.changeOperator, (state: State, {newOperator}) => ({...state, operator: newOperator})),

  on(CalculatorActions.clearInput, (state: State) => ({...state, operand: 0})),
  on(CalculatorActions.clearTotal, (state: State) => ({...state, currentNumber: 0}))
);