import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PGSAverageBasedRoutingModule } from './average-based-method-routing.module';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		PGSAverageBasedRoutingModule,
		MatTabsModule
	]
})
export class PGSAverageBasedModule { }
