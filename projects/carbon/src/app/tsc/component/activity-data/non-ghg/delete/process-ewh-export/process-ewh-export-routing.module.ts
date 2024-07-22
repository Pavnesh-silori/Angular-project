import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('@carbon/component/activity-config/non-ghg/process-waste-export/create-update/create-update.module').then(m=>m.CreateUpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessEwhExportRoutingModule { }
