import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesLayoutComponent } from '@rootProject/Layout/pages-layout/pages-layout.component';

import { environment } from 'src/environments/environment';
import { PagePathEnum } from '@Account/enum/page-path.enum';
import { ExceptionPageJson } from '@Account/constants/exception-page-json';

import { AppLayoutComponent } from '@Account/layout/layout/app-layout/app-layout.component';

// library
import { StaticPageOneComponent } from '@library/tsc-common';
import { PageLayoutComponent } from '@Account/layout/layout/page-layout/page-layout.component';
import { ApplicationKeyID } from '@library/application-service';
import { AuthGuard } from '@library/authentication-service';
// /library

const routes: Routes = [
    {
        path: '',
        redirectTo: PagePathEnum.ACCOUNT_APP_HOME_PAGE,
        pathMatch: 'full'
    },
    {
        path: '',
        component: PagesLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('@Account/component/sign-in/logins.module').then(m => m.LoginsModule)
            }, 
            {
                path: 'password',
                loadChildren: () => import('@Account/component/password/password.module').then(m => m.PasswordModule)
            },
        ]
    },
    {
        path: '',
        component: PageLayoutComponent,
        children: [
            {
                path: 'user/sign-up',
                loadChildren: () => import('@Account/component/sign-up/user-sign-up/user-sign-up.module').then(m => m.UserSignUpModule),
            },
            {
                path: 'sign-up/netzero',
                loadChildren: () => import('@Account/component/sign-up/sign-up.module').then(m => m.SignUpModule),
                data: { applicationKeyID: ApplicationKeyID.NETZERO_KEY_ID }
            },
            {
                path: 'sign-up/water',
                loadChildren: () => import('@Account/component/sign-up/sign-up.module').then(m => m.SignUpModule),
                data: { applicationKeyID: ApplicationKeyID.WATER_KEY_ID }
            },
            {
                path: 'sign-up/energy',
                loadChildren: () => import('@Account/component/sign-up/sign-up.module').then(m => m.SignUpModule),
                data: { applicationKeyID: ApplicationKeyID.ENERGY_KEY_ID }
            },
            {
                path: 'sign-up/enviro',
                loadChildren: () => import('@Account/component/sign-up/sign-up.module').then(m => m.SignUpModule),
                data: { applicationKeyID: ApplicationKeyID.ENVIRO_KEY_ID }
            },
            {
                path: 'invalid-link',
                component: StaticPageOneComponent,
                data: { data: ExceptionPageJson.invalidLInk }
            },
            {
                path: 'link-expired',
                component: StaticPageOneComponent,
                data: { data: ExceptionPageJson.linkExpired }
            }
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('@Account/component/profile/profile.module').then(m => m.ProfileModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'app',
                loadChildren: () => import('@library/tsc-common').then(m => m.ApplicationModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            }, 
            {
                path: 'compliance',
                loadChildren: () => import('@Account/component/compliance/compliance.module').then(m => m.ComplianceModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'security',
                loadChildren: () => import('@Account/component/security/security.module').then(m => m.SecurityModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'session',
                loadChildren: () => import('@Account/component/session/session.module').then(m => m.SessionModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'design/facility',
                loadChildren: () => import('@Account/component/design/design.module').then(m => m.DesignModule),
                data: { appURL: environment.ACCOUNT_URL },
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '**',
        redirectTo: PagePathEnum.ACCOUNT_APP_HOME_PAGE,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
