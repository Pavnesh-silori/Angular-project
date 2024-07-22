import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { CreateUpdateRoutingModule } from './create-update-routing.module'

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CreateUpdateComponent } from './create-update.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
@NgModule({
    declarations: [CreateUpdateComponent],
    imports: [
        CommonModule,
        CreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatTableModule,
        MatFormFieldModule,
        FontAwesomeModule,

        NgxMatSelectSearchModule,
        NgxDaterangepickerMd.forRoot(),
        PerfectScrollbarModule,
    ],
    exports:[CreateUpdateComponent]
})
export class CreateUpdateModule { }