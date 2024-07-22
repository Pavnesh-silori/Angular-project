import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrecursorConsumptionActivityConfigViewRoutingModule } from './view-routing.module';
import { PrecursorConsumptionActivityConfigViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        PrecursorConsumptionActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        PrecursorConsumptionActivityConfigViewRoutingModule,

        MatCardModule
    ]
})

export class PrecursorConsumptionActivityConfigViewModule { }
