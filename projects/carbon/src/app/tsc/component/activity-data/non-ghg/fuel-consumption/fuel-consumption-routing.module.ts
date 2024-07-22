import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAction } from '@library/tsc-common';
const routes: Routes = [
  {
    path:'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path:'create',
    loadChildren: () => import('@carbon/component/activity-config/non-ghg/fuel-consumption/create-update/create-update.module').then(m => m.CreateUpdateModule),
    data:{
      routeData: FormAction.CREATE
    }
  },
  {
    path:'update',
    loadChildren: () => import('@carbon/component/activity-data/non-ghg/fuel-consumption/create/create.module').then(m => m.CreateModule),
    data:{
      routeData: FormAction.UPDATE
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelConsumptionRoutingModule { }
