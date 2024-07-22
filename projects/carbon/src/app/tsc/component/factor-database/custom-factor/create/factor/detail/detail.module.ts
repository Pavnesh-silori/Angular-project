import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { EllipsisPipeModule } from '@library/tsc-common';
import { SourceModule } from '../source/source.module';

@NgModule({
    declarations: [DetailComponent],
    imports: [
        CommonModule,
        DetailRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        EllipsisPipeModule,
        SourceModule
    ],
    exports: [DetailComponent]
})
export class DetailModule { }
