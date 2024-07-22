import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseListRoutingModule } from './database-list-routing.module';
import { DatabaseListComponent } from './database-list.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [ DatabaseListComponent ],
    imports: [
        CommonModule,
        DatabaseListRoutingModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        EllipsisPipeModule
    ],
    exports: [ DatabaseListComponent ]
})
export class DatabaseListModule{ }