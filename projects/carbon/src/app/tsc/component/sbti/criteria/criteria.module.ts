import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriteriaRoutingModule } from './criteria-routing.module';
import { CriteriaComponent } from './criteria.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [
		CriteriaComponent
	],
	imports: [
		CommonModule,
		CriteriaRoutingModule,
		MatCheckboxModule,
		FormsModule,
		MatDialogModule,
		MatSelectModule,
		MatFormFieldModule,
	]
})
export class CriteriaModule { }
