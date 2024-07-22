import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [
		TabComponent
	],
	imports: [
		CommonModule,
		TabRoutingModule,
		NgbModule,
		MatTabsModule,
	]
})
export class TabModule { }
