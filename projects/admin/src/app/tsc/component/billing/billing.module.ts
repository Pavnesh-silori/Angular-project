import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { BillingRoutingModule } from './billing-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [

	],
	imports: [
		CommonModule,
		BillingRoutingModule,
		NgxIntlTelInputModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule

	]
})

export class BillingModule { }
