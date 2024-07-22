import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorDatabaseRoutingModule } from './factor-database-routing.module';
import { FactorDatabaseComponent } from './factor-database.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EllipsisPipeModule } from '@library/tsc-common';

import { ActivePagePillComponent } from './active-page-pill/active-page-pill.component';

@NgModule({
    declarations: [
        ActivePagePillComponent,
        FactorDatabaseComponent
    ],
    imports: [
        CommonModule,
        FactorDatabaseRoutingModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        EllipsisPipeModule,
    ],
    exports: [
        ActivePagePillComponent
    ]
})
export class FactorDatabaseModule { }
