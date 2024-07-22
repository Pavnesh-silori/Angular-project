import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
    {
        path: 'purchased-electricity',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule),
        data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_ELECTRICITY }
    },
    {
        path:'purchased-heat-steam',
        loadChildren:()=>import('./list/list.module').then(m=>m.ListModule),
        data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_HEAT_STEAM }
    },
    {
        path:'purchased-cooling',
        loadChildren:()=>import('./list/list.module').then(m=>m.ListModule),
        data: { activityKeyID: ActivityKeyIDEnum.PURCHASED_COOLING }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Scope2RoutingModule { }
