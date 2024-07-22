import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'ghg-emission-report',
        loadChildren: () => import('./ghg-report/ghg-report.module').then(m => m.GhgReportModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ReportRoutingModule { }
