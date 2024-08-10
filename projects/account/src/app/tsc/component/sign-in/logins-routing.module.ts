import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Login',
            status: false
        },
        children: [
            {
                path: 'login',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'sso/:ssoAD/call-back',
                loadChildren: () => import('./sso/sso.module').then(m => m.SsoModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginsRoutingModule { }
