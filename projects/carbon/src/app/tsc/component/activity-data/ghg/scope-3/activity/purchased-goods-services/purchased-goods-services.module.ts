import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TabModule } from '../activity-tab/tab.module';
import { PurchasedGoodsServicesRoutingModule } from './purchased-goods-services-routing.module';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		TabModule,
		PurchasedGoodsServicesRoutingModule,
		MatTabsModule
	]
})
export class PurchasedGoodsServicesModule { }
