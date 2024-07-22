import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { EmissionConfirmationDialog } from './_shared/emission-confirmation-dialog/emission-confirmation.dialog';
import { GhgBaseYearEmissionConfirmationDialog } from './_shared/ghg-base-year-emission-confirmation/ghg-base-year-emission-confirmation.dialog';

// tsc-library
import { DateMonthYearFormatModule } from '@library/date'; 
// tsc-library

@NgModule({
    declarations: [
        CreateComponent,
        EmissionConfirmationDialog,
        GhgBaseYearEmissionConfirmationDialog
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        DateMonthYearFormatModule,
    ],
    exports: [CreateComponent]
})
export class CreateModule { }
