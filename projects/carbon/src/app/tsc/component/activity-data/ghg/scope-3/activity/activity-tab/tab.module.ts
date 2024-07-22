import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent  } from './tab.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
	declarations: [
		TabComponent
	],
	imports: [
		CommonModule,
		TabRoutingModule,
		MatTabsModule
	]
})
export class TabModule { }
