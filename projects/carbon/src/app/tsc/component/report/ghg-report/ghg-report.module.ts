import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GhgReportRoutingModule } from './ghg-report-routing.module';
import { GhgReportComponent } from './ghg-report.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { GhgAuditDialog } from '../ghg-audit/ghg-audit.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateMonthYearFormatModule } from '@library/date'; 

@NgModule({
	declarations: [
		GhgReportComponent,
		GhgAuditDialog
	],
	imports: [
		CommonModule,
		GhgReportRoutingModule,
		MatInputModule,
		MatSelectModule,
		NgxDaterangepickerMd.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatCardModule,
		MatTableModule,
		MatDialogModule,
		MatButtonModule,
		MatMomentDateModule,
		DateMonthYearFormatModule

	]
})
export class GhgReportModule { }
