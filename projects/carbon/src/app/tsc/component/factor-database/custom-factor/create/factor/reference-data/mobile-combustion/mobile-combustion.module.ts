import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileCombustionRoutingModule } from './mobile-combustion-routing.module';
import { MobileCombustionComponent } from './mobile-combustion.component';

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

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [MobileCombustionComponent],
    imports: [
        CommonModule,
        MobileCombustionRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        NgxMatSelectSearchModule
    ],
    exports: [MobileCombustionComponent],
})
export class MobileCombustionModule { }
