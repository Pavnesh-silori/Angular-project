import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorDetailsComponent } from './factor-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [FactorDetailsComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        EllipsisPipeModule
    ],
    exports: [FactorDetailsComponent],
})
export class FactorDetailsModule { }
