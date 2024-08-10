import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratedAlarmPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: GeneratedAlarmPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GeneratedAlarmPageRoutingModule { }
