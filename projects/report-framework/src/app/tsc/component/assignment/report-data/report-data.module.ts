import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReportDataRoutingModule } from './report-data-routing.module';
import { ReportDataComponent } from './report-data.component';
import { IntervalConfigDetailsModule } from '@report-framework/component/report-tracking/interval-config-details/interval-config-details.module';
import { ReminderComponent } from './reminder/reminder.component';
import { SchedulerWorkflowModule } from '../scheduler-workflow/scheduler-workflow.module';
import { MatchingMetricModule } from './matching-metric/matching-metric.module';
import { DataCreateUpdateModule } from '@report-framework/component/data-create-update/data-create-update.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// tsc-library
import { EllipsisPipeModule, FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
	declarations: [
		ReportDataComponent,
		ReminderComponent
	],
	imports: [
		CommonModule,
		ReportDataRoutingModule,
		NgbModule,
		SearchBarOneModule,
		SchedulerWorkflowModule,
		IntervalConfigDetailsModule,
		DataCreateUpdateModule,
		MatchingMetricModule,
		EllipsisPipeModule,
		ReactiveFormsModule,
		FormsModule,
		MatExpansionModule,
		MatCheckboxModule,
		MatTooltipModule,
		MatSortModule,
		MatButtonModule,
		MatIconModule,
		MatRippleModule,
		MatOptionModule,
		MatSelectModule,
		MatMenuModule,
		FontAwesomeModule,
        FunnelFilterModule
	]
})
export class ReportDataModule { }
