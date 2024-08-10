import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

// tsc-library
import { SearchBarOneModule, EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/


@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        NgbModule,
        FontAwesomeModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTooltipModule
    ]
})
export class PageModule { }
