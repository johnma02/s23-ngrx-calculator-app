import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { StoreModule } from '@ngrx/store';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { calculatorReducer } from './reducers/calculator.reducer';

@NgModule({
	declarations: [
		AppComponent,
		CalculatorComponent,
	],
	imports: [
		BrowserModule, 
		StoreModule.forRoot({
			calculatorState: calculatorReducer
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
