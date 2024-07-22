import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionDetailsComponent } from './emission-details.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [EmissionDetailsComponent],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatCardModule
    ],
    exports: [EmissionDetailsComponent],
})
export class EmissionDetailsModule { }
