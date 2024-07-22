import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { SchedulerWorkflowModule } from './_templates/workflow-scheduler/scheduler-workflow/scheduler-workflow.module';
import { ApiModule } from './_templates/api/api.module';

// ghg
// scope-1
import { CreateUpdateModule as StationaryCombutionACModule } from '../ghg/scope-1/stationary-combustion/create-update/create-update.module';

import { MobileCombustionModule as MobileCombustionModule2Module } from '../ghg/scope-1/mobile-combustion/mobile-combustion.module';

import { CreateUpdateModule as MobileCombustionModule2ADModule } from '../../activity-data/ghg/scope-1/mobile-combustion/create-update/create-update.module';

import { CreateModule as StationaryCombutionAD2Module } from '../../activity-data/ghg/scope-1/stationary-combustion/create/create.module';

import { ProcessEmissionActivityConfigCreateModule } from '@carbon/component/activity-config/ghg/scope-1/process-emission/create/create.module';
// /scope-1/

// scope-2
import { PurchasedEnergyModule } from '../ghg/scope-2/purchased-energy/purchased-energy.module';
// /scope-2/

// scope-3
import { CreateModule as WasteGeneratedACModule } from '../ghg/scope-3/waste-generated/create/create.module';
// scope-3
// /ghg/

// non-ghg
import { CreateUpdateModule as CHPAttributionsActivityConfigModule } from '../non-ghg/chp-attributions/create-update/create-update.module';

import { ElectricityConsumptionActivityConfigCreateModule } from '../non-ghg/electricity-consumption/create/create.module';

// TODO-CBAM
// import { CreateUpdateModule as ProcessHeatConsumptionActivityConfigModule } from '../non-ghg/process-heat-consumption/create-update/create-update.module';

import { CreateUpdateModule as ProcessFuelConsumptionACComponent } from '../non-ghg/fuel-consumption/create-update/create-update.module';

// import { CreateUpdateModule as ProcessPrecursorConsumptionActivityConfigModule } from '../non-ghg/process-precursor-consumption/create-update/create-update.module';

import { PrecursorConsumptionActivityConfigCreateModule } from '../non-ghg/precursor-consumption/create/create.module';

import { CreateUpdateModule as PurchasedPrecursorActivityConfigModule } from '../non-ghg/purchased-precursor/create-update/create-update.module';

import { CreateUpdateModule as ProcessHeatElectricityACModule } from '../non-ghg/electricity-heat-export/create-update/create-update.module';

// import { CreateUpdateModule as ProcessWasteGasExportACModule } from '../non-ghg/process-waste-export/create-update/create-update.module';

// import { CreateUpdateModule as ProcessPrecursorExportActivityConfigModule } from '../non-ghg/process-precursor-export/create-update/create-update.module';

// import { CreateUpdateModule as PIMEACModule } from '../non-ghg/intermediate-product-export/create-update/create-update.module';

// import { CreateUpdateModule as ProcessProductionLevelActivityConfigModule } from '../non-ghg/process-production-level/create-update/create-update.module';

import { ProductionLevelActivityConfigCreateModule } from '../non-ghg/production-level/create/create.module';

import { ElectricityConsumptionActivityDataCreateModule } from '@carbon/component/activity-data/non-ghg/electricity-consumption/create/create.module';
import { CarbonPriceActivityConfigCreateUpdateModule } from '../non-ghg/carbon-price/create-update/create-update.module';
// /non-ghg/

@NgModule({
    declarations: [
        CreateComponent
    ],

    imports: [
        CommonModule,
        CreateTRoutingModule,

        MatTabsModule,
        MatCardModule,

        SchedulerWorkflowModule,
        ApiModule,

        // ghg
        // scope-1
        MobileCombustionModule2Module,
        MobileCombustionModule2ADModule,
        StationaryCombutionACModule,
        StationaryCombutionAD2Module,
        ProcessEmissionActivityConfigCreateModule,
        // /scope-1/

        // scope-2
        // Scope2Module,
        PurchasedEnergyModule,
        // /scope-2/

        // scope-3
        WasteGeneratedACModule,
        // /scope-3/
        // /ghg/

        
        // non-ghg
        CHPAttributionsActivityConfigModule,
        ElectricityConsumptionActivityConfigCreateModule,
        // ProcessHeatConsumptionActivityConfigModule,
        ProcessFuelConsumptionACComponent,
        // ProcessPrecursorConsumptionActivityConfigModule,
        PrecursorConsumptionActivityConfigCreateModule,
        PurchasedPrecursorActivityConfigModule,
        ProcessHeatElectricityACModule,
        // ProcessWasteGasExportACModule,
        // ProcessPrecursorExportActivityConfigModule,
        // PIMEACModule,
        // ProcessProductionLevelActivityConfigModule,
        ProductionLevelActivityConfigCreateModule,
        ElectricityConsumptionActivityDataCreateModule,
        CarbonPriceActivityConfigCreateUpdateModule,
        // /non-ghg/
    ],
})
export class CreateModule { }
