import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'profile',
                loadChildren: () => import('./view/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'profile/update',
                loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
