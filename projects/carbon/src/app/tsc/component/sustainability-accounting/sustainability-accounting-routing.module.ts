import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { ViewModule } from './view/view.module';

import { RecordDetailsComponent } from './record-details/record-details.component';
import { RecordDetailsModule } from './record-details/record-details.module';

// import { CARBON_FEATURE_CONSTANT } from '@CarbonNetZero/constant/carbon-feature.constant';
// import { FeatureGuard } from '@rootApp/net-zero/guard/feature.guard';

const routes: Routes = [
    {
        path: 'carbon',
        children: [
            {
                path: 'page',
                loadChildren: () => import('./list/list.module').then(m => m.CarbonModule),
                // canActivate: [FeatureGuard],
                // data: { featureKeyID: CARBON_FEATURE_CONSTANT.CARBON_LEDGER }
            },
            {
                path: 'view/:activityKeyID/:activityDataID/:calculatedEmissionDataID',
                component: ViewComponent
            },
            // {
            //     path: '',
            //     loadChildren: () => import('../import-record/import-record.module').then(m => m.ImportRecordModule)
            // },
            {
                path: 'activity-data',
                loadChildren: () => import('../activity-config/activity-config.module').then(m => m.ActivityConfigModule)
            },
            {
                path:'record-details/:calculationApproachKeyID/:calculatedEmissionDataID',
                component:RecordDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ViewModule
    ],
    exports: [RouterModule]
})
export class SustainabilityAccountingRoutingModule { }
