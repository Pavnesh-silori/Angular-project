import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityConfigElectricityHeatExportRoutingModule } from './electricity-heat-export-routing.module';
import { CreateUpdateModule } from './create-update/create-update.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ActivityConfigElectricityHeatExportRoutingModule,
        CreateUpdateModule,
    ]
})
export class ActivityConfigElectricityHeatExportModule { }
