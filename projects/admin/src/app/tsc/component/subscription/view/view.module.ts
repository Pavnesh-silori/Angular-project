import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
@NgModule({
	declarations: [
		ViewComponent
	],
	imports: [
		CommonModule,
		ViewRoutingModule,
		NgbModule,
		FontAwesomeModule,
		MatCardModule,
		MatTooltipModule,
		MatTableModule,
		MatIconModule,
		FlexLayoutModule,
	]
})
export class ViewModule { }
