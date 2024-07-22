import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileCombustion2Component } from './mobile-combustion.component';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { FeatureGuard } from '@library/feature-service';

const routes: Routes = [
    {
        path: ActivityKeyIDEnum.MOBILE_COMBUSTION,
        children: [{
            path: 'update',
            component: MobileCombustion2Component,
            data: {
                activityID: 5,
                activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION,
                action: "update",
                from: "record"
            },
            // canActivate: [FeatureGuard]
        },
        {
            path: 'create',
            loadChildren: () => import('@carbon/component/activity-config/ghg/scope-1/mobile-combustion2/mobile-combustion2.module').then(m => m.MobileCombustion2Module),
            data: {
                activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION,
                activityID: 5,
                origin: "ad-hoc",
                action: "create",
                from: "record"
            },
            // canActivate: [FeatureGuard]
        },
        {
            path: 'page',
            loadChildren: () => import('./page/page.module').then(m => m.PageModule),
            // canActivate: [FeatureGuard]

        },
        {
            path: '',
            loadChildren: () => import('@carbon/component/activity-config/ghg/scope-1/mobile-combustion2/mobile-combustion2.module').then(m => m.MobileCombustion2Module),
            data: {
                activityID: 5,
                origin: "ad-hoc",
                action: "create",
                usePFF: "YES",
            },
            // canActivate: [FeatureGuard]
        }],
        

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileCombustionRoutingModule { }
