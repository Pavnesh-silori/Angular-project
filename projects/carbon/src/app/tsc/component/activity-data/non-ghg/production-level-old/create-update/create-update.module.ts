import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUpdateComponent } from './create-update.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

//tsc-library
import { DateInputModule } from '@library/date';
// /tsc-library/

@NgModule({
    declarations: [
        CreateUpdateComponent,
        TotalAmountComponent,
        MeterReadingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatIconModule,
        DateInputModule,
    ]
})
export class CreateUpdateModule { }
``