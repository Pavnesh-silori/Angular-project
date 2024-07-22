import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityListRoutingModule } from './activity-list-routing.module';
import { ActivityListComponent } from './activity-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [ ActivityListComponent ],
    imports: [
        CommonModule,
        ActivityListRoutingModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        EllipsisPipeModule
    ],
    exports: [ ActivityListComponent ]
})
export class ActivityListModule{ }