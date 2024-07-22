import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionRoutingModule } from './version-routing.module';
import { VersionComponent } from './version.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [ VersionComponent ],
    imports: [
        CommonModule,
        VersionRoutingModule,
        NgbModule,
        FontAwesomeModule,
        MatTabsModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        SearchBarOneModule,
        EllipsisPipeModule,
    ]
})
export class VersionModule { }