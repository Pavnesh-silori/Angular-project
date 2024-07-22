import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { Scope2AreaBasedComponent } from './_templates/area-based/scope2-area-based.component';
import { Scope2EnergyCunsumedComponent } from './_templates/energy-consumed/scope2-energy-consumed.component';
import { Scope2MeterReadingComponent } from './_templates/meter-reading/scope2-meter-reading.component';
import { Scope2PriceBasedComponent } from './_templates/price-based/scope2-price-based.component';

// tsc-library
import { DateInputModule } from '@library/date';
// /tsc-library

@NgModule({
    declarations: [
        CreateComponent,
        Scope2EnergyCunsumedComponent,
        Scope2MeterReadingComponent,
        Scope2PriceBasedComponent,
        Scope2AreaBasedComponent
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        FontAwesomeModule,
        NgbModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        NgxDaterangepickerMd.forRoot(),
        DateInputModule
    ]
})
export class CreateModule { }
