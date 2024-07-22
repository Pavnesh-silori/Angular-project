import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarbonPriceActivityConfigCreateUpdateRoutingModule } from './create-update-routing.module';
import { CarbonPriceActivityConfigCreateUpdateComponent } from './create-update.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        CarbonPriceActivityConfigCreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CarbonPriceActivityConfigCreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
    ]
})
export class CarbonPriceActivityConfigCreateUpdateModule { }
