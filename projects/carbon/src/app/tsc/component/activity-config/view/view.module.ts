import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityConfigViewRoutingModule } from './view-routing.module';
import { ActivityConfigViewComponent } from './view.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfigViewModule } from './_template/config-view/config-view.module';
import { WorkflowViewModule } from './_template/workflow-view/workflow-view.module';
import { SchedulerViewModule } from './_template/scheduler-view/scheduler-view.module';
import { ApiViewModule } from './_template/api-view/api-view.module';

// ghg
// scope-1
import { ProcessEmissionActivityConfigViewModule } from '../ghg/scope-1/process-emission/view/view.module';
// /scope-1/
// /ghg/


// non-ghg
import { ChpAttributionActivityConfigViewModule } from '../non-ghg/chp-attributions/chp-attribution-ac-view/chp-attribution-ac-view.module';

import { ElectricityConsumptionActivityConfigViewModule } from '../non-ghg/electricity-consumption/view/view.module';

// TODO-CBAM
// import { ViewModule as ProcessHeatConsumptionActivityConfigView } from '../non-ghg/process-heat-consumption/view/view.module';

import { ViewModule as ProcessFuelConsumptionViewModule } from '../non-ghg/fuel-consumption/view/view.module';

// import { ViewModule as ProcessPrecursorConsumptionActivityConfigView } from '../non-ghg/process-precursor-consumption/view/view.module';

import { PrecursorConsumptionActivityConfigViewModule } from '../non-ghg/precursor-consumption/view/view.module';

import { ViewModule as PurchasedPrecursorActivityConfigView } from '../non-ghg/purchased-precursor/view/view.module';

import { ElectricityHeatExportViewModule } from '../non-ghg/electricity-heat-export/view/view.module';

// import { ViewModule as WasteGasExportViewModule } from '../non-ghg/process-waste-export/view/view.module';

// import { ViewModule as ProcessPrecursorExportActivityConfigView } from '../non-ghg/process-precursor-export/view/view.module';

// import { ViewModule as InterMediateProductExportViewModule } from '../non-ghg/intermediate-product-export/view/view.module';

// import { ViewModule as ProcessProductionLevelActivityConfigView } from '../non-ghg/process-production-level/view/view.module';

import { ProductionLevelActivityConfigViewModule } from '../non-ghg/production-level/view/view.module';
import { CarbonPriceViewModule } from '../non-ghg/carbon-price/view/view.module';
// /non-ghg/

@NgModule({
    declarations: [
        ActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        ActivityConfigViewRoutingModule,

        MatRippleModule,
        MatTooltipModule,

        ConfigViewModule,
        WorkflowViewModule,
        SchedulerViewModule,
        ApiViewModule,

        // ghg
        // scope-1
        ProcessEmissionActivityConfigViewModule,
        // /scope-1/
        // ghg/

        // non-ghg
        ChpAttributionActivityConfigViewModule,
        ElectricityConsumptionActivityConfigViewModule,
        // ProcessHeatConsumptionActivityConfigView,
        ProcessFuelConsumptionViewModule,
        // ProcessPrecursorConsumptionActivityConfigView,
        PrecursorConsumptionActivityConfigViewModule,
        PurchasedPrecursorActivityConfigView,
        ElectricityHeatExportViewModule,
        // WasteGasExportViewModule,
        // ProcessPrecursorExportActivityConfigView,
        // InterMediateProductExportViewModule,
        // ProcessProductionLevelActivityConfigView
        ProductionLevelActivityConfigViewModule,
        CarbonPriceViewModule
        // /non-ghg/
    ]
})

export class ActivityConfigViewModule { }
