import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePathEnum } from '@netzero/enum/page-path.enum';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule),
            },
            {
                path: '**',
                redirectTo: PagePathEnum.NETZERO_APP_HOME_PAGE
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
