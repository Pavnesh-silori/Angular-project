import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from 'src/environments/environment';
import { PagePathEnum } from '@netzero/enum/page-path.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { LeftLayoutComponent } from '@netzero/layout/layout/left-layout/left-layout.component';
import { RightLayoutComponent } from '@netzero/layout/layout/right-layout/right-layout.component';

import { SuccessComponent } from '@netzero/component/authorization/success/success.component';

// tsc-library
import { AuthGuard } from '@library/authentication-service';
import { ApplicationKeyID } from '@library/application-service';
import { AuthorizationComponent } from '@library/authorization';
import { OrgSiteAccessType, OrgTypeGuard } from '@library/organization-service';

import {
    LayoutOneComponent,
    StaticPageOneComponent,
    StaticPageTwoComponent,
    StaticPageThreeComponent,
    StaticPageOneJson,
    StaticPageThreeJson,
    VIEW_TYPE_ENUM
} from '@library/tsc-common';

import { CARBON_RBAC_CONSTANT, RBACGuard, RBACJson } from '@library/rbac-service';
import { CARBON_FEATURE_CONSTANT, FeatureGuard, FeatureJson } from '@library/feature-service';
import { ExceptionPageJson } from '@carbon/constant/exception-page-json';
// /tsc-library/

const routes: Routes = [
    {
        path: '',
        redirectTo: PagePathEnum.NETZERO_APP_HOME_PAGE,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthorizationComponent,
        data: {
            applicationKeyID: ApplicationKeyID.NETZERO_KEY_ID
        }
    },
    {
        path: 'authorization/success',
        component: SuccessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: LeftLayoutComponent,
        children: [
            {
                path: 'water',
                component: StaticPageThreeComponent,
                data: {
                    appURL: environment.NETZERO_URL,
                    data: StaticPageThreeJson.featureNotConfigure
                },
                canActivate: [AuthGuard]
            },
            {
                path: 'energy',
                component: StaticPageThreeComponent,
                data: {
                    appURL: environment.NETZERO_URL,
                    data: StaticPageThreeJson.featureNotConfigure
                },
                canActivate: [AuthGuard]
            },
            {
                path: 'waste',
                component: StaticPageThreeComponent,
                data: {
                    appURL: environment.NETZERO_URL,
                    data: StaticPageThreeJson.featureNotConfigure
                },
                canActivate: [AuthGuard]
            },
            {
                path: 'enviro',
                component: StaticPageThreeComponent,
                data: {
                    appURL: environment.NETZERO_URL,
                    data: StaticPageThreeJson.featureNotConfigure
                },
                canActivate: [AuthGuard]
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: 'netzero',
                        loadChildren: () => import('@netzero/component/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL
                        }
                    },
                    {
                        path: 'carbon',
                        loadChildren: () => import('@carbon/component/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL
                        }
                    },
                    {
                        path: 'water/footprint',
                        component: StaticPageThreeComponent,
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        }
                    },
                    {
                        path: 'energy/footprint',
                        component: StaticPageThreeComponent,
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        }
                    },
                    {
                        path: 'waste/footprint',
                        component: StaticPageThreeComponent,
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        }
                    },
                    {
                        path: 'enviro/footprint',
                        component: StaticPageThreeComponent,
                        canActivate: [AuthGuard],
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        }
                    }
                ]
            },
            {
                path: 'sustainability-accounting',
                loadChildren: () => import('@carbon/component/sustainability-accounting/sustainability-accounting.module').then(m => m.SustainabilityAccountingModule),
                canActivate: [AuthGuard],
                data: {
                    appURL: environment.NETZERO_URL
                }
            },
            {
                path: 'cbam',
                loadChildren: () => import('@carbon/component/cbam/cbam.module').then(m => m.CbamModule),
                data: { appURL: environment.NETZERO_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'activity-data',
                loadChildren: () => import('@carbon/component/activity-data/activity-data.module').then(m => m.ActivityDataModule),
                canActivate: [AuthGuard]
                // canActivate: [AuthGuard, RBACGuard]
            },
            {
                path: 'reporting-framework',
                loadChildren: () => import('@report-framework/component/tab/tab.module').then(m => m.TabModule)
            },
            {
                path: 'report',
                loadChildren: () => import('@carbon/component/report/report.module').then(m => m.ReportModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'fugitive-emission-racfs',
                loadChildren: () => import('@carbon/component/activity-data/ghg/scope-1/fugitive-emission/refrigeration-air-conditioning-fire-suppression/refrigeration-air-conditioning-fire-suppression.module').then(m => m.RefrigerationAirConditioningFireSuppressionModule),
                data: { appURL: environment.NETZERO_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'fugitive-release-list',
                loadChildren: () => import('@carbon/component/activity-data/ghg/scope-1/fugitive-emission/other-fugitive-sources/other-sources/fugitive-release/fugitive-release.module').then(m => m.FugitiveReleaseModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'product-manufacturer',
                loadChildren: () => import('@carbon/component/activity-data/ghg/scope-1/fugitive-emission/product-manufacturer/product-manufacturer-tab.module').then(m => m.ProductManufacturerTabModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'subsidiary',
                loadChildren: () => import('@carbon/component/subsidiary/subsidiary.module').then(m => m.SubsidiaryModule),
                canActivate: [AuthGuard, OrgTypeGuard],
                data: {
                    appURL: environment.NETZERO_URL,
                    orgTypeAccess: OrgSiteAccessType.ORG
                }
            },
            {
                path: 'target',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('@carbon/component/sbti/sbti.module').then(m => m.SbtiModule),
                        data: {
                            applicationKeyID: ApplicationKeyID.NETZERO_KEY_ID,
                            appURL: environment.NETZERO_URL,
                            orgSwitchRedirect: 'YES',
                            orgTypeAccess: OrgSiteAccessType.ORG,
                            resourcePermission: [CARBON_RBAC_CONSTANT.TARGET_READ],
                            featureKeyID: CARBON_FEATURE_CONSTANT.TARGET
                        },
                        canActivate: [AuthGuard, RBACGuard, FeatureGuard, OrgTypeGuard]
                    },
                    {
                        path: 'forecast',
                        component: StaticPageThreeComponent,
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        },
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'anomaly-detector',
                        component: StaticPageThreeComponent,
                        data: {
                            appURL: environment.NETZERO_URL,
                            data: StaticPageThreeJson.featureNotConfigure
                        },
                        canActivate: [AuthGuard]
                    }
                ]
            },
            {
                path: 'reminder',
                loadChildren: () => import('@netzero/component/reminders/reminders.module').then(m => m.RemindersModule),
                data: {
                    appURL: environment.NETZERO_URL,
                    orgSwitchRedirect: 'YES'
                },
                canActivate: [AuthGuard],
            }
        ]
    },
    {
        path: '',
        component: RightLayoutComponent,
        children: [
            {
                path: 'faq',
                loadChildren: () => import('@carbon/component/faq/faq.module').then(m => m.FaqModule),
                data: { appURL: environment.NETZERO_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'source',
                loadChildren: () => import('@netzero/component/source/source.module').then(m => m.SourceModule),
                data: { appURL: environment.NETZERO_URL },
                canActivate: [AuthGuard]
            },
            {
                path: 'target-setting',
                loadChildren: () => import('@carbon/component/sbti/setting/setting.module').then(m => m.SettingModule),
                canActivate: [AuthGuard],
            },
            {
                path: 'carbon-setting',
                children: [
                    {
                        path: 'boundary-question',
                        loadChildren: () => import('@carbon/component/boundary-question/boundary-question.module').then(m => m.BoundaryQuestionModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'activity',
                        loadChildren: () => import('@carbon/component/activity/activity.module').then(m => m.ActivityModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'preference',
                        loadChildren: () => import('@carbon/component/preference/preference.module').then(m => m.PreferenceModule),
                        canActivate: [OrgTypeGuard],
                        data: {
                            orgTypeAccess: OrgSiteAccessType.ORG
                        }
                    },
                    // {
                    //     path: 'activity-config',
                    //     loadChildren: () => import('@carbon/component/activity-config/activity-config.module').then(m => m.ActivityConfigModule),
                    //     data: {
                    //         viewType: VIEW_TYPE_ENUM.PAGE
                    //     }
                    // },
                    {
                        path: 'activity-config',
                        loadChildren: () => import('@carbon/component/activity-config/activity-config.module').then(m => m.ActivityConfigModule),
                        // canActivate: [AuthGuard, RBACGuard],
                    },
                    {
                        path: 'activity-configurator',
                        loadChildren: () => import('@carbon/component/activity-data/ghg/scope-1/fugitive-emission/fugitive-configurator/activity-configurator/activity-configurator.module').then(m => m.ActivityConfiguratorModule),
                    },
                    {
                        path: 'activity-configurator/fugitive-configurator',
                        loadChildren: () => import('@carbon/component/activity-data/ghg/scope-1/fugitive-emission/fugitive-configurator/fugitive-emission-configurator/fugitive-emission-configurator.module').then(m => m.FugitiveEmissionConfiguratorModule),
                    },
                    {
                        path: 'structural-change',
                        loadChildren: () => import('@carbon/component/structural-change/structural-change.module').then(m => m.StructuralChangeModule)
                    },
                    {
                        path: 'factor-database',
                        loadChildren: () => import('@carbon/component/factor-database/factor-database.module').then(m => m.FactorDatabaseModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'base-year',
                        loadChildren: () => import('@carbon/component/base-year/base-year.module').then(m => m.BaseYearModule)
                    },
                ]
            },
            {
                path: 'reporting',
                loadChildren: () => import('@report-framework/component/esg-reporting-tab/esg-reporting-tab.module').then(m => m.EsgReportingTabModule),
                canActivate: [AuthGuard],
            },
        ]
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
                path: 'external-subsidiary/emission-data',
                loadChildren: () => import('@carbon/component/subsidiary-emission-data/parent-details/parent-details.module').then(m => m.ParentDetailsModule)
            },
            {
                path: 'emission/submitted-successfully',
                component: StaticPageOneComponent,
                data: { data: ExceptionPageJson.emissionSubmittedSuccessfully }
            },
            {
                path: `${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}/survey/data`,
                loadChildren: () => import('@carbon/component/activity-data/ghg/scope-3/employee-commuting/survey-data/create/create.module').then(m => m.CreateModule)
            },
            {
                path: `${ActivityKeyIDEnum.EMPLOYEE_COMMUTING}/survey/data/submitted-successfully`,
                component: StaticPageOneComponent,
                data: { data: ExceptionPageJson.employeeCommuteSurveySubmittedSuccessfully }
            }
        ]
    },
    {
        path: '**',
        redirectTo: PagePathEnum.NETZERO_APP_HOME_PAGE
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
