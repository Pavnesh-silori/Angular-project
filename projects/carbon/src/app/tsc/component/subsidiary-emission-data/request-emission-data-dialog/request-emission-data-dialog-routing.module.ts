import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestEmissionDataDialogComponent } from './request-emission-data-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: RequestEmissionDataDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestEmissionDataDialogRoutingModule { }
