import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityHeatExportActivityDataCreateComponent } from './create.component';

const routes: Routes = [{ path: '', component: ElectricityHeatExportActivityDataCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricityHeatExportActivityDataCreateRoutingModule { }
