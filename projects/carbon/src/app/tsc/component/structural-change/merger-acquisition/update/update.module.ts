import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCardModule } from '@angular/material/card';

import { EmissionDataDialogModule } from '../../emission-data-dialog/emission-data-dialog.component';

@NgModule({
    declarations: [
        UpdateComponent
    ],
    imports: [
        CommonModule,
        UpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatSelectSearchModule,
        EmissionDataDialogModule
    ]
})
export class UpdateModule { }
