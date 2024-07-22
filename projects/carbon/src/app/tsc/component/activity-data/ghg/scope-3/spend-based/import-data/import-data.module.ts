import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportDataRoutingModule } from './import-data-routing.module';
import { ImportDataComponent } from './import-data.component';

import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { EllipsisPipeModule, FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ImportDataComponent
    ],
    imports: [
        CommonModule,
        ImportDataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatSlideToggleModule,
        EllipsisPipeModule,
        SearchBarOneModule,
        FunnelFilterModule,
        NgxMatSelectSearchModule
    ]
})
export class ImportDataModule { }
