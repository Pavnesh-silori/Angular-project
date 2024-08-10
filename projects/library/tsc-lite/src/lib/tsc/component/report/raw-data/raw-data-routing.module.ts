import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RawDataReportComponent } from './raw-data.component';

const routes: Routes = [
    {
        path: '',
        component: RawDataReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RawDataReportRoutingModule { }
