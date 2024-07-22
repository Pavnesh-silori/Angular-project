import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { RecordsComponent } from './records.component';
import { RecordRoutingModule } from './record-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategorizedRecordsComponent } from '../update-categorized-records/update-categorized-records.component';
import { SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        RecordsComponent,
        UpdateCategorizedRecordsComponent
    ],
    imports: [
        RecordRoutingModule,
        CommonModule,
        NgbModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatDialogModule,
        SearchBarOneModule,
        FormsModule,
        ReactiveFormsModule,
        DateFilterModule,
        FunnelFilterModule,
        FontAwesomeModule,
        NgxMatSelectSearchModule,
        EllipsisPipeModule,
        MatInputModule,
        MatButtonModule,
        NgxDaterangepickerMd.forRoot(),
    ],
    exports: [RecordsComponent]
})
export class RecordsModule { }