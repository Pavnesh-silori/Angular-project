import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//tsc-library
import { DialogOneModule } from '@library/tsc-common'
// /tsc-library/

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { SurveySummaryModule } from './survey-summary/survey-summary.module';
import { SurveyDetailsModule } from './survey-details/survey-details.module';
import { ListModule } from './list/list.module';
@NgModule({
	declarations: [
		ViewComponent,
	],
	imports: [
		CommonModule,
		ViewRoutingModule,

		MatButtonModule,
		MatDialogModule,
		MatTooltipModule,
		NgbModule,
		FontAwesomeModule,

		DialogOneModule,
		ListModule,
		SurveyDetailsModule,
		SurveySummaryModule
	
	]
})
export class ViewModule { }
