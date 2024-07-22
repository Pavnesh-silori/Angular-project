import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// tsc-library
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
// /tsc-library/


@NgModule({
	declarations: [
		PageComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		PageRoutingModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		FontAwesomeModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatRippleModule,
		MatInputModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		MatSelectModule,
		MatTooltipModule,
		MatDatepickerModule,
		NgbDropdownModule,
		MatOptionModule,
		MatMomentDateModule,
		ClipboardModule,
		SearchBarOneModule,
		FunnelFilterModule,
		MatTooltipModule
	]
})
export class PageModule { }
