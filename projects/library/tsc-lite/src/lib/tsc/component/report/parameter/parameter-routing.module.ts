import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParameterReportComponent } from './parameter.component';

const routes: Routes = [
    {
        path: '',
        component: ParameterReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ParameterReportRoutingModule { }
