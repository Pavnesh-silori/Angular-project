import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarbonPricePageRoutingModule } from './page-routing.module';
import { CarbonPricePageComponent } from './page.component';

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

// tsc-library
import { DateFilterModule } from '@library/date';
// /tsc-library/

@NgModule({
    declarations: [
        CarbonPricePageComponent
    ],
    imports: [
        CarbonPricePageRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatButtonModule,
        MatRippleModule,
        FontAwesomeModule,
        NgbModule,
        DateFilterModule,

        ActivityConfigSelectionModule
    ]
})
export class CarbonPricePageModule { }
