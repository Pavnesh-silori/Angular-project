import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAction } from '@library/tsc-common';

const routes: Routes = [
    // TODO-CBAM 
    // {
    //     path: 'create',
    //     loadChildren: () => import('@carbon/component/activity-config/non-ghg/process-waste-export/process-waste-gases-export.module').then(m => m.WasteGasesExportModule),
    //     data: {
    //         routeData: FormAction.CREATE
    //     }
    // },
    // {
    //     path: 'update',
    //     loadChildren: () => import('@carbon/component/activity-data/non-ghg/waste-gas-export/create/create.module').then(m => m.WasteGasExportCreateModule),
    //     data: {
    //         routeData: FormAction.UPDATE
    //     }
    // },
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.WasteGasExportPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WasteGasExportRoutingModule { }
