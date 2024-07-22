import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasedEnergyComponent } from './emission/purchased-energy/purchased-energy.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: ValueComponent
    // },
    {
        path: 'emission',
        children: [
            {
                path: 'purchased-energy',
                component: PurchasedEnergyComponent
            }
        ]
        // loadChildren: () => import('./emission/emission.module').then(m => m.EmissionModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ValueRoutingModule { }
