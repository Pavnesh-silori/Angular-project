import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityConfigSelection } from './activity-config-selection.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// tsc-library
import {
    SearchBarOneModule,
    FunnelFilterModule
} from '@library/tsc-common';
// /tsc-library/

@NgModule({
    imports: [
        CommonModule,
        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,

        NgxMatSelectSearchModule,
        FontAwesomeModule,

        SearchBarOneModule,
        FunnelFilterModule
    ],
    declarations: [
        ActivityConfigSelection
    ]
})

export class ActivityConfigSelectionModule { }
