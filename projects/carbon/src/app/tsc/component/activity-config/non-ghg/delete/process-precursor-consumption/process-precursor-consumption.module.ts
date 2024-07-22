import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessPrecursorConsumptionRoutingModule } from './process-precursor-consumption-routing.module';
import { CreateUpdateModule } from './create-update/create-update.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ProcessPrecursorConsumptionRoutingModule,
        CreateUpdateModule
    ]
})
export class ProcessPrecursorConsumptionModule { }
