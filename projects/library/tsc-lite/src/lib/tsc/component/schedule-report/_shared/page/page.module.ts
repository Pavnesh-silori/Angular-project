import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ScheduleReportPageRoutingModule } from './page-routing.module';
import { ScheduleReportPageComponent } from './page.component';

// tsc-library
import { SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ScheduleReportPageComponent
    ],
    imports: [
        CommonModule,
        ScheduleReportPageRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSlideToggleModule,
        MatMenuModule,

        NgbModule,
        FontAwesomeModule,

        SearchBarOneModule,
        FunnelFilterModule,
        EllipsisPipeModule
    ]
})
export class ScheduleReportPageModule { }
