import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SourcingReportComponent } from './sourcing.component';

const routes: Routes = [
    {
        path: '',
        component: SourcingReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourcingReportRoutingModule { }
