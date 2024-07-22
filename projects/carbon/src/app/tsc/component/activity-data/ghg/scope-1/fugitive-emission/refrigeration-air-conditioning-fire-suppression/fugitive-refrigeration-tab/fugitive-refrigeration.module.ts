import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FugitiveRefrigerationRoutingModule } from './fugitive-refrigeration-routing.module';
import { FugitiveRefrigerationComponent } from './fugitive-refrigeration.component';
import { MatTabsModule } from '@angular/material/tabs';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		FugitiveRefrigerationComponent
	],
	imports: [
		CommonModule,
		FugitiveRefrigerationRoutingModule,
		NgbModule,
		MatTabsModule,
		MatIconModule
	]
})
export class FugitiveRefrigerationModule { }
