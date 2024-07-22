import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'create',
                loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
            },
            {
                path: 'update',
                loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchasedEnergyRoutingModule { }
