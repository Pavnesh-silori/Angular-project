import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElectricityHeatExportPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ElectricityHeatExportPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElectricityHeatExportPageRoutingModule { }
