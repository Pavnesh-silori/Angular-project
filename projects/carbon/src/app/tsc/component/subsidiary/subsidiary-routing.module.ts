import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'emission',
        loadChildren: () => import('./emission/tab/tab.module').then(m => m.EmissionModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubsidiaryRoutingModule { }
