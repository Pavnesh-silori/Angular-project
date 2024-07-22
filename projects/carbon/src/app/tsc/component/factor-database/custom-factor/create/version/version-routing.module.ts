import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactorComponent } from '../factor/factor.component';

import { PurchasedEnergyComponent } from '../factor/reference-data/purchased-energy/purchased-energy.component';
import { PurchasedEnergyComponent as refDataPE } from '../factor/reference-data/purchased-energy/purchased-energy.component';


const routes: Routes = [
    {
        path: ':factorID/version/create',
        component: FactorComponent,
        children: [
            {
                path: 'emission/purchased-energy',
                component: PurchasedEnergyComponent,
                outlet: 'value'
            },
            {
                path: 'purchased-electricity',
                component: refDataPE,
                outlet: 'reference'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VersionRoutingModule { }
