import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {calculate, clearInput, clearTotal, changeOperator} from '../../actions/calculator.actions'
import { stringOperator } from 'calculator-library';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})

export class CalculatorComponent {
  operand$: Observable<number>
  operator$: Observable<stringOperator>
  currentNumber$: Observable<number>

  constructor(private store: Store<{ operand: number, operator: stringOperator, currentNumber: number}>) {
    this.operand$ = store.select('operand');
    this.operator$ = store.select('operator');
    this.currentNumber$ = store.select('currentNumber')
  }
  calculate() {
    this.store.dispatch(calculate());
  }
  clearInput() {
    this.store.dispatch(clearInput());
  }
  clearTotal() {
    this.store.dispatch(clearTotal());
  }

  changeOperator(newOperator: stringOperator){
    this.store.dispatch(changeOperator({newOperator}));
  }
}