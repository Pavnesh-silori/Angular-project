import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'purchased-energy',
        loadChildren: () => import('./purchased-energy/purchased-energy.module').then(m => m.PurchasedEnergyModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstimationRoutingModule { }
