import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PurchasedPrecursorPageRoutingModule } from './page-routing.module';

import { PageComponent } from './page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivityConfigSelectionModule } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.module';

//tsc-library
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// /tsc-library

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        PurchasedPrecursorPageRoutingModule,
        CommonModule,
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
        SearchBarOneModule,
        FunnelFilterModule,
        MatTooltipModule, 
        MatRippleModule,

        ActivityConfigSelectionModule
    ]
})
export class PageModule { }

