import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { 
        path: 'reduction', 
        children: [
            {
                path: 'create',
                loadChildren: () => import('./reduction/reduction.module').then(m => m.ReductionModule) 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LongTermRoutingModule { }
