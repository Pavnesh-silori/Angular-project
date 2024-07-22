import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherSourcesComponent } from './other-sources.component';

const routes: Routes = [
    {
        path: ':otherSourceType',
        component: OtherSourcesComponent,
        children: [
            {
                path: 'fugitive-release-list',
                loadChildren: () => import('./fugitive-release/fugitive-release.module').then(m => m.FugitiveReleaseModule)
            },
        ]
            }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherSourcesRoutingModule { }
