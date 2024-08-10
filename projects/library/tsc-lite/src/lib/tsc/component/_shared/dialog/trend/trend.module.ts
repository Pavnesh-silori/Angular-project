import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TrendComponent } from './trend.component';

// tsc-library
import { BasicAreaLineBarModule } from '@library/echart';
// /tsc-library/

@NgModule({
    declarations: [
        TrendComponent
    ],
    imports: [
        CommonModule,
        BasicAreaLineBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule,
    ]
})
export class TrendModule { }
