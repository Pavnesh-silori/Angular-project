import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { FeatureGuard } from '@library/feature-service';

const routes: Routes = [
    {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
        data: {
            activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION,
            origin: "pff",
            action: "create",
        },
        // canActivate: [FeatureGuard]
    },
    {
        path: 'update',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
        data: {
            activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION,
            origin: "pff",
            action: "update",
        },
        // canActivate: [FeatureGuard]
    },
    {
        path: 'adhoc',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
        // canActivate: [FeatureGuard]
    },
    {
        path: 'create-using-prefilled/:activityConfigID',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule), 
        // canActivate: [FeatureGuard]
    },
    {
        path: 'view',
        loadChildren: () => import('./view/view.module').then(m => m.ViewModule),
        data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION },
        // canActivate: [FeatureGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MobileCombustion2RoutingModule { }
