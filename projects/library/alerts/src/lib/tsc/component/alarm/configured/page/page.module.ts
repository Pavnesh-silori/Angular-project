import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguredAlarmPageRoutingModule } from './page-routing.module';
import { ConfiguredAlarmPageComponent } from './page.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        ConfiguredAlarmPageComponent
    ],
    imports: [
        CommonModule,
        ConfiguredAlarmPageRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        SearchBarOneModule,
        EllipsisPipeModule
    ]
})
export class ConfiguredAlarmPageModule { }
