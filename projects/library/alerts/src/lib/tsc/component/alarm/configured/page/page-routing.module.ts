import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfiguredAlarmPageComponent } from './page.component';

const routes: Routes = [
    {
        path: '',
        component: ConfiguredAlarmPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfiguredAlarmPageRoutingModule { }
