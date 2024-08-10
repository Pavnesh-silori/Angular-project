import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CgwaReportComponent } from './cgwa.component';

const routes: Routes = [
    {
        path: '',
        component: CgwaReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CgwaReportRoutingModule { }
