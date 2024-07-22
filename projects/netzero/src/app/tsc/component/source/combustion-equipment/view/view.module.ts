import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
	declarations: [
		ViewComponent
	],
	imports: [
		CommonModule,
		ViewRoutingModule,
		MatCardModule,
		MatTooltipModule,
        MatRippleModule
	],
	exports: [
		ViewComponent
	]
})
export class ViewModule { }
