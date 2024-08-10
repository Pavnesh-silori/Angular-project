import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';

// tsc-library
import { ParameterModule } from '@library/tsc-lite';
import { EllipsisPipeModule, SearchBarTwoModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CreateUpdateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatRadioModule,

        NgxMatSelectSearchModule,
        PerfectScrollbarModule,

        // tsc-library
        EllipsisPipeModule,
        SearchBarTwoModule,
        ParameterModule
        // /tsc-library/
    ]
})
export class CreateUpdateModule { }
