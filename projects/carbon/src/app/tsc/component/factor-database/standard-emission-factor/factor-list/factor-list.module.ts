import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorListRoutingModule } from './factor-list-routing.module';
import { FactorListComponent } from './factor-list.component';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [ FactorListComponent ],
    imports: [
        CommonModule,
        FactorListRoutingModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        SearchBarOneModule,
        EllipsisPipeModule
    ],
    exports: [ FactorListComponent ]
})
export class FactorListModule{ }