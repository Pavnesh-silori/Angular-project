import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    },
    {
        path: ':fuelCode/view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FuelRoutingModule { }
