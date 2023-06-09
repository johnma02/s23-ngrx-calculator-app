declare module 'calculator-library' {
    export type stringOperator = '+' | '-' | '/' | '*';
    export interface CalculatorState {
      currentNumber: number; // consider the accumulated state the first operand
      operand: number;
      operator: stringOperator;
    }
  }
