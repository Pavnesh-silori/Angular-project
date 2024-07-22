import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'other-fugitive-sources',
        loadChildren: () => import('./other-sources/other-sources.module').then(m => m.OtherSourcesModule)
        
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherFugitiveSourcesRoutingModule { }
