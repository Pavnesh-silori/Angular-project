import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { GasDetailsDialog } from '../../_shared/gas-details-dialog/gas-details-dialog.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FugitiveReleasesCreateUpdateModule } from '../../_shared/fugitive-release-create-update/fugutive-release-create-update.model';
import { FugitiveReleaseRoutingModule } from './fugitive-release-routing.module';
import { FugitiveReleaseComponent } from './fugitive-release.component';

// tsc-library
import { SearchBarOneModule } from '@library/tsc-common'; 
import { DateFilterModule } from '@library/date';
import { FunnelFilterModule } from '@library/tsc-common'; 

// /tsc-library

@NgModule({
	declarations: [
		FugitiveReleaseComponent,
		GasDetailsDialog
	],
	imports: [
		CommonModule,
		FugitiveReleaseRoutingModule,
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
		SearchBarOneModule,
		MatTooltipModule,
		NgbModule,
		FunnelFilterModule,
		MatDialogModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatExpansionModule,
		NgxMatSelectSearchModule,
		NgxDaterangepickerMd.forRoot(),
		MatSlideToggleModule,
		DateFilterModule,
		FugitiveReleasesCreateUpdateModule
	]
})
export class FugitiveReleaseModule { }
