import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

//tsc-lib
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
// /tsc-lib/

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbModule,
        FontAwesomeModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        SearchBarOneModule,
        FunnelFilterModule,
        EllipsisPipeModule,
    ]
})
export class PageModule { }
