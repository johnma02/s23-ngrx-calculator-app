declare module 'calculator-library' {
    export type stringOperator = '+' | '-' | '/' | '*' | null;
    export interface CalculatorState {
      currentNumber: number; // consider the accumulated state the first operand
      operand: number;
      operator: stringOperator;
      decimalInput: boolean;
    }
  }
