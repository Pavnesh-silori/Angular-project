import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    },
    {
        path: '',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    
    
// config routing
    //create
    {
        path: 'activity/'+ActivityKeyIDEnum.MOBILE_COMBUSTION ,
        loadChildren: () => import('./ghg/scope-1/mobile-combustion2/mobile-combustion2.module').then(m => m.MobileCombustion2Module)
    },
    // update
    {
        path: ':activityConfigID/activity/'+ActivityKeyIDEnum.MOBILE_COMBUSTION,
        loadChildren: () => import('./ghg/scope-1/mobile-combustion2/mobile-combustion2.module').then(m => m.MobileCombustion2Module)
    },
 // config routing/


    {
        path: ':activityConfigID',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    {
        path: ':activityConfigID',
        loadChildren: () => import('./view/view.module').then(m => m.ActivityConfigViewModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActivityConfigRoutingModule { }
