import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {calculate, clearInput, clearTotal, changeOperator, setOperand} from '../../actions/calculator.actions';
import { stringOperator } from 'calculator-library';
import { selectCurrentNumber, selectOperand, selectOperator } from 'src/app/state/calculator.selectors';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
	operand$: Observable<number>;
	operator$: Observable<stringOperator>;
	currentNumber$: Observable<number>;

	// iota 0 ... 9 
	nums = Array.from({ length: 10 }, (_, index) => index);
  

	constructor(private store: Store<{ 
    operand: number,
    operator: stringOperator,
    currentNumber: number}>) {
		this.operand$ = store.select(selectOperand);
		this.operator$ = store.select(selectOperator);
		this.currentNumber$ = store.select(selectCurrentNumber);
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
  
	setOperand(newOperand: number) {
		this.store.dispatch(setOperand({newOperand}));
	}
}