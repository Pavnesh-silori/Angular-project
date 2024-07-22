import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDataRoutingModule } from './activity-data-routing.module';

import { CreateModule as ActivityConfigCreateModule } from '../activity-config/create/create.module';

// ghg
// scope-1
import { CreateUpdateModule as StationaryCombutionActivityConfigModule } from '../activity-config/ghg/scope-1/stationary-combustion/create-update/create-update.module';
import { MobileCombustionModule as MobileCombustionActivityConfigModule } from '../activity-config/ghg/scope-1/mobile-combustion/mobile-combustion.module';
// import { CreateUpdateModule as MobileCombustionModule2ADModule } from '../activity-data/ghg/scope-1/mobile-combustion/create-update/create-update.module';
//  import { CreateModule as StationaryCombutionAD2Module } from '../activity-data/ghg/scope-1/stationary-combustion/create/create.module';
// import { CreateUpdateModule as ProcessEmissionACModule } from '../activity-config/ghg/scope-1/process-emission/create-update/create-update.module';
// /scope-1/

// scope-2
import { PurchasedEnergyModule } from '../activity-config/ghg/scope-2/purchased-energy/purchased-energy.module';
// /scope-2/
// /ghg/

//non-ghg
import { CreateUpdateModule as ChpAttributionActivityConfigModule } from '../activity-config/non-ghg/chp-attributions/create-update/create-update.module';
import { CreateUpdateModule as ChpAttributionActivityDataModule } from './non-ghg/chp-attribution/create-update/create-update.module';

// TODO-CBAM
// import { CreateUpdateModule as ProcessElectricityConsumptionActivityConfigModule } from '../activity-config/non-ghg/electricity-consumption/TODO-delete/create-update/create-update.module';
// import { CreateUpdateModule as ProcessElectricityConsumptionActivityDataModule } from './non-ghg/process-consumption/create-update/create-update.module';
import { ElectricityConsumptionActivityConfigCreateModule } from '../activity-config/non-ghg/electricity-consumption/create/create.module';
import { ElectricityConsumptionActivityDataCreateModule } from './non-ghg/electricity-consumption/create/create.module';

// import { CreateUpdateModule as ProcessHeatConsumptionActivityConfigModule } from '../activity-config/non-ghg/process-heat-consumption/create-update/create-update.module';
// import { CreateUpdateModule as ProcessHeatConsumptionActivityDataModule } from './non-ghg/process-consumption/create-update/create-update.module';

// import { CreateUpdateModule as ProcessPrecursorConsumptionActivityConfigModule } from '../activity-config/non-ghg/process-precursor-consumption/create-update/create-update.module';
// import { CreateUpdateModule as ProcessPrecursorConsumptionActivityDataModule } from './non-ghg/precursor-consumption-export/create-update/create-update.module';

// import { CreateUpdateModule as ProcessPrecursorExportActivityConfigModule } from '../activity-config/non-ghg/process-precursor-export/create-update/create-update.module';
// import { CreateUpdateModule as ProcessPrecursorExportActivityDataModule } from './non-ghg/precursor-consumption-export/create-update/create-update.module';

// import { CreateUpdateModule as ProcessProductionLevelActivityConfigModule } from '../activity-config/non-ghg/process-production-level/create-update/create-update.module';
import { CreateUpdateModule as ProcessProductionLevelActivityDataModule } from './non-ghg/production-level-old/create-update/create-update.module';

import { CreateUpdateModule as PurchasedPrecursorActivityConfigModule } from '../activity-config/non-ghg/purchased-precursor/create-update/create-update.module';
import { CreateUpdateModule as PurchasedPrecursorActivityDataModule } from './non-ghg/purchased-precursor/create-update/create-update.module';

import { CreateUpdateModule as HeatElectricityExportACModule } from '../activity-config/non-ghg/electricity-heat-export/create-update/create-update.module';
// import { HeatElectricityModule as HeatElectricityExportADModule } from './non-ghg/process-ewh-export/create-update/heat-electricity-export/heat-electricity-export.module';

import { CreateUpdateModule as ProcessFuelConsumptionACModule } from '../activity-config/non-ghg/fuel-consumption/create-update/create-update.module';
import { CreateModule as ProcessFuelConsumptionADmodule } from './non-ghg/fuel-consumption/create/create.module';

// import { CreateUpdateModule as PIMEACModule } from '../activity-config/non-ghg/intermediate-product-export/create-update/create-update.module';
// import { CreateModule as PIMEADModule } from './non-ghg/intermediate-product-export/create/create.module';

// import { CreateUpdateModule as ProcessWasteGasExportACModule } from '../activity-config/non-ghg/process-waste-export/create-update/create-update.module';
import { WasteGasExportCreateModule as ProcessWasteGasExportADModule } from './non-ghg/waste-gas-export/create/create.module';
// /non-ghg/

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ActivityDataRoutingModule,
        ActivityConfigCreateModule,

        // ghg
        // /scope-1/
        MobileCombustionActivityConfigModule,
        StationaryCombutionActivityConfigModule,
        // /scope-1/

        // /scope-2/
        PurchasedEnergyModule,
        // /scope-2/

        // /scope-3/

        // /scope-3/
        // ghg

        // non-ghg
        ChpAttributionActivityConfigModule,
        ChpAttributionActivityDataModule,

        // ProcessElectricityConsumptionActivityConfigModule,
        // ProcessElectricityConsumptionActivityDataModule,
        ElectricityConsumptionActivityConfigCreateModule,
        ElectricityConsumptionActivityDataCreateModule,

        // ProcessHeatConsumptionActivityConfigModule,
        // ProcessHeatConsumptionActivityDataModule,

        // ProcessPrecursorConsumptionActivityConfigModule,
        // ProcessPrecursorConsumptionActivityDataModule,

        // ProcessPrecursorExportActivityConfigModule,
        // ProcessPrecursorExportActivityDataModule,

        // ProcessProductionLevelActivityConfigModule,
        ProcessProductionLevelActivityDataModule,

        PurchasedPrecursorActivityConfigModule,
        PurchasedPrecursorActivityDataModule,
        HeatElectricityExportACModule,
        // HeatElectricityExportADModule,

        ProcessFuelConsumptionACModule,
        ProcessFuelConsumptionADmodule,

        // PIMEACModule,
        // PIMEADModule,
        
        // ProcessWasteGasExportACModule,
        ProcessWasteGasExportADModule
        // /non-ghg/
    ]
})
export class ActivityDataModule { }
