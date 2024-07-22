import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessEmissionActivityConfigCreateRoutingModule } from './create-routing.module';
import { ProcessEmissionActivityConfigCreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ProcessEmissionActivityConfigCreateComponent
    ],
    imports: [
        CommonModule,
        ProcessEmissionActivityConfigCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

        NgxMatSelectSearchModule
    ]
})

export class ProcessEmissionActivityConfigCreateModule { }
