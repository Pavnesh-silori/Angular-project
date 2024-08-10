import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { PermissionViewModule } from '../permission-view/permission-view.module';

import { MatTableModule } from '@angular/material/table';
@NgModule({
	declarations: [
		PageComponent
	],
	imports: [
		CommonModule,
		PageRoutingModule,
		PermissionViewModule,
		MatTableModule,
	]
})
export class PageModule { }
