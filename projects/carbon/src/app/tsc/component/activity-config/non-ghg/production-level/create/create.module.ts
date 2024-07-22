import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionLevelActivityConfigCreateRoutingModule } from './create-routing.module';
import { ProductionLevelActivityConfigCreateComponent } from './create.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ProductionLevelActivityConfigCreateComponent
    ],
    imports: [
        CommonModule,
        ProductionLevelActivityConfigCreateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,

        NgxMatSelectSearchModule
    ]
})

export class ProductionLevelActivityConfigCreateModule { }
