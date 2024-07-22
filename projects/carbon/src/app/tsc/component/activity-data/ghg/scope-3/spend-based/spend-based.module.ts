import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpendBasedRoutingModule } from './spend-based-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateImportRequestDialogComponent } from './create-import-request-dialog/create-import-request-dialog.component';
import { CategorizeRecordDialogComponent } from './categorize-record-dialog/categorize-record-dialog.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
	declarations: [
		CreateImportRequestDialogComponent,
		CategorizeRecordDialogComponent
	],
	imports: [
		CommonModule,
		SpendBasedRoutingModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSelectModule,
		MatRadioModule,
		MatCheckboxModule,
		FormsModule,
		ReactiveFormsModule,
		NgxMatSelectSearchModule
	]
})
export class SpendBasedModule { }
