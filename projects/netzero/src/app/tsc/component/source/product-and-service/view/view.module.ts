import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponent } from './view.component';
import { CreateUpdateModule } from '../create-update/create-update.module';

import { ViewRoutingModule } from './view-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopoverModule } from "ngx-smart-popover";

import { MatRippleModule } from '@angular/material/core';
@NgModule({
	declarations: [
		ViewComponent
	],
	imports: [
		CommonModule,
		ViewRoutingModule,
		CreateUpdateModule,
		MatCardModule,
		MatTooltipModule,
		MatRippleModule,
		ClipboardModule,
		PopoverModule
	],
	exports: [
		ViewComponent
	]
})
export class ViewModule { }
