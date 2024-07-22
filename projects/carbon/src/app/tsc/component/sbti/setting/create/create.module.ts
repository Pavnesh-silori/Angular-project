import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCheckboxModule } from '@angular/material/checkbox';

// tsc-library
import { InfoDialogModule } from '@library/tsc-common'; 
// /tsc-library

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatSelectModule,
        MatTooltipModule,
        MatRippleModule,
        MatCheckboxModule,
        NgxMatSelectSearchModule,
        InfoDialogModule
    ],
    exports: [
        CreateComponent
    ]
})

export class CreateModule { }
