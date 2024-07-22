import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductionLevelPageRoutingModule } from './page-routing.module';
import { ProductionLevelPageComponent } from './page.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivityConfigSelectionModule } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.module';

//tsc-lib
import { EllipsisPipeModule, FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// /tsc-lib

@NgModule({
    declarations: [
        ProductionLevelPageComponent
    ],
    imports: [
        CommonModule,
        ProductionLevelPageRoutingModule,
        FontAwesomeModule,
        MatButtonModule,
        DateFilterModule,
        NgbModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        SearchBarOneModule,
        FunnelFilterModule,
        MatRippleModule,
        EllipsisPipeModule,

        ActivityConfigSelectionModule
    ]
})
export class ProductionLevelPageModule { }

