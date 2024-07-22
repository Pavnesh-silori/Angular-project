import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportHistoryRoutingModule } from './import-history-routing.module';
import { ImportHistoryComponent } from './import-history.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FunnelFilterModule } from '@library/tsc-common';
import { EllipsisPipeModule, SearchBarOneModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        ImportHistoryComponent
    ],
    imports: [
        CommonModule,
        ImportHistoryRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatSortModule,
        MatRippleModule,
        MatSelectModule,
        MatTooltipModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        FunnelFilterModule
    ]
})
export class ImportHistoryModule { }
