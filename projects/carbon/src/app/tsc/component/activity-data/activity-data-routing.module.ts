import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    {
        path: '',
        loadChildren: () => import('./ghg/ghg.module').then(m => m.GhgModule)
    }, 
    
    {
        path: ':activityDataID',
        loadChildren: () => import('./update/update.module').then(m => m.UpdateModule)
    },  
    {
        path: ':activityDataID',
        loadChildren: () => import('./ghg/ghg.module').then(m => m.GhgModule)
    }   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityDataRoutingModule { }
