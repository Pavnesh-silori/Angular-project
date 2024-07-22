import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityConsumptionActivityConfigCreateRoutingModule } from './create-routing.module';
import { ElectricityConsumptionActivityConfigCreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MessageAlertModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        ElectricityConsumptionActivityConfigCreateComponent
    ],
    imports: [
        CommonModule,
        ElectricityConsumptionActivityConfigCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,

        NgxMatSelectSearchModule,

        MessageAlertModule
    ]
})

export class ElectricityConsumptionActivityConfigCreateModule { }
