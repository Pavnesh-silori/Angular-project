import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
    {
        path: ActivityKeyIDEnum.STATIONARY_COMBUSTION,
        loadChildren: () => import('../scope-1/stationary-combustion/stationary-combustion.module').then(m => m.StationaryCombustionModule),
        data: { activityKeyID: ActivityKeyIDEnum.STATIONARY_COMBUSTION }

    },
    // {
    //     path: ActivityKeyIDEnum.MOBILE_COMBUSTION,
    //     loadChildren: () => import('./mobile-combustion/mobile-combustion.module').then(m => m.MobileCombustionModule),
    //     data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
    // },
    {
        path: 'activity',
        loadChildren: () => import('./mobile-combustion2/mobile-combustion.module').then(m => m.MobileCombustionModule),
        data: { activityKeyID: ActivityKeyIDEnum.MOBILE_COMBUSTION }
    },
    {
        path: ActivityKeyIDEnum.PROCESS_EMISSION,
        loadChildren: () => import('../scope-1/process-emission/process-emission.module').then(m => m.ProcessEmissionActivityDataModule),
        data: { activityKeyID: ActivityKeyIDEnum.PROCESS_EMISSION }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Scope1RoutingModule { }
