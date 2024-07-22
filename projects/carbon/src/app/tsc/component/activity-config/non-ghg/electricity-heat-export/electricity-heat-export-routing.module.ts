
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
    {
        path: 'view/:activityConfigID',
        loadChildren: () => import('./view/view.module').then(m => m.ElectricityHeatExportViewModule),
        data: { activityKeyID: ActivityKeyIDEnum.PROCESS_HEAT_EXPORT }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActivityConfigElectricityHeatExportRoutingModule { }
