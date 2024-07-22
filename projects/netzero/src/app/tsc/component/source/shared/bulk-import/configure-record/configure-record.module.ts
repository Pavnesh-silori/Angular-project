import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

//tsc-library
import { MessageAlertModule } from '@library/tsc-common';
// /tsc-library

import { MatStepperModule } from '@angular/material/stepper';
import { ConfigureRecordsComponent } from './configure-record.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ConfigureRecordsComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MessageAlertModule,

        MatStepperModule,
        MatCardModule,

        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,

        MatOptionModule,
        NgxMatSelectSearchModule,
        MatRippleModule,
    ],
    exports: [
        ConfigureRecordsComponent
    ]
})

export class ConfigureRecordsModule { }
