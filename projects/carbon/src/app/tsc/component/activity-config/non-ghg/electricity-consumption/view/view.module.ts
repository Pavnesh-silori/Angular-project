import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityConsumptionActivityConfigViewRoutingModule } from './view-routing.module';
import { ElectricityConsumptionActivityConfigViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ElectricityConsumptionActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        ElectricityConsumptionActivityConfigViewRoutingModule,

        MatCardModule
    ]
})

export class ElectricityConsumptionActivityConfigViewModule { }
