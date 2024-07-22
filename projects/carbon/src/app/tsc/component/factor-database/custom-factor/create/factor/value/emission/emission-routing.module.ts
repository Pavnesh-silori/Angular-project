import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedEnergyComponent } from './purchased-energy/purchased-energy.component';

const routes: Routes = [
    {
        path: 'purchased-energy',
        component: PurchasedEnergyComponent
        // loadChildren: () => import('./purchased-energy/purchased-energy.module').then(m => m.PurchasedEnergyModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmissionRoutingModule { }
