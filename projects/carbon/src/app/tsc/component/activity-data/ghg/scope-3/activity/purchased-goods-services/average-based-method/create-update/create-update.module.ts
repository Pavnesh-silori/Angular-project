import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DateInputModule } from '@library/date';

import { CreateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';
import { MessageAlertModule } from '@library/tsc-common';
import { EmissionSourceModule } from '@netzero/component/source/product-and-service/emission-source/emission-source.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [CreateUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatDatepickerModule,
        PerfectScrollbarModule,
        NgxMatSelectSearchModule,
        MatIconModule,
        DateInputModule,
        CreateRoutingModule,
        MatRippleModule,
		MatOptionModule,
		MessageAlertModule,
        EmissionSourceModule,
        MatCheckboxModule,
        MatTooltipModule
    ]
})

export class CreateUpdateModule {}
