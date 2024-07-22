import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WasteGasExportPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: WasteGasExportPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WasteGasExportPageRoutingModule { }
