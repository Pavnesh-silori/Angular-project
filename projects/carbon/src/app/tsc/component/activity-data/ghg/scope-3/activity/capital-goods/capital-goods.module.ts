import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabModule } from '../activity-tab/tab.module';
import { CapitalGoodsRoutingModule } from './capital-goods-routing.module';

@NgModule({
	declarations: [
		// CapitalGoodsTabComponent
	],
	imports: [
		CommonModule,
		TabModule,
		CapitalGoodsRoutingModule,
		MatTabsModule
	]
})
export class CapitalGoodsModule { }
