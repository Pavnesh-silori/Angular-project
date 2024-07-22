import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityConfiguratorRoutingModule } from './activity-configurator-routing.module';
import { ActivityConfiguratorComponent } from './activity-configurator.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
	declarations: [
		ActivityConfiguratorComponent
	],
	imports: [
		CommonModule,
		ActivityConfiguratorRoutingModule,
		MatCardModule
	]
})
export class ActivityConfiguratorModule { }
