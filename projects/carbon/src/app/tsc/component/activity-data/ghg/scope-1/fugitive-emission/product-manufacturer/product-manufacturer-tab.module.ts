import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManufacturerTabRoutingModule } from './product-manufacturer-tab-routing.module';
import { ProductManufacturerTabComponent } from './product-manufacturer-tab.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
	declarations: [
		ProductManufacturerTabComponent
	],
	imports: [
		CommonModule,
		ProductManufacturerTabRoutingModule,
		MatTabsModule
	]
})
export class ProductManufacturerTabModule { }
