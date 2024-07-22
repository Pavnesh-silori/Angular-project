import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

// tsc-library
import { MessageAlertModule } from '@library/tsc-common';

@NgModule({
    declarations: [CreateComponent],
    imports: [
        CommonModule,
        CreateRoutingModule,
        MessageAlertModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatChipsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        NgxDaterangepickerMd.forRoot(),
    ]
})
export class CreateModule { }
