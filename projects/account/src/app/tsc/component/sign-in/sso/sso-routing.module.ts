import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SsoComponent } from './sso.component';

const routes: Routes = [
    {
        path: '',
        component: SsoComponent,
        data: {
            title: 'SSO'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SsoRoutingModule { }
