import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarbonPriceActivityDataCreateUpdateRoutingModule } from './create-update-routing.module';
import { CarbonPriceActivityDataCreateUpdateComponent } from './create-update.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DateInputModule } from '@library/date';

@NgModule({
    declarations: [
        CarbonPriceActivityDataCreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CarbonPriceActivityDataCreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
        DateInputModule,
    ]
})
export class CarbonPriceActivityDataCreateUpdateModule { }
