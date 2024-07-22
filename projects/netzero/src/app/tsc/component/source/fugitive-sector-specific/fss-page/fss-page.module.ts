import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FssPageRoutingModule } from './fss-page-routing.module';
import { FssPageComponent } from './fss-page.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FssCuModule } from '../fss-cu/fss-cu.module';

// tsc-library
import {
    SearchBarOneModule,
    FunnelFilterModule
} from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        FssPageComponent
    ],
    imports: [
        CommonModule,
        FssPageRoutingModule,

        MatRippleModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,

        NgbModule,
        FontAwesomeModule,

        FssCuModule,

        // tsc-library
        SearchBarOneModule,
        FunnelFilterModule
        // /tsc-library/
    ]
})

export class FssPageModule { }
