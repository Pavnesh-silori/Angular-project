import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceDataStationaryCombustionRoutingModule } from './stationary-combustion-routing.module';
import { ReferenceDataStationaryCombustionComponent } from './stationary-combustion.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ReferenceDataStationaryCombustionComponent
    ],
    imports: [
        CommonModule,
        ReferenceDataStationaryCombustionRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        NgxMatSelectSearchModule
    ],
    exports: [
        ReferenceDataStationaryCombustionComponent
    ]
})
export class ReferenceDataStationaryCombustionModule { }
