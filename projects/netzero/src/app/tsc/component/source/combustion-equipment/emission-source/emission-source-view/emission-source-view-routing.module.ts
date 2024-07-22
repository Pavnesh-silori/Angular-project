import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmissionSourceViewComponent } from './emission-source-view.component';
import { EmissionSourceComponent } from '../emission-source.component';

const routes: Routes = [
    {
        path: '',
        component: EmissionSourceViewComponent,
        children: [
            {
                path: 'view',
                component: EmissionSourceComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmissionSourceViewRoutingModule { }
