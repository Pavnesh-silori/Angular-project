import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhgEmissionReportComponent } from './ghg-emission-report.component';

const routes: Routes = [
    {
        path: '',
        component: GhgEmissionReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GhgEmissionReportRoutingModule { }
