import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import {calculate, clearInput, clearTotal} from '../../actions/calculator.actions'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})

export class CalculatorComponent {
  input$: Observable<number>

  constructor(private store: Store<{ input: number }>) {
    this.input$ = store.select('input');
  }

}