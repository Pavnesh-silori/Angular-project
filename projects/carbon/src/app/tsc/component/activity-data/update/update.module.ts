import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { PurchasedEnergyModule } from '@carbon/component/activity-config/ghg/scope-2/purchased-energy/purchased-energy.module';
import { MobileCombustionModule } from '@carbon/component/activity-config/ghg/scope-1/mobile-combustion/mobile-combustion.module';
import { StationaryCombustionModule } from '@carbon/component/activity-config/ghg/scope-1/stationary-combustion/stationary-combustion.module';

import { CreateModule } from '@carbon/component/activity-data/ghg/scope-2/create/create.module';
import { MobileCombustionModule as MobileCombustionADModule } from '@carbon/component/activity-data/ghg/scope-1/mobile-combustion/mobile-combustion.module';
import { StationaryCombustionModule as StationaryCombutionADModule } from '@carbon/component/activity-data/ghg/scope-1/stationary-combustion/stationary-combustion.module';
import { CreateUpdateModule as WasteGeneratedInOperationADModule } from '../ghg/scope-3/waste-generated/create-update/create-update.module';
import { CreateModule as WasteGeneratedInOperationACModule } from '@carbon/component/activity-config/ghg/scope-3/waste-generated/create/create.module';

// import { CreateUpdateModule as  ProductionLevelModule} from '../non-ghg/production-level-old/create-update/create-update.module';
// import { ProductionLevelActivityConfigCreateModule } from '@carbon/component/activity-config/non-ghg/production-level/create/create.module';
import { ElectricityHeatExportActivityDataCreateModule } from '../non-ghg/electricity-heat-export/create/create.module';
import { ProcessEmissionActivityDataCreateModule } from '../ghg/scope-1/process-emission/create/create.module';
import { ElectricityConsumptionActivityDataCreateModule } from '../non-ghg/electricity-consumption/create/create.module';

@NgModule({
    declarations: [
        UpdateComponent
    ],
    imports: [
        CommonModule,
        UpdateRoutingModule,
        MatTabsModule,
        MatCardModule,
        PerfectScrollbarModule,
        PurchasedEnergyModule,
        MobileCombustionModule,
        StationaryCombustionModule,
        CreateModule,
        MobileCombustionADModule,
        StationaryCombutionADModule,
        WasteGeneratedInOperationACModule,
        WasteGeneratedInOperationADModule,
        ElectricityHeatExportActivityDataCreateModule,
        ProcessEmissionActivityDataCreateModule,
        ElectricityConsumptionActivityDataCreateModule,
    ]
})

export class UpdateModule { }
