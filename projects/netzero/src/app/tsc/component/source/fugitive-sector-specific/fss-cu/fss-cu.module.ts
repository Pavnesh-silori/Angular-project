import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FssCuRoutingModule } from './fss-cu-routing.module';
import { FssCuComponent } from './fss-cu.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        FssCuComponent
    ],
    imports: [
        CommonModule,
        FssCuRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

        NgxMatSelectSearchModule
    ]
})

export class FssCuModule { }
