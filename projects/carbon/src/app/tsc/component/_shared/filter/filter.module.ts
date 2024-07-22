import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarbonFilterComponent } from './filter.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    exports: [
        CarbonFilterComponent
    ],
    declarations: [
        CarbonFilterComponent
    ],
})

export class CarbonFilterModule { }
