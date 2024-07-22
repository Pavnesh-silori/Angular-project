import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueRoutingModule } from './value-routing.module';

import { 
    FormsModule, 
    ReactiveFormsModule 
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { PurchasedEnergyModule } from './emission/purchased-energy/purchased-energy.module';

@NgModule({
    declarations: [  ],
    imports: [
        CommonModule,
        ValueRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatNativeDateModule,
        MatDatepickerModule,
        PurchasedEnergyModule
    ],
})
export class ValueModule { }
