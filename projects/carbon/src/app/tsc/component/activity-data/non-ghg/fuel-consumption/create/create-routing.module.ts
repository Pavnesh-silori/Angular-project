import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FuelConsumptionActivityDataCreateComponent} from './create.component'
const routes: Routes = [
  {
    path:'',
    component:FuelConsumptionActivityDataCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
