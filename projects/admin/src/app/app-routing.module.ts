import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from 'src/environments/environment';
import { PagePathEnum } from '@Admin/enum/page-path.enum';

import { AppLayoutComponent } from '@Admin/layout/layout/app-layout/app-layout.component';
import { SuccessComponent } from '@Admin/component/authorization/success/success.component';
import { TabComponent } from '@Admin/component/organization/tab/tab.component';

//tsc-library
import {
    LayoutOneComponent,
    StaticPageOneComponent,
    StaticPageTwoComponent,
    StaticPageOneJson
} from '@library/tsc-common';

import { AuthGuard } from '@library/authentication-service';
import { ApplicationKeyID } from '@library/application-service';
import { RBACJson, ADMIN_RBAC_CONSTANT, RBACGuard } from '@library/rbac-service';
import { FeatureJson, ADMIN_FEATURE_CONSTANT, FeatureGuard } from '@library/feature-service';
import { AuthorizationComponent } from '@library/authorization';
// /tsc-library/

const routes: Routes = [
    {
        path: '',
        redirectTo: PagePathEnum.ADMIN_APP_HOME_PAGE,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthorizationComponent,
        data: {
            applicationKeyID: ApplicationKeyID.ADMIN_KEY_ID
        }
    },
    {
        path: 'authorization/success',
        component: SuccessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: LayoutOneComponent,
        children: [
            {
                path: 'no-authorization', // rbac guard handler
                component: StaticPageTwoComponent,
                data: { data: RBACJson.noAuthorization }
            },
            {
                path: 'feature-not-available', // feature guard handler
                component: StaticPageTwoComponent,
                data: { data: FeatureJson.featureNotAvailable }
            },
            {
                path: 'no-access',  // from interceptor-one
                component: StaticPageOneComponent,
                data: { data: StaticPageOneJson.noAccess }
            },
            {
                path: 'page-not-found',  // from interceptor-one
                component: StaticPageOneComponent,
                data: { data: StaticPageOneJson.pageNotFound }
            },
            {
                path: 'link-expired',  // from interceptor-one
                component: StaticPageOneComponent,
                data: { data: StaticPageOneJson.linkExpired }
            },
            {
                path: 'organization',
                loadChildren: () => import('@Admin/component/organization/setup/setup.module').then(m => m.SetupModule),
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'app',
                loadChildren: () => import('@library/tsc-common').then(m => m.ApplicationModule),
                data: { appURL: environment.ADMIN_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'users',
                loadChildren: () => import('@Admin/component/user/user.module').then(m => m.UserModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'users-and-roles',
                loadChildren: () => import('@Admin/component/users-and-roles/users-and-roles.module').then(m => m.UsersAndRolesModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'roles',
                loadChildren: () => import('./tsc/component/role/role.module').then(m => m.RoleModule),
                data: { appURL: environment.ADMIN_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'client',
                loadChildren: () => import('@Admin/component/client-id/client-id.module').then(m => m.ClientIdModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'subscription-new',
                loadChildren: () => import('./tsc/component/subscription/subscription.module').then(m => m.SubscriptionModule),
                canActivate: [AuthGuard],
            },
            {
                path: '',
                component: TabComponent,
                children: [
                    {
                        path: 'organization',
                        loadChildren: () => import('@Admin/component/organization/organization.module').then(m => m.OrganizationModule),
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'facility',
                        loadChildren: () => import('@Admin/component/facility/facility.module').then(m => m.FacilityModule),
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'subsidiary',
                        loadChildren: () => import('@Admin/component/subsidiary/subsidiary.module').then(m => m.SubsidiaryModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'parent-organization',
                        loadChildren: () => import('@Admin/component/parent-organization/parent-organization.module').then(m => m.ParentOrganizationModule),
                        canActivate: [AuthGuard]
                    },
                ]
            },
        ]
    },
    {
        path: '**',
        redirectTo: PagePathEnum.ADMIN_APP_HOME_PAGE,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
