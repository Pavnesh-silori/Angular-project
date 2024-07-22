import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmissionDataComponent } from './emission-data.component';

const routes: Routes = [
  {
    path: '',
    component: EmissionDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmissionDataRoutingModule { }
