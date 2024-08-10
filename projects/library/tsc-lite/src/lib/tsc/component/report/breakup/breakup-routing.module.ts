import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreakupReportComponent } from './breakup.component';

const routes: Routes = [
    {
        path: '',
        component: BreakupReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BreakupReportRoutingModule { }
