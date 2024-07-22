import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing-page/view.module').then(m => m.ViewModule)
    },
    {
        path: '',
        loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseYearRoutingModule { }
