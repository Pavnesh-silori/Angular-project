import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUpdateComponent } from './create-update.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//tsc-library
import { DateInputModule } from '@library/date';
// /tsc-library

@NgModule({
    declarations: [
        CreateUpdateComponent,
        TotalAmountComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        DateInputModule,
        MatRadioModule,
        MatTooltipModule
    ]
})
export class CreateUpdateModule { }
