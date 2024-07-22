import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'page',
                loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
            },
            {
                path: '',
                loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TargetRoutingModule { }
