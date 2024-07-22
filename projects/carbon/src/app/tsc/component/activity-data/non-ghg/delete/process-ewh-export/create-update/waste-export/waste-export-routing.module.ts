import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WasteExportComponent } from './waste-export.component';

const routes: Routes = [
  {
    path:'',
    component: WasteExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WasteExportRoutingModule { }
