import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [

    {
        path: 'page',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule),
        data: { activityKeyID: ActivityKeyIDEnum.STATIONARY_COMBUSTION }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StationaryCombustionRoutingModule { }
