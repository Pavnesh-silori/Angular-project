import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//tsc-library
import { SearchBarOneModule,FunnelFilterModule } from '@library/tsc-common';
// /tsc-library/

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
@NgModule({
	declarations: [
		ListComponent,
	],
	imports: [
		CommonModule,
		ListRoutingModule,

		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		FontAwesomeModule,

		SearchBarOneModule,
		FunnelFilterModule,
	
	],
    exports:[ListComponent]
})
export class ListModule { }
