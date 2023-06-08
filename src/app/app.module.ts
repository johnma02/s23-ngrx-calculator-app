import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { calculatorReducer } from './reducers/calculator.reducer';

@NgModule({
	declarations: [
		AppComponent,
		MyCounterComponent,
		CalculatorComponent
	],
	imports: [
		BrowserModule, 
		StoreModule.forRoot({
			count: counterReducer,
			calculatorState: calculatorReducer
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
