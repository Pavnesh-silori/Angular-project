import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentServicingRoutingModule } from './equipment-servicing-routing.module';
import { EquipmentServicingComponent } from './equipment-servicing.component';
import { EquipmentServicingCreateUpdateDialog } from '../../_shared/equipment-servicing-create-update/equipment-servicing-create-update.component'
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

import { FunnelFilterModule } from '@library/tsc-common';

import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatChipsModule } from '@angular/material/chips';
import { DateMonthYearFormatModule } from '@library/date'; 

// tsc-library
import { DateFilterModule } from '@library/date';
import { MessageAlertModule } from '@library/tsc-common'; 
// /tsc-library

@NgModule({
	declarations: [
		EquipmentServicingComponent,
		EquipmentServicingCreateUpdateDialog
	],
	imports: [
		CommonModule,
		EquipmentServicingRoutingModule,
        MessageAlertModule,
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
		DateMonthYearFormatModule,
		DateFilterModule
	],
	exports: [
		EquipmentServicingComponent,
		EquipmentServicingCreateUpdateDialog
	]
})
export class EquipmentServicingModule { }
