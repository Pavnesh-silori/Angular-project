import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'reduction',
        children: [
            {
                path: ':targetType/create',
                loadChildren: () => import('./reduction/reduction.module').then(m => m.ReductionModule)
            },
            {
                path: ':targetID/update',
                loadChildren: () => import('./reduction/reduction.module').then(m => m.ReductionModule)
            }
        ],
    },
    {
        path: 'maintenance',
        children: [
            {
                path: 'create',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
            },
            {
                path: ':targetID/update',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NearTermRoutingModule { }
