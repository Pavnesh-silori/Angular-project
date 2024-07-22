import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';

import { EsgReportingTabRoutingModule } from './esg-reporting-tab-routing.module';
import { EsgReportingTabComponent } from './esg-reporting-tab.component';

@NgModule({
	declarations: [
		EsgReportingTabComponent
	],
	imports: [
		CommonModule,
		EsgReportingTabRoutingModule,
		NgbModule,
		MatTabsModule,
	]
})
export class EsgReportingTabModule { }
