import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessHeatConsumptionRoutingModule } from './process-heat-consumption-routing.module';
import { CreateUpdateModule } from './create-update/create-update.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ProcessHeatConsumptionRoutingModule,
        CreateUpdateModule
    ]
})
export class ProcessHeatConsumptionModule { }
