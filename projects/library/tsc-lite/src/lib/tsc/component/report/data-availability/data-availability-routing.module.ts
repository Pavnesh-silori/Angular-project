import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataAvailabilityReportComponent } from './data-availability.component';

const routes: Routes = [
    {
        path: '',
        component: DataAvailabilityReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DataAvailabilityReportRoutingModule { }
