import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {CalculatorActions} from '../../state/calculator.actions';
import { stringOperator } from 'calculator-library';
import { selectCurrentNumber, selectOperand, selectOperator } from '../../state/calculator.selectors';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
	operator$: Observable<stringOperator>;
	operand$: Observable<number>;
	currentNumber$: Observable<number>;
 
	constructor(private store: Store<{ count: number }>) {
		this.operator$ = store.select(selectOperator);
		this.operand$ = store.select(selectOperand);
		this.currentNumber$ = store.select(selectCurrentNumber);
	}
 
	changeOperator(newOperator: stringOperator) {
		this.store.dispatch(CalculatorActions.changeOperator({newOperator}));
	}
 
	clearInput() {
		this.store.dispatch(CalculatorActions.clearInput());
	}
 
	clearTotal() {
		this.store.dispatch(CalculatorActions.clearTotal());
	}
	calculate() {
		this.store.dispatch(CalculatorActions.calculate());
	}
	setOperand(newOperand: number) {
		this.store.dispatch(CalculatorActions.setOperand({newOperand}));
	}
	makeDecimal() {
		this.store.dispatch(CalculatorActions.makeDecimal());
	}
	negateNumber() {
		this.store.dispatch(CalculatorActions.negateNumber());
	}
}