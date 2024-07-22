import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricityHeatExportViewComponent } from './view.component';

const routes: Routes = [
  {
    path:'',
    component:ElectricityHeatExportViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricityHeatExportViewRoutingModule { }
