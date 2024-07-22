import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'purchased-electricity',
        loadChildren: () => import('./purchased-energy/purchased-energy.module').then(m => m.PurchasedEnergyModule)
    },
    {
        path: 'mobile-combustion',
        loadChildren: () => import('./mobile-combustion/mobile-combustion.module').then(m => m.MobileCombustionModule)
    },
    {
        path: 'stationary-combustion',
        loadChildren: () => import('./stationary-combustion/stationary-combustion.module').then(m => m.StationaryCombustionModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReferenceDataRoutingModule { }
