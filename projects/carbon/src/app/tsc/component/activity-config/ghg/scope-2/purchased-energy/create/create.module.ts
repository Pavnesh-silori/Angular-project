import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [ CreateComponent ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatDatepickerModule,
        PerfectScrollbarModule, 
        NgxMatSelectSearchModule
    ],
})
export class CreateModule { }
