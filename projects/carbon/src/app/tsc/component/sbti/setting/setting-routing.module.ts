import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'sbti',
        children: [
            {
                path: '',
                loadChildren: () => import('./view/view.module').then(m => m.ViewModule),
                data: { action: 'CREATE'}
            },
            {
                path: 'update',
                loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
                data: { action: 'UPDATE' }
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SettingRoutingModule { }
