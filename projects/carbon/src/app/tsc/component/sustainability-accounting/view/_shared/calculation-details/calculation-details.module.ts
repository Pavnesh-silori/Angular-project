import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationDetailsComponent } from './calculation-details.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [CalculationDetailsComponent],
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [CalculationDetailsComponent],
})
export class CalculationDetailsModule { }
