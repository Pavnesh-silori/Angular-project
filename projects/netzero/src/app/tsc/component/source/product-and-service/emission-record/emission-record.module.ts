import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionRecordRoutingModule } from './emission-record-routing.module';
import { EmissionRecordComponent } from './emission-record.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

// tsc-library
import { DateFilterModule } from '@library/date';
import { FunnelFilterModule, MessageAlertModule, SearchBarOneModule } from '@library/tsc-common';
import { MatCardModule } from '@angular/material/card';
// /tsc-library
@NgModule({
	declarations: [
		EmissionRecordComponent
	],
	imports: [
		CommonModule,
		EmissionRecordRoutingModule,
		FontAwesomeModule,
		MatButtonModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatSortModule,
		MatTableModule,
		MatPaginatorModule,
		MatTooltipModule,
		NgbModule,
		FunnelFilterModule,
		MatDialogModule,
		MatNativeDateModule,
		MatDatepickerModule,
		NgxMatSelectSearchModule,
		MatRippleModule,
		NgxDaterangepickerMd.forRoot(),
		MatChipsModule,
		DateFilterModule,
		MessageAlertModule,
		SearchBarOneModule,
		MatCardModule
	]
})
export class EmissionRecordModule { }
