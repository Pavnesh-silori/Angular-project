import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FunnelFilterComponent } from './funnel-filter.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatFormFieldModule,
		NgxMatSelectSearchModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatRippleModule,
		MatSelectModule,
		MatButtonModule
	],
	declarations: [FunnelFilterComponent],
	exports: [FunnelFilterComponent]
})
export class FunnelFilterModule { }