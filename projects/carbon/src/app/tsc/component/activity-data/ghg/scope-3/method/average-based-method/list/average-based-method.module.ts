import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AverageBasedMethodRoutingModule } from './average-based-method-routing.module';
import { AverageBasedMethodComponent } from './average-based-method.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

// tsc-library
import { DateFilterModule } from '@library/date';
import { FunnelFilterModule, MessageAlertModule } from '@library/tsc-common';

import { SearchBarOneModule } from '@library/tsc-common'; 

// /tsc-library

@NgModule({
	declarations: [
		AverageBasedMethodComponent
	],
	imports: [
		CommonModule,
		AverageBasedMethodRoutingModule,
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
		SearchBarOneModule
	]
})
export class AverageBasedMethodModule { }
