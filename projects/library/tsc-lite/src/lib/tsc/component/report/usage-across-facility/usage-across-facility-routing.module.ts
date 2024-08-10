import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsageAcrossFacilityComponent } from './usage-across-facility.component';

const routes: Routes = [
    {
        path: '',
        component: UsageAcrossFacilityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsageAcrossFacilityRoutingModule { }
