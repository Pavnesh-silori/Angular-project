import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatElectricityExportComponent } from './heat-electricity-export.component';

const routes: Routes = [
  {
    path:'',
    component:HeatElectricityExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatElectricityExportRoutingModule { }
