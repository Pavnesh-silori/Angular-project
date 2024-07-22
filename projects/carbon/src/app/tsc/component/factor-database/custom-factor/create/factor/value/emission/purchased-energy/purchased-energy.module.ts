import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasedEnergyRoutingModule } from './purchased-energy-routing.module';
import { PurchasedEnergyComponent } from './purchased-energy.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatButtonModule } from '@angular/material/button';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [ PurchasedEnergyComponent ],
    imports: [
        CommonModule,
        PurchasedEnergyRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatRippleModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxMatSelectSearchModule,
        EllipsisPipeModule,
    ]
})
export class PurchasedEnergyModule { }
