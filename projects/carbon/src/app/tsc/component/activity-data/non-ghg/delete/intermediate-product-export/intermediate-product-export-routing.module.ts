import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('../production-level-old/page/page.module').then(m => m.ProductionLevelPageModule)
    },
    {
        path: 'create',
        loadChildren: () => import('@carbon/component/activity-config/non-ghg/intermediate-product-export/create-update/create-update.module').then(m => m.CreateUpdateModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IntermediateProductExportRoutingModule { }
