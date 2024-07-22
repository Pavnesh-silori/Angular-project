import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnergyConsumedComponent } from './_templates/energy-consumed/energy-consumed.component';
import { MeterReadingComponent } from './_templates/meter-reading/meter-reading.component';
import { HhvEnergyConsumedComponent } from './_templates/hhv-energy-consumed/hhv-energy-consumed.component';
import { HhvMeterReadingComponent } from './_templates/hhv-meter-reading/hhv-meter-reading.component';

const routes: Routes = [
    {
        path: 'energy-consumed',
        component: EnergyConsumedComponent
    },
    {
        path: 'meter-reading',
        component: MeterReadingComponent
    },
    {
        path: 'hhv-energy-consumed',
        component: HhvEnergyConsumedComponent
    },
    {
        path: 'hhv-meter-reading',
        component: HhvMeterReadingComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }
