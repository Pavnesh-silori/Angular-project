import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorRoutingModule } from './factor-routing.module';
import { FactorComponent } from './factor.component';
import { MatCardModule } from '@angular/material/card';

import { DetailModule } from './detail/detail.module';
import { ValueModule } from './value/value.module';
// import { SourceModule } from './source/source.module';
import { PurchasedEnergyModule } from './value/emission/purchased-energy/purchased-energy.module';
import { PurchasedEnergyModule as RefPurchasedEnergy } from './reference-data/purchased-energy/purchased-energy.module';
import { MobileCombustionModule as RefDataMobileCombustionModule } from './reference-data/mobile-combustion/mobile-combustion.module';
import { PurchasedEnergyModule as PurchasedEnergyEstimationFactorValueModule } from './value/estimation/purchased-energy/purchased-energy.module';
import { ReferenceDataStationaryCombustionModule } from './reference-data/stationary-combustion/stationary-combustion.module';
import { PurchasedGoodsServicesModule } from './reference-data/purchased-goods-services/purchased-goods-services.module';

@NgModule({
    declarations: [FactorComponent],
    imports: [
        CommonModule,
        FactorRoutingModule,
        MatCardModule,
        DetailModule,
        ValueModule,
        // SourceModule,
        PurchasedEnergyModule,
        RefPurchasedEnergy,
        RefDataMobileCombustionModule,
        PurchasedEnergyEstimationFactorValueModule,
        ReferenceDataStationaryCombustionModule,
        PurchasedGoodsServicesModule
    ]
})
export class FactorModule { }
