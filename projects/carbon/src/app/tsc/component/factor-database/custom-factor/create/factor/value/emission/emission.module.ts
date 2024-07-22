import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionRoutingModule } from './emission-routing.module';
import { PurchasedEnergyModule } from './purchased-energy/purchased-energy.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EmissionRoutingModule,
        PurchasedEnergyModule
    ]
})
export class EmissionModule { }
