import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'near-term',
                loadChildren: () => import('./sme/near-term/near-term.module').then(m => m.NearTermModule)
            },
            {
                path: 'long-term',
                loadChildren: () => import('./sme/long-term/long-term.module').then(m => m.LongTermModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }
