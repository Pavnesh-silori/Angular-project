import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefrigerationAndFireSuppressionEquipmentsRoutingModule { }
