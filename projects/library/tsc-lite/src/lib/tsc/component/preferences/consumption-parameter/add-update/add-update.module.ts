import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ConsumptionParamAddUpdateRoutingModule } from './add-update-routing.module';
import { ConsumptionParamAddUpdateComponent } from './add-update.component';

// tsc-library
import { MessageAlertModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ConsumptionParamAddUpdateComponent
    ],
    imports: [
        CommonModule,
        ConsumptionParamAddUpdateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatCheckboxModule,
        MatTableModule,

        NgxMatSelectSearchModule,
        MessageAlertModule
    ]
})
export class ConsumptionParamAddUpdateModule { }
