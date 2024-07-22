import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelConsumptionRoutingModule } from './fuel-consumption-routing.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // PageModule,
    FuelConsumptionRoutingModule,
  ]
})
export class FuelConsumptionModule { }
