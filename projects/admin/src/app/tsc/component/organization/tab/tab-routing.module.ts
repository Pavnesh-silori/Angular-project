import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TabComponent } from './tab.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: TabComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: () => import('../organization.module').then(m => m.OrganizationModule)
    //         },
    //         {
    //             path: '',
    //             loadChildren: () => import('../../facility/facility.module').then(m => m.FacilityModule)
    //         },
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabRoutingModule { }
