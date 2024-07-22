import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { CreateUpdateModule } from '../../create-update/create-update.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopoverModule } from "ngx-smart-popover";

// tsc-library
import { EllipsisPipeModule, SearchBarOneModule } from '@library/tsc-common';
import { FunnelFilterModule } from '@library/tsc-common';
// / tsc-library

@NgModule({
	declarations: [
		ServiceComponent
	],
	imports: [
		CommonModule,
		ServiceRoutingModule,
		NgbModule,
		NgbDropdownModule,
		CreateUpdateModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		FontAwesomeModule,
		MatPaginatorModule,
		MatSortModule,
		MatTableModule,
		SearchBarOneModule,
		MatTooltipModule,
		MatRippleModule,
		EllipsisPipeModule,
		FunnelFilterModule,
		MatCheckboxModule,
		FormsModule,
		ReactiveFormsModule,
		ClipboardModule,
		PopoverModule
	]
})
export class ServiceModule { }
