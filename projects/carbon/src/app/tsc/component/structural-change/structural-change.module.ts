import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralChangeRoutingModule } from './structural-change-routing.module';
import { EmissionDataModule } from '../subsidiary-emission-data/emission-data/emission-data.module';

import { InOutsourcingBaseYearEmissionDialogComponent } from './in-outsourcing-base-year-emission-dialog/in-outsourcing-base-year-emission-dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        InOutsourcingBaseYearEmissionDialogComponent
    ],
    imports: [
        CommonModule,
        StructuralChangeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        NgxMatSelectSearchModule,
        EmissionDataModule
    ]
})
export class StructuralChangeModule { }
