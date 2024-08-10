import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionViewRoutingModule } from './permission-view-routing.module';
// import { IsResourcePermission } from '@library/rbac-service';
import { PermissionViewComponent } from './permission-view.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		PermissionViewComponent
	],
	imports: [
		CommonModule,
		PermissionViewRoutingModule,
		// IsResourcePermission,
		MatIconModule,
		MatTableModule,
		MatCheckboxModule,
		MatExpansionModule,
		MatMenuModule,
		MatDialogModule,
		MatButtonModule,
		MatTooltipModule
	]
})
export class PermissionViewModule { }
