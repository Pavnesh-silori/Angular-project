import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

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

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
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
        NgxMatSelectSearchModule
    ]
})
export class CreateModule { }
