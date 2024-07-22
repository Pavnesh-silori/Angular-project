import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WasteGasExportCreateComponent } from './create.component';

const routes: Routes = [
    {
        path: '',
        component: WasteGasExportCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WasteGasExportCreateRoutingModule { }
