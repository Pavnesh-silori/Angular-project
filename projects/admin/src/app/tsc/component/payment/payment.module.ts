import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [
		PaymentSuccessfulComponent
	],
	imports: [
		CommonModule,
		PaymentRoutingModule,
		MatProgressSpinnerModule,
		MatCardModule,
	]
})
export class PaymentModule { }
