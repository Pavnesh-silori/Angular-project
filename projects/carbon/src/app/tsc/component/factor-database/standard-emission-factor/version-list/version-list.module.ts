import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionListRoutingModule } from './version-list-routing.module';
import { VersionListComponent } from './version-list.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [ VersionListComponent ],
    imports: [
        CommonModule,
        VersionListRoutingModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule
    ],
    exports: [ VersionListComponent ]
})
export class VersionListModule{ }