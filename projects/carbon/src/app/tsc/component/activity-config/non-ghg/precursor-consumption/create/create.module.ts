import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrecursorConsumptionActivityConfigCreateRoutingModule } from './create-routing.module';
import { PrecursorConsumptionActivityConfigCreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MessageAlertModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        PrecursorConsumptionActivityConfigCreateComponent
    ],
    imports: [
        CommonModule,
        PrecursorConsumptionActivityConfigCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,

        NgxMatSelectSearchModule,

        MessageAlertModule
    ]
})

export class PrecursorConsumptionActivityConfigCreateModule { }
