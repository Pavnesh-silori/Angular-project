import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcessHeatConsumptionRoutingModule { }
