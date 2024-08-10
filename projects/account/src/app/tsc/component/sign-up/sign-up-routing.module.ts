import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExceptionPageJson } from '@Account/constants/exception-page-json'; 
import { RegistrationSuccessfulComponent } from '@Account/component/sign-up/registration-successful/registration-successful.component';

// library
import { StaticPageOneComponent } from '@library/tsc-common';
// /library

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./org-sign-up/org-sign-up.module').then(m => m.OrgSignUpModule)
            },
            {
                path: 'successful',
                component: RegistrationSuccessfulComponent
            },
            {
                path: 'successful-to-login',
                component: StaticPageOneComponent,
                data: { data: ExceptionPageJson.signUpToLogin }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SignUpRoutingModule { }
