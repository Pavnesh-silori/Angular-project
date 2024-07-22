import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateMonthYearFormatModule } from '@library/date'; 


@NgModule({
	declarations: [
		CreateComponent
	],
	imports: [
		CommonModule,
		CreateRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatDialogModule,
		MatIconModule,
		MatTooltipModule,
		DateMonthYearFormatModule,
		NgxDaterangepickerMd.forRoot(),
		MatMomentDateModule
	],
})

export class CreateModule { }
